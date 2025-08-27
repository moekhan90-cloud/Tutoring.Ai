
// /data/questions.js
// Question bank: Math, English, Science for ages 10–15
// Each item: id, prompt, choices[4], answerIndex, topic, difficulty, targetSeconds

const questions = {
  math: {
    10: [
      {
        id: "m10-1",
        prompt: "What is 7 × 8?",
        choices: ["54", "56", "64", "72"],
        answerIndex: 1,
        topic: "multiplication",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "m10-2",
        prompt: "What is 150 ÷ 10?",
        choices: ["10", "15", "20", "25"],
        answerIndex: 1,
        topic: "division",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "m10-3",
        prompt: "Which fraction is equal to 1/2?",
        choices: ["2/3", "3/6", "2/5", "4/5"],
        answerIndex: 1,
        topic: "fractions",
        difficulty: "easy",
        targetSeconds: 25
      },
      {
        id: "m10-4",
        prompt: "The perimeter of a rectangle with sides 5 cm and 3 cm is:",
        choices: ["8 cm", "10 cm", "15 cm", "16 cm"],
        answerIndex: 3,
        topic: "perimeter",
        difficulty: "easy",
        targetSeconds: 25
      },
      {
        id: "m10-5",
        prompt: "What is the value of the digit 6 in 6,342?",
        choices: ["6", "60", "600", "6,000"],
        answerIndex: 3,
        topic: "place-value",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    11: [
      {
        id: "m11-1",
        prompt: "Simplify: 3x + 5x",
        choices: ["8x", "15x", "35x", "x^8"],
        answerIndex: 0,
        topic: "algebra-like-terms",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "m11-2",
        prompt: "Find the area of a rectangle: length 12 cm, width 5 cm.",
        choices: ["17 cm²", "60 cm²", "24 cm²", "30 cm²"],
        answerIndex: 1,
        topic: "area",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "m11-3",
        prompt: "Which is a factor of 36?",
        choices: ["5", "7", "9", "11"],
        answerIndex: 2,
        topic: "factors",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "m11-4",
        prompt: "Convert 0.6 to a fraction in simplest form.",
        choices: ["3/5", "2/3", "1/6", "5/6"],
        answerIndex: 0,
        topic: "decimals-to-fractions",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "m11-5",
        prompt: "Solve: 2x + 5 = 17",
        choices: ["4", "5", "6", "7"],
        answerIndex: 2,
        topic: "one-step-equations",
        difficulty: "medium",
        targetSeconds: 30
      }
    ],
    12: [
      {
        id: "m12-1",
        prompt: "Write the ratio 12:18 in simplest form.",
        choices: ["2:3", "3:2", "4:6", "6:9"],
        answerIndex: 0,
        topic: "ratios",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "m12-2",
        prompt: "25% of 240 is:",
        choices: ["48", "50", "60", "75"],
        answerIndex: 2,
        topic: "percentages",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "m12-3",
        prompt: "What is −8 + 15?",
        choices: ["−23", "7", "−7", "23"],
        answerIndex: 1,
        topic: "integers",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "m12-4",
        prompt: "The sum of angles in a triangle is:",
        choices: ["90°", "180°", "270°", "360°"],
        answerIndex: 1,
        topic: "angles",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "m12-5",
        prompt: "Circumference of a circle with radius 7 (use π≈3.14):",
        choices: ["21.98", "43.96", "49.00", "153.86"],
        answerIndex: 1,
        topic: "circles",
        difficulty: "medium",
        targetSeconds: 35
      }
    ],
    13: [
      {
        id: "m13-1",
        prompt: "Solve: 3x − 7 = 11",
        choices: ["4", "5", "6", "7"],
        answerIndex: 2,
        topic: "linear-equations",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "m13-2",
        prompt: "The slope of the line through (1,2) and (3,6) is:",
        choices: ["1", "2", "3", "4"],
        answerIndex: 1,
        topic: "slope",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "m13-3",
        prompt: "In a right triangle with legs 6 and 8, the hypotenuse is:",
        choices: ["10", "12", "14", "16"],
        answerIndex: 0,
        topic: "pythagorean-theorem",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "m13-4",
        prompt: "Solve the proportion: 4/9 = x/27",
        choices: ["9", "12", "16", "18"],
        answerIndex: 3,
        topic: "proportions",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "m13-5",
        prompt: "Unit rate: 150 km in 3 hours equals ____ km/h.",
        choices: ["45", "50", "55", "60"],
        answerIndex: 1,
        topic: "unit-rate",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    14: [
      {
        id: "m14-1",
        prompt: "Solve the system: x + y = 10, x − y = 2",
        choices: ["x=6, y=4", "x=5, y=5", "x=4, y=6", "x=8, y=2"],
        answerIndex: 0,
        topic: "simultaneous-equations",
        difficulty: "medium",
        targetSeconds: 40
      },
      {
        id: "m14-2",
        prompt: "For y = 3x − 5, the y-intercept is:",
        choices: ["3", "−5", "5", "−3"],
        answerIndex: 1,
        topic: "slope-intercept",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "m14-3",
        prompt: "Simplify: 2^3 × 2^4",
        choices: ["2^7", "2^12", "2^1", "2^8"],
        answerIndex: 0,
        topic: "exponents",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "m14-4",
        prompt: "A fair die is rolled once. Probability of getting an even number:",
        choices: ["1/6", "1/3", "1/2", "2/3"],
        answerIndex: 2,
        topic: "probability",
        difficulty: "easy",
        targetSeconds: 25
      },
      {
        id: "m14-5",
        prompt: "Interior angle sum of a pentagon:",
        choices: ["360°", "540°", "600°", "720°"],
        answerIndex: 1,
        topic: "polygons",
        difficulty: "medium",
        targetSeconds: 30
      }
    ],
    15: [
      {
        id: "m15-1",
        prompt: "Solve x^2 − 5x + 6 = 0",
        choices: ["x=2 or 3", "x=−2 or −3", "x=1 or 6", "x=−1 or −6"],
        answerIndex: 0,
        topic: "quadratics",
        difficulty: "medium",
        targetSeconds: 45
      },
      {
        id: "m15-2",
        prompt: "Factor: x^2 − 9",
        choices: ["(x−3)(x−3)", "(x+3)(x+3)", "(x−3)(x+3)", "Prime"],
        answerIndex: 2,
        topic: "factoring",
        difficulty: "easy",
        targetSeconds: 25
      },
      {
        id: "m15-3",
        prompt: "If f(x)=2x^2 − 1, then f(3) =",
        choices: ["5", "11", "17", "19"],
        answerIndex: 3,
        topic: "functions",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "m15-4",
        prompt: "In a right triangle, sin(θ)= opposite/hypotenuse. If opposite=5 and hypotenuse=13, sin(θ)=",
        choices: ["5/8", "5/12", "5/13", "12/13"],
        answerIndex: 2,
        topic: "trigonometry",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "m15-5",
        prompt: "The line through (2,3) with slope 4 has equation:",
        choices: ["y=4x−5", "y=4x+5", "y=−4x+11", "y=4x+3"],
        answerIndex: 0,
        topic: "linear-equations",
        difficulty: "medium",
        targetSeconds: 35
      }
    ]
  },

  english: {
    10: [
      {
        id: "e10-1",
        prompt: "Choose the correctly punctuated sentence:",
        choices: [
          "I like apples, oranges and, bananas.",
          "I like apples, oranges, and bananas.",
          "I like, apples, oranges and bananas.",
          "I like apples oranges and bananas."
        ],
        answerIndex: 1,
        topic: "punctuation",
        difficulty: "easy",
        targetSeconds: 30
      },
      {
        id: "e10-2",
        prompt: "Which word is a noun?",
        choices: ["Run", "Happy", "Dog", "Quickly"],
        answerIndex: 2,
        topic: "parts-of-speech",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "e10-3",
        prompt: "Choose the synonym of 'large':",
        choices: ["Tiny", "Huge", "Narrow", "Thin"],
        answerIndex: 1,
        topic: "vocabulary",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "e10-4",
        prompt: "Which sentence uses capital letters correctly?",
        choices: [
          "we went to London in june.",
          "We went to London in June.",
          "We Went To london In june.",
          "we Went to London In June."
        ],
        answerIndex: 1,
        topic: "capitalization",
        difficulty: "easy",
        targetSeconds: 25
      },
      {
        id: "e10-5",
        prompt: "Which is an imperative sentence?",
        choices: [
          "Do you like cake?",
          "Close the door.",
          "I like cake.",
          "That cake is big."
        ],
        answerIndex: 1,
        topic: "sentence-types",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    11: [
      {
        id: "e11-1",
        prompt: "Choose the correct form: ____ going to the park.",
        choices: ["There", "Their", "They're", "Theyre"],
        answerIndex: 2,
        topic: "homophones",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e11-2",
        prompt: "Select the adverb:",
        choices: ["Quiet", "Quietly", "Quietness", "Quieter"],
        answerIndex: 1,
        topic: "parts-of-speech",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "e11-3",
        prompt: "Which sentence uses a semicolon correctly?",
        choices: [
          "I like tea; and coffee.",
          "I like tea; I also like coffee.",
          "I like tea; but coffee is better.",
          "I like tea; because it's warm."
        ],
        answerIndex: 1,
        topic: "punctuation",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "e11-4",
        prompt: "Identify the subject in: 'The tall boy ran quickly.'",
        choices: ["tall", "boy", "ran", "quickly"],
        answerIndex: 1,
        topic: "grammar",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "e11-5",
        prompt: "Meaning of the idiom: 'break the ice'?",
        choices: [
          "Start a conversation",
          "Break something cold",
          "End a friendship",
          "Start an argument"
        ],
        answerIndex: 0,
        topic: "idioms",
        difficulty: "medium",
        targetSeconds: 30
      }
    ],
    12: [
      {
        id: "e12-1",
        prompt: "Choose the sentence with correct apostrophe usage:",
        choices: [
          "Its a cold day.",
          "The dog's collar is red.",
          "The dogs' is barking.",
          "Its' very cold."
        ],
        answerIndex: 1,
        topic: "apostrophes",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e12-2",
        prompt: "Select the best synonym for 'reluctant':",
        choices: ["Eager", "Hesitant", "Certain", "Quick"],
        answerIndex: 1,
        topic: "vocabulary",
        difficulty: "medium",
        targetSeconds: 25
      },
      {
        id: "e12-3",
        prompt: "Which is a compound sentence?",
        choices: [
          "We left because it was late.",
          "It was late; we left.",
          "We left after the movie.",
          "Leaving, we walked home."
        ],
        answerIndex: 1,
        topic: "sentence-structure",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "e12-4",
        prompt: "Which word completes the sentence? 'Neither Tom nor Jim ___ going.'",
        choices: ["are", "is", "were", "be"],
        answerIndex: 1,
        topic: "subject-verb-agreement",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e12-5",
        prompt: "Identify the figurative language: 'The wind whispered.'",
        choices: ["Simile", "Metaphor", "Personification", "Hyperbole"],
        answerIndex: 2,
        topic: "figurative-language",
        difficulty: "easy",
        targetSeconds: 25
      }
    ],
    13: [
      {
        id: "e13-1",
        prompt: "Choose the correctly punctuated sentence with a nonessential clause:",
        choices: [
          "My sister who lives in Leeds is visiting.",
          "My sister, who lives in Leeds, is visiting.",
          "My sister who lives in Leeds, is visiting.",
          "My sister, who lives in Leeds is visiting."
        ],
        answerIndex: 1,
        topic: "clauses",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "e13-2",
        prompt: "Best antonym for 'scarce':",
        choices: ["Rare", "Plentiful", "Limited", "Sparse"],
        answerIndex: 1,
        topic: "vocabulary",
        difficulty: "medium",
        targetSeconds: 25
      },
      {
        id: "e13-3",
        prompt: "Identify the tone: 'He answered curtly and left.'",
        choices: ["Cheerful", "Irritated", "Excited", "Nervous"],
        answerIndex: 1,
        topic: "tone",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e13-4",
        prompt: "Which sentence avoids a comma splice?",
        choices: [
          "It rained, I stayed in.",
          "It rained; I stayed in.",
          "It rained, and I stayed in, I watched TV.",
          "It rained I stayed in."
        ],
        answerIndex: 1,
        topic: "punctuation",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e13-5",
        prompt: "What does the prefix 'bio-' mean?",
        choices: ["Life", "Earth", "Air", "Water"],
        answerIndex: 0,
        topic: "morphology",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    14: [
      {
        id: "e14-1",
        prompt: "Choose the sentence with parallel structure:",
        choices: [
          "She likes swimming, to bike, and running.",
          "She likes to swim, bike, and run.",
          "She likes to swim, biking, and to run.",
          "She likes swimming, bike, and run."
        ],
        answerIndex: 1,
        topic: "parallelism",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "e14-2",
        prompt: "Best revision for clarity: 'Walking down the road, the house appeared.'",
        choices: [
          "Walking down the road, the house appeared suddenly.",
          "As I walked down the road, the house appeared.",
          "Walking down the road the house appeared.",
          "The house appeared, walking down the road."
        ],
        answerIndex: 1,
        topic: "dangling-modifiers",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "e14-3",
        prompt: "Choose the correct punctuation for a quotation:",
        choices: [
          "She said, \"Lets go\".",
          "She said, \"Let's go.\"",
          "She said \"Let's go\".",
          "She said \"Lets go.\""
        ],
        answerIndex: 1,
        topic: "quotations",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e14-4",
        prompt: "Meaning of 'ubiquitous':",
        choices: ["Everywhere", "Hidden", "Rare", "Outdated"],
        answerIndex: 0,
        topic: "vocabulary",
        difficulty: "medium",
        targetSeconds: 25
      },
      {
        id: "e14-5",
        prompt: "Identify the device in: 'As brave as a lion.'",
        choices: ["Metaphor", "Simile", "Alliteration", "Oxymoron"],
        answerIndex: 1,
        topic: "figurative-language",
        difficulty: "easy",
        targetSeconds: 25
      }
    ],
    15: [
      {
        id: "e15-1",
        prompt: "Which sentence uses the subjunctive correctly?",
        choices: [
          "If I was you, I would study.",
          "If I were you, I would study.",
          "If I am you, I would study.",
          "If I be you, I would study."
        ],
        answerIndex: 1,
        topic: "verb-mood",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "e15-2",
        prompt: "Best thesis statement quality is:",
        choices: [
          "Vague and broad",
          "Specific and arguable",
          "Funny and casual",
          "Long and descriptive"
        ],
        answerIndex: 1,
        topic: "writing",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "e15-3",
        prompt: "Select the correct hyphenation:",
        choices: [
          "A well known author",
          "A well-known author",
          "A well, known author",
          "A wellknown author"
        ],
        answerIndex: 1,
        topic: "hyphens",
        difficulty: "easy",
        targetSeconds: 25
      },
      {
        id: "e15-4",
        prompt: "Which sentence is most concise without losing meaning?",
        choices: [
          "Due to the fact that it was raining, we stayed inside.",
          "Because it was raining, we stayed inside.",
          "Owing to the fact it was raining, we stayed inside.",
          "In light of rain, we stayed inside."
        ],
        answerIndex: 1,
        topic: "style",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e15-5",
        prompt: "Identify the rhetorical appeal primarily using facts and logic:",
        choices: ["Ethos", "Logos", "Pathos", "Kairos"],
        answerIndex: 1,
        topic: "rhetoric",
        difficulty: "medium",
        targetSeconds: 30
      }
    ]
  },

  science: {
    10: [
      {
        id: "s10-1",
        prompt: "What planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Venus", "Mercury"],
        answerIndex: 0,
        topic: "astronomy",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s10-2",
        prompt: "Which part of a plant makes food?",
        choices: ["Root", "Leaf", "Stem", "Flower"],
        answerIndex: 1,
        topic: "plants",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s10-3",
        prompt: "Water freezes at:",
        choices: ["0°C", "32°C", "100°C", "−10°C"],
        answerIndex: 0,
        topic: "states-of-matter",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s10-4",
        prompt: "Humans breathe in mainly:",
        choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answerIndex: 2,
        topic: "atmosphere",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s10-5",
        prompt: "Which is a vertebrate?",
        choices: ["Earthworm", "Butterfly", "Frog", "Jellyfish"],
        answerIndex: 2,
        topic: "animal-groups",
        difficulty: "easy",
        targetSeconds: 25
      }
    ],
    11: [
      {
        id: "s11-1",
        prompt: "A change of state from liquid to gas is called:",
        choices: ["Condensation", "Evaporation", "Freezing", "Melting"],
        answerIndex: 1,
        topic: "states-of-matter",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s11-2",
        prompt: "What gas do humans exhale more of after breathing?",
        choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        answerIndex: 1,
        topic: "respiration",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s11-3",
        prompt: "Which organelle is the powerhouse of the cell?",
        choices: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
        answerIndex: 2,
        topic: "cells",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s11-4",
        prompt: "Which is a renewable resource?",
        choices: ["Coal", "Oil", "Wind", "Natural gas"],
        answerIndex: 2,
        topic: "energy",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s11-5",
        prompt: "Which force pulls objects toward Earth?",
        choices: ["Friction", "Gravity", "Magnetism", "Tension"],
        answerIndex: 1,
        topic: "forces",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    12: [
      {
        id: "s12-1",
        prompt: "Which statement describes a physical change?",
        choices: [
          "Iron rusting",
          "Paper burning",
          "Ice melting",
          "Food digesting"
        ],
        answerIndex: 2,
        topic: "physical-vs-chemical",
        difficulty: "medium",
        targetSeconds: 25
      },
      {
        id: "s12-2",
        prompt: "How many chromosomes are in a typical human body cell?",
        choices: ["23", "46", "92", "12"],
        answerIndex: 1,
        topic: "genetics",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s12-3",
        prompt: "What is the main function of red blood cells?",
        choices: [
          "Fight infections",
          "Carry oxygen",
          "Clot blood",
          "Control body temperature"
        ],
        answerIndex: 1,
        topic: "circulatory-system",
        difficulty: "medium",
        targetSeconds: 25
      },
      {
        id: "s12-4",
        prompt: "Which best describes photosynthesis?",
        choices: [
          "Plants release energy from sugar",
          "Plants use sunlight to make sugar",
          "Animals use oxygen to make energy",
          "Bacteria decompose dead matter"
        ],
        answerIndex: 1,
        topic: "plants",
        difficulty: "easy",
        targetSeconds: 25
      },
      {
        id: "s12-5",
        prompt: "What is the SI unit of force?",
        choices: ["Watt", "Joule", "Newton", "Pascal"],
        answerIndex: 2,
        topic: "forces",
        difficulty: "medium",
        targetSeconds: 25
      }
    ],
    13: [
      {
        id: "s13-1",
        prompt: "In a food chain, which organism is typically the producer?",
        choices: ["Fox", "Grass", "Rabbit", "Hawk"],
        answerIndex: 1,
        topic: "ecology",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s13-2",
        prompt: "Acceleration is the rate of change of:",
        choices: ["Speed", "Velocity", "Distance", "Mass"],
        answerIndex: 1,
        topic: "physics-motion",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s13-3",
        prompt: "Which subatomic particle has a negative charge?",
        choices: ["Proton", "Neutron", "Electron", "Positron"],
        answerIndex: 2,
        topic: "atoms",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s13-4",
        prompt: "Which process forms sedimentary rocks?",
        choices: ["Melting", "Cooling", "Compaction & cementation", "Metamorphism"],
        answerIndex: 2,
        topic: "earth-science",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s13-5",
        prompt: "Acids have pH values:",
        choices: ["Less than 7", "Equal to 7", "Greater than 7", "Exactly 14"],
        answerIndex: 0,
        topic: "chemistry-pH",
        difficulty: "medium",
        targetSeconds: 25
      }
    ],
    14: [
      {
        id: "s14-1",
        prompt: "Which law states that force equals mass times acceleration?",
        choices: [
          "Newton's First Law",
          "Newton's Second Law",
          "Newton's Third Law",
          "Law of Gravitation"
        ],
        answerIndex: 1,
        topic: "physics-forces",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s14-2",
        prompt: "Which element is a halogen?",
        choices: ["Neon", "Sodium", "Chlorine", "Calcium"],
        answerIndex: 2,
        topic: "periodic-table",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s14-3",
        prompt: "DNA stands for:",
        choices: [
          "Deoxyribonucleic acid",
          "Dioxyribonucleic acid",
          "Deoxyribonuclear acid",
          "Dioxyribonuclear acid"
        ],
        answerIndex: 0,
        topic: "genetics",
        difficulty: "medium",
        targetSeconds: 25
      },
      {
        id: "s14-4",
        prompt: "What is the main cause of seasons on Earth?",
        choices: [
          "Distance from the Sun",
          "Tilt of Earth's axis",
          "Speed of rotation",
          "Shape of Earth's orbit"
        ],
        answerIndex: 1,
        topic: "astronomy",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s14-5",
        prompt: "Endothermic reactions:",
        choices: [
          "Release heat",
          "Absorb heat",
          "Produce electricity",
          "Always explode"
        ],
        answerIndex: 1,
        topic: "chemistry-thermo",
        difficulty: "medium",
        targetSeconds: 25
      }
    ],
    15: [
      {
        id: "s15-1",
        prompt: "Work done (in joules) equals:",
        choices: [
          "Force × distance",
          "Mass × acceleration",
          "Power × time",
          "Energy ÷ time"
        ],
        answerIndex: 0,
        topic: "physics-work",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "s15-2",
        prompt: "What is the role of ribosomes?",
        choices: [
          "Energy production",
          "Protein synthesis",
          "Lipid storage",
          "Cell division"
        ],
        answerIndex: 1,
        topic: "cells",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s15-3",
        prompt: "Covalent bonding involves:",
        choices: [
          "Transfer of electrons",
          "Sharing of electrons",
          "Attraction of ions",
          "Sharing of protons"
        ],
        answerIndex: 1,
        topic: "chemistry-bonding",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "s15-4",
        prompt: "Greenhouse gases trap heat mainly by absorbing:",
        choices: ["Visible light", "Ultraviolet", "Infrared radiation", "Gamma rays"],
        answerIndex: 2,
        topic: "climate",
        difficulty: "medium",
        targetSeconds: 35
      },
      {
        id: "s15-5",
        prompt: "Which process creates variation in meiosis?",
        choices: [
          "Binary fission",
          "Crossing over",
          "Mitosis",
          "Cytokinesis"
        ],
        answerIndex: 1,
        topic: "genetics",
        difficulty: "medium",
        targetSeconds: 35
      }
    ]
  }
};

export default questions;
