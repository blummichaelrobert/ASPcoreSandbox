

export class MusicData {

    // todo: create getters for all these.

    readonly chromaticMap: Map<string, string[]> = new Map([
        ['0', ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']],
        ['1', ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A']],
        ['2', ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#']],
        ['3', ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']],
        ['4', ['C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C']],
        ['5', ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#']],
        ['6', ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']],
        ['7', ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']],
        ['8', ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']],
        ['9', ['F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F']],
        ['10', ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#']],
        ['11', ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']]
    ]);

    readonly cirleOfFifthsDataSet = [
        ['C', 8.33],
        ['G', 8.33],
        ['D', 8.33],
        ['A', 8.33],
        ['E', 8.33],
        ['B', 8.33],
        ['F#', 8.33],
        ['C#', 8.33],
        ['G#', 8.33],
        ['D#', 8.33],
        ['A#', 8.33],
        ['F', 8.33]
    ];

    readonly circleOf5thRowMap: Map<number, number> = new Map<number, number>([
        [0, 3],
        [1, 10],
        [2, 5],
        [3, 0],
        [4, 7],
        [5, 2],
        [6, 9],
        [7, 4],
        [8, 11],
        [9, 6],
        [10, 1],
        [11, 8]
    ]);

    readonly colorMap: Map<string, string> = new Map([
        ['A', '#ff0000'],
        ['A#', '#ff3300'],
        ['B', '#ff6600'],
        ['C', '#f7ea21'],
        ['C#', '#b3ff00'],
        ['D', '#0fbf11'],
        ['D#', '#00ff92'],
        ['E', '#00f7f7'],
        ['F', '#3d00ff'],
        ['F#', '#6f00ff'],
        ['G', '#9400d3'],
        ['G#', '#df00d3']
    ]);

    readonly intervalMap: Map<number, string> = new Map([
        [0, 'showingRoot'],
        [1, 'showingMinor2'],
        [2, 'showingMajor2'],
        [3, 'showingMinor3'],
        [4, 'showingMajor3'],
        [5, 'showingPerfect4'],
        [6, 'showingDim5'],
        [7, 'showingPerfect5'],
        [8, 'showingMinor6'],
        [9, 'showingMajor6'],
        [10, 'showingMinor7'],
        [11, 'showingMajor7']
    ]);

    readonly majorIntervalNameToNumeralMap: Map<string, string> = new Map([
        ['Root', 'R'],
        ['Major2nd', 'M2'],
        ['Major3rd', 'M3'],
        ['Perfect4th', 'P4'],
        ['Perfect5th', 'P5'],
        ['Major6th', 'M6'],
        ['Major7th', 'M7']
    ]);

    readonly minorIntervalNameToNumeralMap: Map<string, string> = new Map([
        ['Root', 'r'],
        ['Major2nd', 'M2'],
        ['minor3rd', 'm3'],
        ['Perfect4th', 'P4'],
        ['Perfect5th', 'P5'],
        ['minor6th', 'm6'],
        ['minor7th', 'm7']
    ]);

    readonly KeyPickerDataSet = [
        ['A', 8.33],
        ['A#', 8.33],
        ['B', 8.33],
        ['C', 8.33],
        ['C#', 8.33],
        ['D', 8.33],
        ['D#', 8.33],
        ['E', 8.33],
        ['F', 8.33],
        ['F#', 8.33],
        ['G', 8.33],
        ['G#', 8.33]
    ];

    readonly majorKeyOmissionIndices: number[] = [1, 3, 6, 8, 10];

    readonly minorKeyOmissionIndices: number[] = [1, 4, 6, 9, 11];

    readonly majorKeyDataSet = [
        ['I*', 8.33],
        ['m2', 8.33],
        ['ii*', 8.33],
        ['m3', 8.33],
        ['iii*', 8.33],
        ['IV', 8.33],
        ['d5', 8.33],
        ['V*', 8.33],
        ['m6', 8.33],
        ['vi*', 8.33],
        ['m7', 8.33],
        ['dim', 8.33]
    ];

    readonly minorKeyDataSet = [
        ['i*', 8.33],
        ['M2', 8.33],
        ['dim', 8.33],
        ['III*', 8.33],
        ['M3', 8.33],
        ['iv*', 8.33],
        ['d5', 8.33],
        ['v*', 8.33],
        ['VI', 8.33],
        ['M6', 8.33],
        ['VII*', 8.33],
        ['M7', 8.33]
    ];

    readonly keyMoods: Map<string, string> = new Map([
        ['A', `Joyful and pastoral. A major is a key suitable for "declarations of innocent love, hope of seeing one's beloved again when parting". Youthful cheerfulness and trust in Universal Spirit. Innocent Love. Satisfaction with the current state of affairs. Optimistic. Belief in Heaven and reuniting with lost loved ones. Youthful and cheerful. Trusting in the spirit of the divine`],
        ['Am', `Tender and melencholy/woebegone/plaintive. Pious. Womanly. Graceful in character capable of soothing`],
        ['A#', `Magnificent and joyful. Quaint. Cheerful. Love. Clear Conscience. Hopeful Aspirations for the future and a better world. Optimistic and able to take control in order to ensure peace`],
        ['A#m', `Obscure/enigmatic/esoteric and terrible. A quaint/bizarre/peculiar creature often dressed in the garment of night. It is somewhat surly and very seldom takes on a pleasant countenance. Mocking the Universal Spirit and the world. Discontented with itself and with everything. Preparation for suicide sounds in this key. Blasphemous turning away the world and the divine. Preparations for the end. Pessimism and giving up. Belief in darkness`],
        ['B', `Harsh/bitter/cruel and depressed/troubled. Strong. Wild Rage. Uncontrolled passions. Anger, rage, jealousy, fury, despair, and every burden of the heart lies in its sphere. Jealous. Loaded down with negative energy. Prepared to fight. Strongly colored announcing wild passions composed from the most glaring colors`],
        ['Bm', `Solitary and melancholic. This is as it were the key of patience of calm. Awaiting one's fate and of submission to divine dispensation/bestowal/conferment`],
        ['C', `Jolly and warlike. Innocently happy. Completely pure. Simplicity and naivety. The key of children. Free of burden full of imagination. Powerful resolve. Earnestness. Can feel religious. Completely pure its character is: innocence simplicity naivety children's talk`],
        ['Cm', `Obscure/ambigious/shadowy and sad. Innocently sad. Love-sick declarations of love or lamenting lost love or unhappy relationships. It is languishing and full of longing, a soul in search of something different`],
        ['C#', `Fullness of tone sonority/volumne/resonance and euphony/rhythm/harmony. A leering key degenerating into grief and rapture. It cannot laugh but it can smile, it cannot howl but it can at least grimace its crying--Consequently only unusual characters and feelings can be brought out in this key`],
        ['C#m', `Despair. Wailing. Weeping. A passionate expression of sorrow and deep grief. Full of penance and self-punishment. An intimate conversation with Universal Spirit about recognition of wrongdoing and atonement`],
        ['D', `Joyous and very warlike. Screaming hallelujahs. Rejoicing in conquering obstacles. War marches. Holiday songs. Invitations to join the winning team`],
        ['Dm', `Serious and pious. Melancholy. Feminine brooding. Worries. Contemplation of negativity`],
        ['D#', `Dream like. Cruel and hard love. Devotion. Intimacy. Openness. Honest communion. Conversations with Universal Spirit`],
        ['D#m', `Feelings of the anxiety of the soul's deepest distress. Brooding despair of blackest depression of the most gloomy condition of the inner spirit. Every fear, every hesitation of the shuddering heart breathes out of horrible D# minor. If ghosts could speak their speech would approximate this key`],
        ['E', `Quarrelsome and boisterous. Joy magnificence splendor. Brightest and most powerful key. Shouts of joy. Agreements made despite bickering. Short-fused, ready to fight. Laughing with pleasure yet not complete delight lies in E Major`],
        ['Em', `Effeminate and amorous. Sad/sorrowful. This key can carry grief mournfulness, restlessness, like a princess locked in a tower longing for her rescuer and future lover. This key speaks of the imminent hope of resolving in the pure happiness of C major`],
        ['F', `Furious and quick-tempered subjects. Peace, joy, light passing regret. Religious sentiment/bias/feeling. Complaisance and controlled calmness over the readiness to explode. Deeply angry but composed and sociable still`],
        ['Fm', `Obscure/dim/hidden and wistful/forlorn. Harrowing/agonizing distressing melancholy. Deepest depression. Lament/regret over death and loss. Groans of misery ready to expire. A longing for the grave and the funeral`],
        ['F#', `Brilliant and very clear. Soft with richness. Conquering difficulties. Sighs of relief. Triumph over evil obstacles/hurdles. Surmounting foes and finally finding rest in victory. Dazzling clarity of thought and feeling`],
        ['F#m', `A gloomy key, it tugs at passion as a dog biting a dress. Resentment and discontent are its language. Still capable of fighting these feelings. Tearing at your hair and shirt. Long periods of lamentation and crying`],
        ['G', `Serious and magnificent. Fantasy. Rustic. Idyllic. Poetic. Lyrical. Calm and satisfied. Tenderness and gratitude. Friendship and faith. It is a gentle key full of peace. Picturesque and lyrical. Every serene and satisfied passion. Gratitude for true friendship and faithful love--in a word every gentle and peaceful emotion of the heart is correctly expressed by this key`],
        ['Gm', `Discontent. Uneasiness and worry about a failed scheme. Bad-tempered gnashing of teeth. In two words: resentment and dislike`],
        ['G#', `Key of the grave. Death. Grave putrefaction. Judgment and eternity lie in its radius. Expansive viewpoints of a dark cosmos and existence. Ghosts, ghouls, goblins, graveyards, haunting and lingering`],
        ['G#m', `Grumbler. Heart squeezed until it suffocates. Wailing/sobbing lament/regret with adifficult struggle. In a phrase the color of this key is everything struggling with difficulty. Life-Long Struggles. A negative look at the experiences of life, competition and growth`]
    ]);
}
