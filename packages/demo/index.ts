import jazz from '../jazzband';
import { piano } from './samples/piano';
import { drumset } from './samples/drumset';
import link from './playlists/1350.json';
//import link from './playlists/zw.json';
import { randomElement } from '../jazzband/src/util';
import { RealParser } from '../jazzband/src/RealParser';
import iRealReader from 'ireal-reader';

let keyboard, bass, drums;

const context = new AudioContext();
const mix = context.createGain();
mix.gain.value = 0.9;
mix.connect(context.destination);

function iRealUrl(url) {
    return new iRealReader(decodeURI(url));
}

const playlist = iRealUrl(link);

// setup waveforms
const gains = {
    sine: 0.7,
    triangle: 0.5,
    //square: 0.2,
    //sawtooth: 0.2
};
const [w1, w2] = [randomElement(Object.keys(gains)), randomElement(Object.keys(gains))];
console.log(w1, w2);


// setup instruments
const organic = true;
if (organic) {
    keyboard = new jazz.Sampler({ samples: piano, midiOffset: 36, mix });
    bass = new jazz.Sampler({ samples: piano, midiOffset: 36, mix });
    //bass = new jazz.Synthesizer({ duration: 400, gain: gains[w1], type: w1, mix });
    drums = new jazz.Sampler({ samples: drumset, mix });
} else {
    bass = new jazz.Synthesizer({ duration: 400, gain: gains[w1], type: w1, mix });
    keyboard = new jazz.Synthesizer({ duration: 400, gain: gains[w2], type: w2, mix });
    // drums = new jazz.PlasticDrums({ mix });
    drums = new jazz.Sampler({ samples: drumset, mix });
}

// setup musicians and band
const pianist = new jazz.Pianist(keyboard);
const bassist = new jazz.Bassist(bass);
const drummer = new jazz.Drummer(drums);
const band = new jazz.Band({ musicians: [pianist, bassist, drummer], context });

function getStandard(playlist) {
    console.log('plalist', playlist);
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Softly')));
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Beautiful Love')));
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Lover Man')));
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Home At Last')));
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Lone Jack (Page 1)'))); // TODO: fix
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Minor Strain'))); // TODO: fix
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('El Cajon'))); // TODO: fix
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Mirror, Mirror'))); // TODO: fix
    //const standard = randomElement(playlist.songs.filter(s => s.title.includes('Falling Grace')));
    const standard = randomElement(playlist.songs);
    const parser = new RealParser(standard.music.raw);
    //console.log('tokens',parser.tokens);
    standard.music.measures = parser.bars;
    console.log('standard', standard, standard.music.measures);
    console.log('sections', parser.sections);
    return standard;
}


window.onload = function () {
    // buttons
    const playJazz = document.getElementById('jazz');
    const playFunk = document.getElementById('funk');
    const pause = document.getElementById('pause');
    const stop = document.getElementById('stop');
    const slower = document.getElementById('slower');
    const faster = document.getElementById('faster');
    const next = document.getElementById('next');
    let standard/*  = getStandard(); */

    function funk() {
        //band.comp(['C-7', 'C^7'], { times: 10, bpm: 90, style: 'Funk' });
        //band.comp(['C-7', ['C^7', 'F^7'], 'A-7', ['Ab-7', 'Db7']], { times: 5, bpm: 90, style: 'Funk' });
        band.comp(standard.music.measures, { arpeggio: false, times: 1, bpm: 90, style: 'Funk' });
    }

    function jazz() {
        //band.comp(['D-7', 'G7', 'C^7', 'C^7'], { times: 5, bpm: 160, style: standard.style });
        band.comp(standard.music.measures, { arpeggio: false, times: 1, cycle: 4, bpm: 90 + Math.random() * 100, style: standard.style });
    }

    playJazz.addEventListener('click', () => {
        jazz();
    })
    playFunk.addEventListener('click', () => {
        funk()
    })

    stop.addEventListener('click', () => {
        band.pulse.stop();
    });
    slower.addEventListener('click', () => {
        band.pulse.changeTempo(band.pulse.props.bpm - 10);
        console.log('tempo', band.pulse.props.bpm);
    });
    faster.addEventListener('click', () => {
        band.pulse.changeTempo(band.pulse.props.bpm + 10);
        console.log('tempo', band.pulse.props.bpm);
    });

    next.addEventListener('click', () => {
        if (band.pulse) {
            band.pulse.stop();
        }
        standard = getStandard(playlist);
        setTimeout(() => {

            jazz();
            /*             if (Math.random() > .5) {
                            funk()
                        } else {
                            jazz();
                        } */
        }, 500);
    })
}
