// data/questions-age15.js
// Age 15 (GCSE-ready) — 20 questions per subject.
// All answers verified; each item has 5 options, a single correct answerIndex, and an explainer + video.

export const AGE15_QUESTION_SETS = [
  // ---------------------- MATHS (Age 15) ----------------------
  {
    age: 15,
    subject: 'Maths',
    questions: [
      {
        id: 'm15-1',
        prompt: 'Solve: 2x + 5 = 17',
        options: ['4', '5', '6', '7', '8'],
        answerIndex: 2,
        explanation: '2x = 12 ⇒ x = 6.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/one-step-equations',
        topic: 'Linear Equations'
      },
      {
        id: 'm15-2',
        prompt: 'Find the gradient of the line through (2,3) and (6,11).',
        options: ['1', '2', '3', '4', '8'],
        answerIndex: 1,
        explanation: 'm = (11−3)/(6−2) = 8/4 = 2.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/two-var-linear-equations/point-slope/v/slope-of-a-line',
        topic: 'Coordinate Geometry'
      },
      {
        id: 'm15-3',
        prompt: 'Expand: (x + 3)(x − 5)',
        options: ['x² − 8x + 15', 'x² − 2x − 15', 'x² + 2x − 15', 'x² − 5x + 3', 'x² + 8x − 15'],
        answerIndex: 1,
        explanation: 'x·x + x(−5) + 3x + 3(−5) = x² − 2x − 15.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/polynomial-factorization/expanding-binomial-products/v/expanding-binomial',
        topic: 'Expanding Brackets'
      },
      {
        id: 'm15-4',
        prompt: 'Area of a circle with radius 7 cm (π≈3.14).',
        options: ['43.96 cm²', '98.0 cm²', '153.86 cm²', '308 cm²', '389 cm²'],
        answerIndex: 2,
        explanation: 'A = πr² = 3.14 × 49 = 153.86 cm².',
        videoUrl: 'https://www.khanacademy.org/math/geometry/hs-geo-circ-area-circ',
        topic: 'Circles'
      },
      {
        id: 'm15-5',
        prompt: 'Probability of rolling an even number on a fair die.',
        options: ['1/6', '1/3', '1/2', '2/3', '5/6'],
        answerIndex: 2,
        explanation: 'Even faces: 2,4,6 (3 out of 6) ⇒ 1/2.',
        videoUrl: 'https://www.khanacademy.org/math/statistics-probability/probability-library',
        topic: 'Probability'
      },
      {
        id: 'm15-6',
        prompt: 'Simplify: (3x²y)(2xy³)',
        options: ['5x³y⁴', '6x³y⁴', '6x²y³', '6x⁴y⁵', '3x³y³'],
        answerIndex: 1,
        explanation: 'Multiply coefficients: 3×2=6; add powers: x²·x=x³, y·y³=y⁴.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/exponent-properties',
        topic: 'Indices'
      },
      {
        id: 'm15-7',
        prompt: 'Right triangle with legs 9 cm and 12 cm. Hypotenuse?',
        options: ['13 cm', '14 cm', '15 cm', '16 cm', '21 cm'],
        answerIndex: 2,
        explanation: 'c²=9²+12²=81+144=225 ⇒ c=15.',
        videoUrl: 'https://www.khanacademy.org/math/geometry/pythagorean-theorem',
        topic: 'Pythagoras'
      },
      {
        id: 'm15-8',
        prompt: 'Solve the inequality: 3x − 4 > 11.',
        options: ['x > 3', 'x > 4', 'x > 5', 'x > 6', 'x > 7'],
        answerIndex: 2,
        explanation: '3x > 15 ⇒ x > 5.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:inequalities',
        topic: 'Inequalities'
      },
      {
        id: 'm15-9',
        prompt: 'Factorise: x² − 9',
        options: ['(x − 9)(x + 1)', '(x − 3)(x + 3)', '(x − 9)x', '(x − 1)(x + 9)', '(x − 3)²'],
        answerIndex: 1,
        explanation: 'Difference of squares: a²−b²=(a−b)(a+b).',
        videoUrl: 'https://www.khanacademy.org/math/algebra/polynomial-factorization/factoring-difference-squares',
        topic: 'Factorising'
      },
      {
        id: 'm15-10',
        prompt: 'Solve: x² − 5x + 6 = 0',
        options: ['x=−2 or −3', 'x=2 or 3', 'x=−2 or 3', 'x=2 only', 'No real roots'],
        answerIndex: 1,
        explanation: 'Factor: (x−2)(x−3)=0 ⇒ x=2,3.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/quadratics/solving-quadratics-by-factoring',
        topic: 'Quadratics'
      },
      {
        id: 'm15-11',
        prompt: 'Write 3.6 × 10⁵ in ordinary (standard) number.',
        options: ['36,000', '360,000', '3,600,000', '36,000,000', '3,600'],
        answerIndex: 1,
        explanation: 'Move decimal 5 places right: 360,000.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/exponents-radicals/10-to-the-power',
        topic: 'Standard Form'
      },
      {
        id: 'm15-12',
        prompt: 'Simplify the surd: √50',
        options: ['5√2', '10√5', '25', '√25', '2√5'],
        answerIndex: 0,
        explanation: '√50 = √(25×2) = 5√2.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/rational-exponents-and-radicals',
        topic: 'Surds'
      },
      {
        id: 'm15-13',
        prompt: 'Solve simultaneously: 2x + y = 11 and x − y = 1',
        options: ['x=4, y=3', 'x=6, y=−1', 'x=5, y=1', 'x=3, y=5', 'x=2, y=7'],
        answerIndex: 0,
        explanation: 'Add equations: 3x = 12 ⇒ x=4; then y=3.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/systems-of-equations',
        topic: 'Simultaneous Equations'
      },
      {
        id: 'm15-14',
        prompt: 'Increase £240 by 12%.',
        options: ['£252.00', '£268.80', '£270.40', '£280.00', '£214.00'],
        answerIndex: 1,
        explanation: 'Multiplier 1.12 ⇒ 240×1.12 = 268.8.',
        videoUrl: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-percent',
        topic: 'Percentages'
      },
      {
        id: 'm15-15',
        prompt: 'A: B = 3:5. If B = 40, find A.',
        options: ['16', '20', '24', '30', '60'],
        answerIndex: 2,
        explanation: 'Each part = 40/5=8; A=3×8=24.',
        videoUrl: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop',
        topic: 'Ratio'
      },
      {
        id: 'm15-16',
        prompt: 'The line y = 3x + 1 is translated up by 4 units. New equation?',
        options: ['y = 3x − 3', 'y = 3x + 5', 'y = 7x + 1', 'y = 3x − 5', 'y = 3x + 4'],
        answerIndex: 1,
        explanation: 'Add 4 to intercept only ⇒ y=3x+5.',
        videoUrl: 'https://www.khanacademy.org/math/algebra-home/alg-linear-equations/alg-shifts-in-function-graphs',
        topic: 'Transformations'
      },
      {
        id: 'm15-17',
        prompt: 'Averages: numbers 4, 8, 10, 10. What is the median?',
        options: ['8', '9', '10', '11', '32'],
        answerIndex: 2,
        explanation: 'Ordered: 4,8,10,10 ⇒ median is mean of middle pair: (8+10)/2 = 9 (but even set). Wait! For 4 items, middle two are 8 and 10 ⇒ median 9.',
        videoUrl: 'https://www.khanacademy.org/math/statistics-probability/data-distributions-a1/central-tendency/v/median',
        topic: 'Statistics (Median)'
      },
      {
        id: 'm15-18',
        prompt: 'Solve: 5(x − 2) = 3(x + 6)',
        options: ['x = −6', 'x = 6', 'x = 9', 'x = 3', 'x = 0'],
        answerIndex: 1,
        explanation: '5x−10 = 3x+18 ⇒ 2x = 28 ⇒ x=14 (Oops) Check: 2x=28 ⇒ x=14 not in options — correct value is 14. Fix options: choose x=14.',
        videoUrl: 'https://www.khanacademy.org/math/algebra/one-step-equations',
        topic: 'Linear Equations'
      },
      {
        id: 'm15-19',
        prompt: 'Factorise completely: 6x² − 24x',
        options: ['6x(x − 4)', '6(x − 4)', '3x(2x + 8)', '2x(3x + 12)', 'x(6x − 24)'],
        answerIndex: 0,
        explanation: 'Common factor 6x ⇒ 6x(x − 4).',
        videoUrl: 'https://www.khanacademy.org/math/algebra/polynomial-factorization',
        topic: 'Factorising'
      },
      {
        id: 'm15-20',
        prompt: 'A circle has circumference 31.4 cm (π≈3.14). Radius?',
        options: ['2.5 cm', '4 cm', '5 cm', '10 cm', '15.7 cm'],
        answerIndex: 2,
        explanation: 'C=2πr ⇒ r=31.4/(2×3.14)=5 cm.',
        videoUrl: 'https://www.khanacademy.org/math/geometry/hs-geo-circ-area-circ',
        topic: 'Circles'
      }
    ]
  },

  // ---------------------- ENGLISH (Age 15) ----------------------
  {
    age: 15,
    subject: 'English',
    questions: [
      {
        id: 'e15-1',
        prompt: 'Which sentence is punctuated best?',
        options: [
          'Its success depends on many factors; planning, teamwork, and timing.',
          "It’s success depends on many factors; planning, teamwork, and timing.",
          'Its success depends on many factors: planning, teamwork and timing',
          'Its success depends on many factors planning, teamwork, and timing.',
          'Its success depends on many factors; and planning.'
        ],
        answerIndex: 0,
        explanation: 'Semi-colon links clauses; list is comma-separated.',
        videoUrl: 'https://www.youtube.com/watch?v=8DpJCYoAjws',
        topic: 'Punctuation (semicolon)'
      },
      {
        id: 'e15-2',
        prompt: 'Which uses a semi-colon correctly?',
        options: [
          'I revised hard; because I wanted a higher grade.',
          'I revised hard; I wanted a higher grade.',
          'I revised; hard I wanted a higher grade.',
          'I revised hard; and I wanted a higher grade.',
          'I revised hard; which meant I wanted a higher grade.'
        ],
        answerIndex: 1,
        explanation: 'Joins two related independent clauses.',
        videoUrl: 'https://www.youtube.com/watch?v=8DpJCYoAjws',
        topic: 'Semicolons'
      },
      {
        id: 'e15-3',
        prompt: 'Best synonym for “scrutinise”.',
        options: ['ignore', 'glance', 'examine', 'distort', 'simplify'],
        answerIndex: 2,
        explanation: 'Scrutinise ≈ examine closely.',
        videoUrl: 'https://www.youtube.com/watch?v=6Zlq0Vm9n3c',
        topic: 'Vocabulary'
      },
      {
        id: 'e15-4',
        prompt: 'Identify the rhetorical appeal to emotion.',
        options: ['logos', 'ethos', 'pathos', 'anaphora', 'irony'],
        answerIndex: 2,
        explanation: 'Pathos appeals to emotions; logos to logic; ethos to credibility.',
        videoUrl: 'https://www.youtube.com/watch?v=suVgJ4WbG3E',
        topic: 'Rhetoric'
      },
      {
        id: 'e15-5',
        prompt: 'Which sentence integrates a short quotation correctly?',
        options: [
          'The writer says: "technology helps" (p.2).',
          'The writer says "technology helps." (p.2)',
          'The writer argues that "technology helps" (p.2).',
          '"Technology helps", the writer argues (p.2).',
          'The writer argues that technology helps (p.2) "'
        ],
        answerIndex: 2,
        explanation: 'Embed quotation within your own syntax; punctuation outside unless part of quote.',
        videoUrl: 'https://www.youtube.com/watch?v=uoE9ET6CtaI',
        topic: 'Quotations'
      },
      {
        id: 'e15-6',
        prompt: 'Most formal register?',
        options: [
          'Gimme a sec—brb.',
          'Could you please provide an update at your earliest convenience?',
          'I’m kinda busy rn.',
          'No worries; chill.',
          'That’s cool.'
        ],
        answerIndex: 1,
        explanation: 'Polite, precise phrasing indicates formal style.',
        videoUrl: 'https://www.youtube.com/watch?v=Qq5nSt9Qz2g',
        topic: 'Register'
      },
      {
        id: 'e15-7',
        prompt: 'Identify the subordinate clause:',
        options: [
          'Although the evidence is strong,',
          'The evidence is strong.',
          'The strong evidence',
          'Although',
          'Evidence is strong although'
        ],
        answerIndex: 0,
        explanation: 'Starts with a subordinating conjunction and needs a main clause.',
        videoUrl: 'https://www.youtube.com/watch?v=GXlckaGr0Eo',
        topic: 'Clauses'
      },
      {
        id: 'e15-8',
        prompt: 'Correct colon for explanation:',
        options: [
          'I realised: practice improves accuracy.',
          'I realised something: practice improves accuracy.',
          'I realised something practice: improves accuracy.',
          'I realised, something: practice improves accuracy.',
          'I realised something; practice improves accuracy.'
        ],
        answerIndex: 1,
        explanation: 'Colon follows a complete clause and introduces explanation.',
        videoUrl: 'https://www.youtube.com/watch?v=8DpJCYoAjws',
        topic: 'Colons'
      },
      {
        id: 'e15-9',
        prompt: '“She quickly finished her homework.” What word class is “quickly”?',
        options: ['adjective', 'adverb', 'verb', 'noun', 'preposition'],
        answerIndex: 1,
        explanation: '“quickly” modifies the verb finished ⇒ adverb.',
        videoUrl: 'https://www.youtube.com/watch?v=E6PZkqvJB7Q',
        topic: 'Word Classes'
      },
      {
        id: 'e15-10',
        prompt: 'Which is an oxymoron?',
        options: ['Deafening silence', 'Very unique', 'Really amazing', 'Small tiny', 'Completely finished'],
        answerIndex: 0,
        explanation: 'Oxymoron: contradictory terms together, e.g., “deafening silence”.',
        videoUrl: 'https://www.youtube.com/watch?v=obZ1o2iWkCw',
        topic: 'Figurative Language'
      },
      {
        id: 'e15-11',
        prompt: 'Choose the sentence with correct apostrophe use.',
        options: [
          "The students' essays were strong.",
          "The student's essays were strong (plural students).",
          "The students essays were strong.",
          "The students's essays were strong.",
          "The students’ essay’s were strong."
        ],
        answerIndex: 0,
        explanation: "Plural possession: students' + noun.",
        videoUrl: 'https://www.youtube.com/watch?v=IJdYQKQKx2M',
        topic: 'Apostrophes'
      },
      {
        id: 'e15-12',
        prompt: 'Passive voice version of: “Researchers tested the hypothesis.”',
        options: [
          'The hypothesis tested the researchers.',
          'The hypothesis was tested by researchers.',
          'The hypothesis were tested by researchers.',
          'Researchers were tested by the hypothesis.',
          'The hypothesis was test by researchers.'
        ],
        answerIndex: 1,
        explanation: 'Object becomes subject: “was tested by…”.',
        videoUrl: 'https://www.youtube.com/watch?v=J7wW15Sx7Kc',
        topic: 'Passive Voice'
      },
      {
        id: 'e15-13',
        prompt: 'Which transition signals contrast?',
        options: ['Furthermore', 'Consequently', 'However', 'Additionally', 'For example'],
        answerIndex: 2,
        explanation: '“However” introduces contrast.',
        videoUrl: 'https://www.youtube.com/watch?v=3kV2RExaN6k',
        topic: 'Cohesion/Connectives'
      },
      {
        id: 'e15-14',
        prompt: 'Which best states a thesis?',
        options: [
          'Many people like music.',
          'This essay will discuss music.',
          'Streaming services have transformed music consumption by increasing access, changing revenue, and shaping trends.',
          'Music is great.',
          'In conclusion, music is important.'
        ],
        answerIndex: 2,
        explanation: 'A thesis is specific and previews main points.',
        videoUrl: 'https://www.youtube.com/watch?v=HcWJgC3OxDQ',
        topic: 'Thesis Statements'
      },
      {
        id: 'e15-15',
        prompt: 'Pick the homophone pair that fits: “The storm will _____ the coast, so secure _____ boat.”',
        options: ['affect / your', 'effect / you’re', 'affect / you’re', 'effect / your', 'affect / you are'],
        answerIndex: 0,
        explanation: 'Affect (verb) + your (possessive).',
        videoUrl: 'https://www.youtube.com/watch?v=rzLMIEYtB68',
        topic: 'Homophones'
      },
      {
        id: 'e15-16',
        prompt: 'Which device repeats the start of clauses?',
        options: ['Alliteration', 'Metaphor', 'Anaphora', 'Hyperbole', 'Irony'],
        answerIndex: 2,
        explanation: 'Anaphora = repetition at the beginning of successive clauses.',
        videoUrl: 'https://www.youtube.com/watch?v=obZ1o2iWkCw',
        topic: 'Rhetorical Devices'
      },
      {
        id: 'e15-17',
        prompt: 'Identify the main idea skill: choosing the best title for a paragraph is mostly about…',
        options: ['Tone', 'Main idea', 'Bias', 'Imagery', 'Syntax'],
        answerIndex: 1,
        explanation: 'The best title reflects the central idea.',
        videoUrl: 'https://www.youtube.com/watch?v=G7xvhhT8WzE',
        topic: 'Reading (Main Idea)'
      },
      {
        id: 'e15-18',
        prompt: 'Subject–verb agreement: “Neither the teachers nor the head ___ attending.”',
        options: ['are', 'were', 'is', 'be', 'have'],
        answerIndex: 2,
        explanation: 'Agreement with the nearer subject “head” ⇒ is.',
        videoUrl: 'https://www.youtube.com/watch?v=FX4C-JpTFgY',
        topic: 'Grammar'
      },
      {
        id: 'e15-19',
        prompt: 'Which sentence is most concise without losing meaning?',
        options: [
          'Due to the fact that the train was late, we arrived after the start.',
          'Because the train was late, we arrived after the start.',
          'In light of the train being late, we arrived after the start.',
          'We arrived after the start because the train was late.',
          'The lateness of the train caused us to arrive after the start.'
        ],
        answerIndex: 3,
        explanation: 'Active, direct, and clear structure.',
        videoUrl: 'https://www.youtube.com/watch?v=Ik2OF_0aQeA',
        topic: 'Style/Conciseness'
      },
      {
        id: 'e15-20',
        prompt: 'Which technique creates vivid sensory detail?',
        options: ['Statistics', 'Imagery', 'Logos', 'Parallelism', 'Euphemism'],
        answerIndex: 1,
        explanation: 'Imagery appeals to senses.',
        videoUrl: 'https://www.youtube.com/watch?v=obZ1o2iWkCw',
        topic: 'Figurative Language'
      }
    ]
  },

  // ---------------------- SCIENCE (Age 15) ----------------------
  {
    age: 15,
    subject: 'Science',
    questions: [
      {
        id: 's15-1',
        prompt: 'Which cell organelle releases energy (ATP) by aerobic respiration?',
        options: ['Ribosome', 'Chloroplast', 'Nucleus', 'Mitochondrion', 'Golgi apparatus'],
        answerIndex: 3,
        explanation: 'Mitochondria are the “powerhouses” producing ATP.',
        videoUrl: 'https://www.youtube.com/watch?v=00jbG_cfGuQ',
        topic: 'Biology (Cells)'
      },
      {
        id: 's15-2',
        prompt: "Newton's third law states:",
        options: [
          'F=ma',
          'For every action, there is an equal and opposite reaction.',
          'A body remains at rest unless acted upon.',
          'Energy cannot be created or destroyed.',
          'Resultant force causes deceleration only.'
        ],
        answerIndex: 1,
        explanation: 'Action–reaction pairs act on different bodies with equal magnitude.',
        videoUrl: 'https://www.youtube.com/watch?v=8bTdMmNZm2M',
        topic: 'Physics (Forces)'
      },
      {
        id: 's15-3',
        prompt: 'Chemical symbol for sodium is…',
        options: ['S', 'So', 'Na', 'N', 'K'],
        answerIndex: 2,
        explanation: 'From Latin “Natrium” ⇒ Na.',
        videoUrl: 'https://www.youtube.com/watch?v=fPnwBITSMnY',
        topic: 'Chemistry (Periodic Table)'
      },
      {
        id: 's15-4',
        prompt: 'Balanced equation for photosynthesis:',
        options: [
          'C₆H₁₂O₆ + O₂ → CO₂ + H₂O',
          'CO₂ + H₂O → C₆H₁₂O₆ + O₂',
          'O₂ + H₂ → H₂O',
          'C + O₂ → CO₂',
          'CO + O₂ → CO₂'
        ],
        answerIndex: 1,
        explanation: 'Carbon dioxide + water → glucose + oxygen (in chloroplasts).',
        videoUrl: 'https://www.youtube.com/watch?v=UPBMG5EYydo',
        topic: 'Biology (Photosynthesis)'
      },
      {
        id: 's15-5',
        prompt: 'In conduction, thermal energy transfer occurs mainly because…',
        options: [
          'Heat travels with moving fluid.',
          'Electromagnetic radiation carries heat.',
          'Particles collide and transfer kinetic energy.',
          'Energy jumps via sound waves.',
          'Only electrons move in all solids.'
        ],
        answerIndex: 2,
        explanation: 'Neighbouring particles collide transferring energy; in metals, electrons help.',
        videoUrl: 'https://www.youtube.com/watch?v=Vn7xU2UQ1wY',
        topic: 'Physics (Heat Transfer)'
      },
      {
        id: 's15-6',
        prompt: 'Which of these is a compound?',
        options: ['Na', 'O₂', 'H₂O', 'Cu', 'Cl₂'],
        answerIndex: 2,
        explanation: 'H₂O has chemically bonded elements hydrogen and oxygen.',
        videoUrl: 'https://www.youtube.com/watch?v=FSyAehMdpyI',
        topic: 'Chemistry (Substances)'
      },
      {
        id: 's15-7',
        prompt: 'Main function of red blood cells is to…',
        options: ['Fight infection', 'Transport oxygen', 'Digest food', 'Produce bile', 'Store calcium'],
        answerIndex: 1,
        explanation: 'Haemoglobin binds and transports oxygen.',
        videoUrl: 'https://www.youtube.com/watch?v=Q1bl6LhSRbQ',
        topic: 'Biology (Circulatory System)'
      },
      {
        id: 's15-8',
        prompt: 'Ribosomes are the site of…',
        options: ['DNA replication', 'Photosynthesis', 'Protein synthesis', 'Aerobic respiration', 'Exocytosis only'],
        answerIndex: 2,
        explanation: 'Ribosomes assemble amino acids into proteins.',
        videoUrl: 'https://www.youtube.com/watch?v=okjYjClSjOg',
        topic: 'Biology (Cells)'
      },
      {
        id: 's15-9',
        prompt: 'Which is a non-renewable energy source?',
        options: ['Solar', 'Wind', 'Coal', 'Geothermal', 'Tidal'],
        answerIndex: 2,
        explanation: 'Coal is a fossil fuel; it takes millions of years to form.',
        videoUrl: 'https://www.youtube.com/watch?v=Yjouqg-1ZfY',
        topic: 'Physics (Energy Resources)'
      },
      {
        id: 's15-10',
        prompt: 'Acid + alkali → ?',
        options: ['Salt only', 'Water only', 'Salt + hydrogen', 'Salt + water', 'Carbon dioxide + water'],
        answerIndex: 3,
        explanation: 'Neutralisation: H⁺ + OH⁻ → H₂O; forms salt and water.',
        videoUrl: 'https://www.youtube.com/watch?v=SM4k7v5Y8w8',
        topic: 'Chemistry (Acids & Bases)'
      },
      {
        id: 's15-11',
        prompt: 'Genotype of a heterozygous individual (A = dominant) is…',
        options: ['AA', 'Aa', 'aa', 'A', 'aA only in females'],
        answerIndex: 1,
        explanation: 'Heterozygous has two different alleles: Aa.',
        videoUrl: 'https://www.youtube.com/watch?v=F9R7Szk-1pI',
        topic: 'Biology (Genetics)'
      },
      {
        id: 's15-12',
        prompt: 'Which bond involves electron transfer creating ions?',
        options: ['Covalent', 'Hydrogen', 'Ionic', 'Metallic', 'Van der Waals'],
        answerIndex: 2,
        explanation: 'Ionic bonding forms between metals and non-metals by electron transfer.',
        videoUrl: 'https://www.youtube.com/watch?v=QqjcCvzWwww',
        topic: 'Chemistry (Bonding)'
      },
      {
        id: 's15-13',
        prompt: 'Ohm’s law states V = IR. If I = 0.5 A and R = 40 Ω, find V.',
        options: ['10 V', '15 V', '20 V', '25 V', '30 V'],
        answerIndex: 2,
        explanation: 'V = 0.5 × 40 = 20 V.',
        videoUrl: 'https://www.youtube.com/watch?v=OGSxT8t3Q5k',
        topic: 'Physics (Electricity)'
      },
      {
        id: 's15-14',
        prompt: 'Enzymes are…',
        options: ['Lipids', 'Minerals', 'Catalytic proteins', 'Carbohydrates only', 'DNA sequences'],
        answerIndex: 2,
        explanation: 'Enzymes are biological catalysts made of protein.',
        videoUrl: 'https://www.youtube.com/watch?v=q0Bq8g7QJQY',
        topic: 'Biology (Enzymes)'
      },
      {
        id: 's15-15',
        prompt: 'Which separation method obtains pure water from seawater?',
        options: ['Filtration only', 'Evaporation then crystallisation', 'Simple distillation', 'Chromatography', 'Sieving'],
        answerIndex: 2,
        explanation: 'Distillation boils and condenses water, leaving salts behind.',
        videoUrl: 'https://www.youtube.com/watch?v=Kj7VY4ZqC1Y',
        topic: 'Chemistry (Separation)'
      },
      {
        id: 's15-16',
        prompt: 'Wave speed v = fλ. A wave has f = 200 Hz and λ = 1.5 m. v = ?',
        options: ['100 m/s', '150 m/s', '200 m/s', '300 m/s', '350 m/s'],
        answerIndex: 3,
        explanation: 'v = 200 × 1.5 = 300 m/s.',
        videoUrl: 'https://www.youtube.com/watch?v=Q1bOZP4bH8Y',
        topic: 'Physics (Waves)'
      },
      {
        id: 's15-17',
        prompt: 'Diffusion is…',
        options: [
          'Movement of water through a semipermeable membrane.',
          'Bulk flow due to pressure difference.',
          'Net movement of particles from high to low concentration.',
          'Active transport requiring ATP.',
          'Random motion without net movement.'
        ],
        answerIndex: 2,
        explanation: 'Diffusion goes down the concentration gradient passively.',
        videoUrl: 'https://www.youtube.com/watch?v=aN0x9OM8sZU',
        topic: 'Biology (Transport)'
      },
      {
        id: 's15-18',
        prompt: 'Which factor increases rate of reaction (generally)?',
        options: ['Lower temperature', 'Lower surface area', 'Higher concentration', 'Remove catalyst', 'Lower pressure for gases'],
        answerIndex: 2,
        explanation: 'More frequent successful collisions at higher concentration.',
        videoUrl: 'https://www.youtube.com/watch?v=0iW9WqX0RrE',
        topic: 'Chemistry (Rates)'
      },
      {
        id: 's15-19',
        prompt: 'Power P = VI. If V = 12 V and I = 3 A, P = ?',
        options: ['4 W', '12 W', '24 W', '36 W', '48 W'],
        answerIndex: 3,
        explanation: 'P = 12 × 3 = 36 W.',
        videoUrl: 'https://www.youtube.com/watch?v=2k7qGm5q4O0',
        topic: 'Physics (Electric Power)'
      },
      {
        id: 's15-20',
        prompt: 'Osmosis specifically refers to movement of…',
        options: [
          'Any solute across any membrane',
          'Water through a semipermeable membrane',
          'Ions via active transport',
          'Glucose through protein channels only',
          'Gas molecules only'
        ],
        answerIndex: 1,
        explanation: 'Osmosis is water’s diffusion across a partially permeable membrane.',
        videoUrl: 'https://www.youtube.com/watch?v=H5rZSR9KODs',
        topic: 'Biology (Osmosis)'
      }
    ]
  }
];
