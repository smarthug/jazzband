import * as Chord from 'tonal-chord';
import * as Scale from 'tonal-scale';

export const chords = [
    {
        symbol: 'm',
        long: 'minor',
        short: '-',
        groups: ['Basic', 'Triads']
    },
    {
        symbol: 'M',
        long: 'major',
        short: '△',
        groups: ['Basic', 'Triads']
    },
    {
        symbol: 'o',
        groups: ['Basic', 'Symmetric', 'Triads'],
        long: 'Vermindert'
        /* short: 'o' */
    },
    {
        symbol: 'M#5', // = Mb6
        groups: ['Advanced', 'Symmetric', 'Triads'],
        short: '△#5'
    },
    {
        symbol: 'Msus4',
        groups: ['Advanced', 'Symmetric'],
        short: 'sus4'
    },
    {
        symbol: 'Msus2',
        groups: ['Advanced', 'Symmetric'],
        short: 'sus2'
    },
    // 5 4 64 m#5 Mb5  7no5  
    {
        symbol: '7',
        groups: ['Basic', 'Diatonic', 'Modes'],
        long: 'Dominantsept'
    },
    {
        symbol: '7#11',
        groups: ['Advanced', 'Diatonic', 'Modes'],
        long: 'Dominant #11'
    },
    {
        symbol: 'M6',
        groups: ['Advanced'],
        long: 'major 6',
        short: '6'
    },
    {
        symbol: 'o7',
        groups: ['Advanced', 'Symmetric', 'Diatonic'], // HM 7 chord
        long: 'Vermindert 7',
    },
    {
        symbol: 'm7',
        groups: ['Basic', 'Diatonic', 'Modes'],
        long: 'minor 7',
        short: '-7'
    },
    {
        symbol: 'oM7',
        groups: ['Expert'],
        long: 'diminished major 7',
        short: 'o△7'
    },
    {
        symbol: 'm7b5',
        groups: ['Basic', 'Diatonic', 'Modes'],
        long: 'Halbvermindert',
        short: '-7b5'
    },
    {
        symbol: '7#5',
        groups: ['Advanced', 'Symmetric'],
        long: 'Dominantsept #5'
    },
    {
        symbol: 'Maj7',
        groups: ['Basic', 'Diatonic', 'Modes'],
        long: 'Major 7',
        short: '△7'
    },
    {
        symbol: 'mMaj7',
        short: '-△7',
        groups: ['Advanced', 'Diatonic']
    },
    {
        symbol: 'M7#5',
        groups: ['Advanced', 'Diatonic'],
        short: '△7#5'
    },
    {
        symbol: '7sus4',
        groups: ['Advanced'],
    },
    {
        symbol: '9',
        groups: ['Advanced'],
    },
    {
        symbol: 'M9',
        groups: ['Advanced'],
        short: '△9'
    },
    {
        symbol: 'M69',
        groups: ['Advanced'],
        short: '69'
    }
    /*
7b13 M7b5 m7#5 9no5  M7b6 7b5 Madd9 mb6b9 mb6M7 madd4 sus24 madd9 Maddb9 +add#9 M7sus4 7#5sus4 M#5add9 M7#5sus4
11 m9 m6 9#5 7b9 7#9 M69 9b5 m69 mM9 7b6 m9b5 m9#5 7#11 M7b9 9b13 o7M7 M9b5 11b9 M9#5 7add6 M6#11 M7#11 7#5#9 13no5 9sus4 7#5b9 M9sus4 7sus4b9 m7add11 mMaj7b6 M9#5sus4
13 m11 M13 9#11 13#9 13b5 13b9 m11b5 7b9#9 mM9b6 M9#11 9#5#11 7#9b13 7b9b13 13sus4 m11A 5 7#9#11 7b9#11 M69#11 7#11b13 M7#9#11 M7add13 7#5b9#11 7sus4b9b13
m13 13#11 M13#11 13b9#11 9#11b13 13#9#11 7b9b13#11 7#9#11b13
    */
];

export const scales = [
    {
        symbol: 'major pentatonic',
        groups: ['Basic', 'Pentatonic'],
    },
    {
        symbol: 'minor pentatonic',
        groups: ['Basic', 'Pentatonic'],
    },
    {
        symbol: 'minor blues',
        groups: ['Basic'],
    },
    // gregorian modes
    {
        symbol: 'major',
        groups: ['Basic', 'Diatonic', 'Modes'],
    },
    {
        symbol: 'dorian',
        groups: ['Basic', 'Diatonic', 'Modes'],
    },
    {
        symbol: 'phrygian',
        groups: ['Basic', 'Diatonic', 'Modes'],
    },
    {
        symbol: 'lydian',
        groups: ['Basic', 'Diatonic', 'Modes'],
    },
    {
        symbol: 'mixolydian',
        groups: ['Basic', 'Diatonic', 'Modes'],
    },
    {
        symbol: 'aeolian',
        groups: ['Basic', 'Diatonic', 'Modes'],
    },
    {
        symbol: 'locrian',
        groups: ['Basic', 'Diatonic', 'Modes'],
    },
    {
        symbol: 'whole tone',
        groups: ['Advanced', 'Symmetric']
    },
    {
        symbol: 'diminished',
        groups: ['Advanced', 'Symmetric']
    },
    //HTGT ?
    {
        symbol: 'augmented',
        groups: ['Advanced', 'Symmetric']
    },
    {
        symbol: 'chromatic',
        groups: ['Expert', 'Symmetric']
    },
    // harmonic minor modes
    {
        symbol: 'harmonic minor', // HM 1
        groups: ['Advanced', 'Diatonic']
    },
    // HM 2 locrian #6 !
    {
        symbol: 'ionian augmented', // HM 3
        groups: ['Expert', 'Diatonic']
    },
    {
        symbol: 'dorian #4', // HM 4
        groups: ['Expert', 'Diatonic']
    },
    {
        symbol: 'spanish', // HM 5
        groups: ['Advanced', 'Diatonic']
    },
    // HM 6 lydian #9
    // HM 7 ???

    // melodic minor modes
    {
        symbol: 'melodic minor', // MM 1
        groups: ['Advanced', 'Diatonic']
    },
    {
        symbol: 'melodic minor second mode', // MM 2
        groups: ['Expert', 'Diatonic']
    },
    {
        symbol: 'lydian augmented', // MM 3
        groups: ['Expert', 'Diatonic']
    },
    {
        symbol: 'lydian dominant', // MM 4
        groups: ['Advanced', 'Diatonic'],
        long: 'mixolydian #11'
    },
    {
        symbol: 'melodic minor fifth mode', // MM 5
        groups: ['Expert', 'Diatonic']
    },
    {
        symbol: 'locrian #2', // MM 6
        groups: ['Expert', 'Diatonic']
    },
    {
        symbol: 'altered', // MM 7
        groups: ['Advanced', 'Diatonic']
    },
    //non european
    {
        symbol: 'kumoijoshi',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'iwato',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'pelog',
        groups: ['Exotic', 'Pentatonic']
    },
    // hyojo?
    {
        symbol: 'egyptian',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'in-sen',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'scriabin',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'ritusen',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'hirajoshi',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'malkos raga',
        groups: ['Exotic', 'Pentatonic']
    },
    {
        symbol: 'vietnamese 1',
        groups: ['Exotic', 'Pentatonic']
    },
    /* {
        symbol: 'vietnamese 2',
        groups: ['Exotic', 'Pentatonic'] // = minor pentatonic
    }, */
    {
        symbol: 'lydian pentatonic', // = China (Sikora S. 61)
        groups: ['Pentatonic']
    },
    {
        symbol: 'mixolydian pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'ionian pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'locrian pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'flat six pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'minor six pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'minor #7M pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'lydian #5P pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'whole tone pentatonic',
        groups: ['Pentatonic', 'Symmetric']
    },
    {
        symbol: 'flat three pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'super locrian pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'major flat two pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'lydian dominant pentatonic',
        groups: ['Pentatonic']
    },
    {
        symbol: 'neopolitan major pentatonic',
        groups: ['Pentatonic']
    }

    /*            
    mystery #1 piongio    prometheus major blues minor hexatonic six tone symmetric prometheus neopolitan
     persian  spanish  oriental flamenco balinese   todi raga enigmatic lydian #9 neopolitan locrian #2  lydian minor  locrian major  romanian minor harmonic major hungarian major hungarian minor lydian dominant   neopolitan minor neopolitan major lydian diminished leading whole tone augmented heptatonic double harmonic major double harmonic lydian melodic minor fifth mode melodic minor second mode
    bebop kafi raga  purvi raga ichikosucho bebop minor minor bebop bebop major bebop locrian bebop dominant spanish heptatonic minor six diminished
    composite blues
    */
];

export const symbols = { chords, scales };

export const levels = ['Basic', 'Advanced', 'Expert'];

export function groupFilter(group) {
    return (item) => {
        const level = Math.max(item.groups.filter(group => levels.indexOf(group) !== -1)
            .map(group => levels.indexOf(group) + 1));
        const groups = level > 0 ? Array.from(new Set(levels.slice(level).concat(item.groups))) : item.groups;
        return groups.indexOf(group) !== -1;
    };
}

export function scaleNames(group = 'Basic') {
    if (!group || group === 'All') {
        return Scale.names();
    }
    return scales.filter(groupFilter(group))
        .map(scale => scale.symbol);
}
export function chordNames(group = 'Basic') {
    if (!group || group === 'All') {
        return Chord.names();
    }
    return chords.filter(groupFilter(group))
        .map(scale => scale.symbol);
}

export function groupNames() {
    return Array.from(new Set(levels.concat(scales.concat(chords)
        .map(item => item.groups)
        .reduce((groups, current) => groups.concat(current))))).concat(['All']);
}

export function symbolName(type, symbol, long) {
    const pool = symbols[type + 's'];
    const match = pool.find(item => item.symbol === symbol);
    if (!match) {
        return symbol;
    }
    /* return symbol; */
    return (long ? match.long : match.short) || symbol;
}

export function scaleName(symbol, long = false) {
    return symbolName('scale', symbol, long);
}

export function chordName(symbol, long = false) {
    return symbolName('chord', symbol, long);
}

export function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomScale(group) {
    return randomItem(scaleNames(group));
}

export function randomChord(group) {
    return randomItem(chordNames(group));
}