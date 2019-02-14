import { offbeatReducer, resolveChords, randomDelay, getDuration, getNextVoicing, analyzeVoiceLeading, transposeToRange } from '../util';
import { Musician } from './Musician';
import { Instrument } from '../instruments/Instrument';
import { swing } from '../grooves/swing';

export default class Pianist extends Musician {
    name = 'Pianist';
    playedNotes = [];
    playedPatterns = [];
    playedChords = [];
    defaults = { intelligentVoicings: true, groove: swing, noTonic: true };
    min = Math.min;
    rollFactor = 1; // how much keyroll effect? controls interval between notes
    props: any;
    range = ['C3', 'C5'];
    instrument: Instrument;
    constructor(instrument, props = {}) {
        super(instrument);
        this.props = Object.assign({}, this.defaults, props || {});
    }

    play({ pulse, measures, settings }) {
        const groove = settings.groove || this.defaults.groove;
        const grooveKey = 'chords';
        // if no groove or groove without chords, or exact, play whats there
        // TODO: exact timing is false with metronome
        if (settings.exact || !groove || !groove[grooveKey]) {
            if (!groove[grooveKey]) {
                console.warn('Groove has no chords, Pianist will play exact.', groove);
            }
            measures = measures
                .map((pattern, i) => resolveChords(pattern, measures, [i]));
            return pulse.tickArray(measures, ({ value, deadline }) => {
                const fraction = getDuration(value.divisions, 1); // TODO: find out why value fraction is NaN
                const duration = fraction * pulse.getMeasureLength();
                this.playChord(value.chord || value, { deadline: deadline, duration, pulse });
            });
        }
        // else, play groovy
        const pattern = groove[grooveKey];
        measures = measures
            // generate random patterns
            .map(measure => pattern({ measures, pulse, measure, settings }).slice(0, Math.floor(settings.cycle)))
            // fill in chords
            .map((pattern, i) => resolveChords(pattern, measures, [i]))
            // fix chords at last offbeat
            .reduce(offbeatReducer(settings), []);
        pulse.tickArray(measures, ({ path, value, deadline }) => {
            const measureLength = pulse.getMeasureLength();
            const concurrency = settings.bpm / (this.rollFactor || 1);
            let interval = settings.arpeggio ? measureLength / settings.cycle : Math.random() / (concurrency * 20);
            if (path[0] % 2 === 0 && !path[1] && !path[2]) {
                interval = Math.random() / concurrency;
            }
            const duration = settings.arpeggio ? interval : value.fraction * measureLength;
            const slice = settings.arpeggio ? Math.ceil(value.fraction / 1000 * 4) : null;
            const gain = this.getGain(value.gain);
            this.playChord(value.chord, { deadline, gain, duration, interval, slice, pulse });
        }, settings.deadline);
    }

    getLastVoicing() {
        return this.playedNotes.length ? this.playedNotes[this.playedNotes.length - 1] : null;
    }

    /* getVoicing(scorenotes, before, tonic?) {
        if (!before) {
            return scorenotes;
        }
        const near = intervalMatrix(before, scorenotes)
            .map((intervals, index) => {
                const smallest = [].concat(intervals).sort(sortMinInterval())[0];
                if (!Distance.transpose(before[intervals.indexOf(smallest)], smallest)) {
                    console.warn('ALARM', before[intervals.indexOf(smallest)], smallest, intervals);
                }
                return Distance.transpose(before[intervals.indexOf(smallest)], smallest);
            }).filter(n => !!n)
            .filter(n => Note.simplify(n, true));
        return near && near.length ? near : scorenotes;
    } */


    // plays the given notes at the given interval
    playNotes(scorenotes, { tonic, deadline, interval, gain, duration, pulse }) {
        /* if (this.props.intelligentVoicings && this.getLastVoicing()) {
            scorenotes = this.getVoicing(scorenotes, this.getLastVoicing(), tonic);
        } */
        scorenotes = transposeToRange(scorenotes, this.range);
        this.playedNotes.push([].concat(scorenotes));

        this.instrument.playNotes(scorenotes, { deadline, interval, gain, duration, pulse });
    }

    playChord(chord, settings) {
        if (chord === 'x') { // repeat
            chord = this.playedChords[this.playedChords.length - 1];
        }
        if (!chord || chord === '0') {
            this.playedChords.push('')
            return;
        }
        this.playedChords.push(chord);

        let notes = getNextVoicing(chord, this.getLastVoicing()/* , this.range */); // TODO: range currently only respects first note


        /*         if (this.playedNotes.length > 1) {
                    const { movement, averageDifference, latestDifference, latestMovement } = analyzeVoiceLeading(this.playedNotes);
                    console.log(chord, notes, Math.round(averageDifference * 10) / 10, latestMovement);
                } else {
                    console.log(chord, notes);
                } */

        settings.deadline += 0.02 + randomDelay(5);
        this.playNotes(notes, settings);
    }
}
