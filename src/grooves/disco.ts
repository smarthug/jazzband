export const disco = {
    name: 'Disco',
    tempo: 120,
    chords: () => [0, [.3, .3], 0, 1],
    bass: () => [[.5, .5, .5, .5], [.5, .5, .5, .5], [.5, .5, .5, .5], [.5, .5, .5, .5]],
    kick: () => [1, 1, 1, 1],
    snare: () => [0, [1, 0, 0, Math.random() > .5 ? [.4, .3] : 0], 0, 1],
    hihat: () => [[0, .8], [0, .7], [0, [.9, .8]], [0, [.8, .4, .2]]],
    //ride: () => [.5, .5, .5, .5]
};