import { Musician } from './Musician';
export default class Bassist extends Musician {
    name: string;
    styles: {
        [key: string]: any;
    };
    defaults: {
        groove: {
            name: string;
            tempo: number;
            chords: ({ measure, settings }: {
                measure: any;
                settings: any;
            }) => any;
            bass: () => any;
            crash: ({ measures, index }: {
                measures: any;
                index: any;
            }) => number[];
            ride: ({ measures, index }: {
                measures: any;
                index: any;
            }) => any;
            hihat: () => number[];
            solo: () => any;
        };
    };
    playedChords: string[];
    constructor(instrument: any);
    play({ measures, pulse, settings }: {
        measures: any;
        pulse: any;
        settings: any;
    }): void;
    getStep(step: any, chord: any, octave?: number): any;
    playBass({ value, cycle, path, deadline, interval, duration }: {
        value: any;
        cycle: any;
        path: any;
        deadline: any;
        interval: any;
        duration: any;
    }, measures: any, pulse: any): void;
}
