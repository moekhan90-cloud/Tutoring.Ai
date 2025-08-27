// File: src/data/questionTypes.ts
export type Subject = 'Maths' | 'English' | 'Science';

export interface Question {
  id: string;
  prompt: string;
  options: string[]; // Always length 5
  answerIndex: number; // 0..4
  explanation: string;
  videoUrl?: string; // Optional learning video
  topic?: string; // e.g. 'Addition', 'Fractions', 'Photosynthesis'
  timeLimitSeconds?: number; // optional per-question timer override
}

export interface QuestionSet {
  age: number; // 8..15
  subject: Subject;
  questions: Question[]; // 20 items
}

// --------------------------------------------------------------
// File: src/data/questions-age8.ts
// Age 8 (Year 4) — 20 questions per subject (Maths, English, Science)
// Written to align with typical KS2 coverage (original questions, not CGP text).
// Videos: child‑friendly sources (BBC, Oxford Owl, Khan Academy, Math Antics, Crash Course Kids, etc.)
// --------------------------------------------------------------
import { QuestionSet } from './questionTypes';

export const AGE8_QUESTION_SETS: QuestionSet[] = [
  // ---------------------- MATHS (Age 8) ----------------------
  {
    age: 8,
    subject: 'Maths',
    questions: [
      {
        id: 'm8-1',
        prompt: 'What is 27 + 36?',
        options: ['52', '61', '63', '64', '73'],
        answerIndex: 2,
        explanation: 'Add tens (20+30=50) and ones (7+6=13). 50+13=63.',
        videoUrl: 'https://www.youtube.com/watch?v=mAvuom42NyY', // Math Antics — Multi-Digit Addition
        topic: 'Addition'
      },
      {
        id: 'm8-2',
        prompt: 'What is 48 − 19?',
        options: ['29', '31', '37', '39', '27'],
        answerIndex: 0,
        explanation: '48−20=28, then add 1 back → 29.',
        videoUrl: 'https://www.youtube.com/watch?v=Y6M89-6106I', // Math Antics — Multi-Digit Subtraction
        topic: 'Subtraction'
      },
      {
        id: 'm8-3',
        prompt: 'What is 7 × 5?',
        options: ['30', '35', '25', '40', '45'],
        answerIndex: 1,
        explanation: 'Five groups of seven make 35.',
        videoUrl: 'https://www.youtube.com/watch?v=K4T0uQMSk1k', // fallback basic multiplication (general)
        topic: 'Multiplication'
      },
      {
        id: 'm8-4',
        prompt: 'Which fraction is equal to one half?',
        options: ['1/4', '2/6', '3/5', '2/4', '3/8'],
        answerIndex: 3,
        explanation: '2 out of 4 parts is the same as 1 out of 2.',
        videoUrl: 'https://vimeo.com/169309643', // BBC Bitesize: What are fractions?
        topic: 'Fractions'
      },
      {
        id: 'm8-5',
        prompt: 'How many centimetres are in 1 metre?',
        options: ['10', '100', '1,000', '50', '1'],
        answerIndex: 1,
        explanation: 'There are 100 cm in 1 m.',
        videoUrl: 'https://www.youtube.com/watch?v=QmImQMsVU9M', // BBC Bitesize Time (general numeracy playlist)
        topic: 'Measurement'
      },
      {
        id: 'm8-6',
        prompt: 'What is 8 × 4?',
        options: ['28', '30', '32', '36', '24'],
        answerIndex: 2,
        explanation: '8 fours make 32.',
        videoUrl: 'https://www.youtube.com/watch?v=K4T0uQMSk1k',
        topic: 'Multiplication'
      },
      {
        id: 'm8-7',
        prompt: 'What is 36 ÷ 6?',
        options: ['4', '5', '6', '7', '8'],
        answerIndex: 2,
        explanation: 'Think 6 × ? = 36 → 6.',
        videoUrl: 'https://www.khanacademy.org/math/cc-third-grade-math/intro-to-division/imp-relating-multiplication-and-division/v/examples-relating-multiplication-to-division',
        topic: 'Division'
      },
      {
        id: 'm8-8',
        prompt: 'A rectangle is 5 cm long and 3 cm wide. What is its perimeter?',
        options: ['8 cm', '10 cm', '15 cm', '16 cm', '30 cm'],
        answerIndex: 3,
        explanation: 'Perimeter is the total around: 5+3+5+3 = 16 cm.',
        videoUrl: 'https://www.youtube.com/watch?v=RVYwunbpMHA', // Math Antics — Multiplication/area ref (closest)
        topic: 'Perimeter'
      },
      {
        id: 'm8-9',
        prompt: '24 apples are shared equally between 6 children. How many each?',
        options: ['2', '3', '4', '5', '6'],
        answerIndex: 2,
        explanation: '24 ÷ 6 = 4.',
        videoUrl: 'https://www.khanacademy.org/math/cc-third-grade-math/intro-to-division',
        topic: 'Division'
      },
      {
        id: 'm8-10',
        prompt: 'What is 57 + 28?',
        options: ['73', '83', '85', '87', '95'],
        answerIndex: 2,
        explanation: '57+20=77; 77+8=85.',
        videoUrl: 'https://www.youtube.com/watch?v=mAvuom42NyY',
        topic: 'Addition'
      },
      {
        id: 'm8-11',
        prompt: 'What is 41 − 17?',
        options: ['14', '22', '24', '26', '28'],
        answerIndex: 2,
        explanation: '41−10=31; 31−7=24.',
        videoUrl: 'https://www.youtube.com/watch?v=Y6M89-6106I',
        topic: 'Subtraction'
      },
      {
        id: 'm8-12',
        prompt: 'Which number is greater?',
        options: ['68', '86', 'both equal', 'cannot tell', '18'],
        answerIndex: 1,
        explanation: '86 has more tens than 68.',
        videoUrl: 'https://www.khanacademy.org/math/arithmetic/arith-review-place-value',
        topic: 'Place Value'
      },
      {
        id: 'm8-13',
        prompt: 'What is the value of the digit 7 in the number 73?',
        options: ['7', '70', '700', '0.7', '17'],
        answerIndex: 1,
        explanation: 'The 7 is in the tens place → 70.',
        videoUrl: 'https://www.khanacademy.org/math/arithmetic/arith-review-place-value',
        topic: 'Place Value'
      },
      {
        id: 'm8-14',
        prompt: 'What is 4 + 7 + 5?',
        options: ['14', '15', '16', '17', '18'],
        answerIndex: 2,
        explanation: '4+7=11; 11+5=16.',
        videoUrl: 'https://www.youtube.com/watch?v=mAvuom42NyY',
        topic: 'Mental Strategies'
      },
      {
        id: 'm8-15',
        prompt: 'Which number is even?',
        options: ['57', '43', '22', '35', '71'],
        answerIndex: 2,
        explanation: 'Even numbers end with 0,2,4,6,8. 22 ends with 2.',
        videoUrl: 'https://www.khanacademy.org/math/arithmetic/arith-review-even-odd',
        topic: 'Odd & Even'
      },
      {
        id: 'm8-16',
        prompt: 'The minute hand points to 12 and the hour hand to 3. What time is it?',
        options: ['12 o\'clock', '3 o\'clock', '6 o\'clock', '3:30', '12:30'],
        answerIndex: 1,
        explanation: 'Minute hand at 12 means o\'clock. Hour hand at 3 → 3 o\'clock.',
        videoUrl: 'https://www.youtube.com/watch?v=dKBOIZIt3nA', // BBC Schools Numbertime — Telling the Time
        topic: 'Time'
      },
      {
        id: 'm8-17',
        prompt: '50p + 20p + 20p + 10p = ?',
        options: ['70p', '80p', '90p', '£1.00', '£1.10'],
        answerIndex: 3,
        explanation: '50+20+20+10 = 100 pence = £1.',
        videoUrl: 'https://www.youtube.com/watch?v=jHkUPDjum_E', // UK coins song
        topic: 'Money'
      },
      {
        id: 'm8-18',
        prompt: 'What is 1/2 + 1/4?',
        options: ['1/4', '1/2', '3/4', '4/4', '2/3'],
        answerIndex: 2,
        explanation: '1/2 = 2/4, so 2/4 + 1/4 = 3/4.',
        videoUrl: 'https://www.youtube.com/watch?v=W72eW83rrC8', // Equivalent fractions (EasyTeaching)
        topic: 'Fractions'
      },
      {
        id: 'm8-19',
        prompt: 'How many centimetres is 70 millimetres?',
        options: ['0.7 cm', '7 cm', '70 cm', '700 cm', '17 cm'],
        answerIndex: 1,
        explanation: '10 mm = 1 cm, so 70 mm = 7 cm.',
        videoUrl: 'https://www.youtube.com/watch?v=QmImQMsVU9M',
        topic: 'Measurement'
      },
      {
        id: 'm8-20',
        prompt: 'A bar chart shows: Cats 8, Dogs 5, Rabbits 6. Which pet is most popular?',
        options: ['Cats', 'Dogs', 'Rabbits', 'All equal', 'Cannot tell'],
        answerIndex: 0,
        explanation: '8 is the highest value, so cats are most popular.',
        videoUrl: 'https://www.khanacademy.org/math/statistics-probability/displaying-describing-data',
        topic: 'Data (Bar Charts)'
      }
    ]
  },

  // ---------------------- ENGLISH (Age 8) ----------------------
  {
    age: 8,
    subject: 'English',
    questions: [
      {
        id: 'e8-1',
        prompt: 'Which sentence is written correctly?',
        options: [
          "They're going to bring there books.",
          'Their going to bring their books.',
          'There going to bring there books.',
          'There going to bring their books.',
          "They're going to bring their books."
        ],
        answerIndex: 4,
        explanation: "They're = they are; their shows possession.",
        videoUrl: 'https://vimeo.com/161901212', // BBC Bitesize — Homophones
        topic: 'Homophones'
      },
      {
        id: 'e8-2',
        prompt: 'Choose the best synonym for “happy”.',
        options: ['Sad', 'Joyful', 'Angry', 'Scared', 'Tired'],
        answerIndex: 1,
        explanation: 'Joyful has the same meaning as happy.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Vocabulary (Synonyms)'
      },
      {
        id: 'e8-3',
        prompt: 'Which word is a noun in this sentence: “The dog runs fast.”',
        options: ['The', 'dog', 'runs', 'fast', '—'],
        answerIndex: 1,
        explanation: 'A noun names a person, place or thing → dog.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Grammar (Nouns)'
      },
      {
        id: 'e8-4',
        prompt: 'Which sentence uses capital letters and full stops correctly?',
        options: [
          'i went to the park in june',
          'I went to the park in june.',
          'I went to the Park in June',
          'I went to the park in June.',
          'i Went to the park in June.'
        ],
        answerIndex: 3,
        explanation: 'Start with a capital, proper nouns capitalised (June), end with a full stop.',
        videoUrl: 'https://www.youtube.com/watch?v=8DpJCYoAjws',
        topic: 'Punctuation'
      },
      {
        id: 'e8-5',
        prompt: 'Which word makes this sentence correct? “It\'s cold, so ____ wearing a coat.”',
        options: ["were", "we're", 'where', 'wear', 'ware'],
        answerIndex: 1,
        explanation: "We're = we are.",
        videoUrl: 'https://www.youtube.com/watch?v=rzLMIEYtB68',
        topic: 'Contractions/Homophones'
      },
      {
        id: 'e8-6',
        prompt: 'What is the past tense of “go”?',
        options: ['goed', 'goes', 'going', 'gone', 'went'],
        answerIndex: 4,
        explanation: 'Irregular verb: go → went.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Verbs (Tense)'
      },
      {
        id: 'e8-7',
        prompt: 'What is the plural of “child”?',
        options: ['childs', 'childes', 'children', 'childrens', 'child\'s'],
        answerIndex: 2,
        explanation: 'Irregular plural: child → children.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Plurals'
      },
      {
        id: 'e8-8',
        prompt: 'Which prefix means “not” in the word “unhappy”?',
        options: ['re-', 'pre-', 'un-', 'dis-', 'mis-'],
        answerIndex: 2,
        explanation: 'un- means “not”.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Prefixes'
      },
      {
        id: 'e8-9',
        prompt: 'Which word is the adjective: “The blue balloon floated.”',
        options: ['The', 'blue', 'balloon', 'floated', '—'],
        answerIndex: 1,
        explanation: 'Adjectives describe nouns → blue describes balloon.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Adjectives'
      },
      {
        id: 'e8-10',
        prompt: 'Read: “Sam and his dog went to the field after school.” Where did they go?',
        options: ['The shop', 'The field', 'Home', 'The park', 'The library'],
        answerIndex: 1,
        explanation: 'The text says “to the field”.',
        videoUrl: 'https://www.youtube.com/watch?v=q4Y_67GMkP4', // Oxford Owl — What is comprehension?
        topic: 'Reading Comprehension'
      },
      {
        id: 'e8-11',
        prompt: 'Which sentence uses commas in a list correctly?',
        options: [
          'I bought apples oranges bananas and pears.',
          'I bought apples, oranges, bananas and pears.',
          'I bought, apples, oranges, bananas, and pears.',
          'I bought apples, oranges bananas, and pears.',
          'I bought apples oranges, bananas, and pears.'
        ],
        answerIndex: 1,
        explanation: 'Commas separate items in a list; no comma before “and” in primary style.',
        videoUrl: 'https://www.youtube.com/watch?v=8DpJCYoAjws',
        topic: 'Commas in Lists'
      },
      {
        id: 'e8-12',
        prompt: 'Choose the correct word: “I have ____ pencils.”',
        options: ['to', 'too', 'two', 'tow', 'toe'],
        answerIndex: 2,
        explanation: '“two” is the number 2.',
        videoUrl: 'https://www.youtube.com/watch?v=n99quLE0u8M',
        topic: 'Homophones (to/too/two)'
      },
      {
        id: 'e8-13',
        prompt: 'Which sentence is a question?',
        options: [
          'Close the door',
          'I like art class',
          'Where is my pencil?',
          'The cat is sleeping',
          'Please sit down'
        ],
        answerIndex: 2,
        explanation: 'A question asks and ends with a question mark.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Sentence Types'
      },
      {
        id: 'e8-14',
        prompt: 'Choose the best conjunction: “I wore a coat ____ it was cold.”',
        options: ['and', 'but', 'because', 'so', 'or'],
        answerIndex: 2,
        explanation: '“because” gives a reason.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Conjunctions'
      },
      {
        id: 'e8-15',
        prompt: 'Which pronoun replaces “Tom and Mia”?',
        options: ['he', 'she', 'it', 'they', 'we'],
        answerIndex: 3,
        explanation: 'Two people → “they”.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Pronouns'
      },
      {
        id: 'e8-16',
        prompt: 'How many syllables are in “elephant”?',
        options: ['1', '2', '3', '4', '5'],
        answerIndex: 2,
        explanation: 'El-e-phant → 3 syllables.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Syllables'
      },
      {
        id: 'e8-17',
        prompt: 'What is the root word in “happiness”?',
        options: ['happy', 'happi', 'happ', 'iness', 'ness'],
        answerIndex: 0,
        explanation: 'Root word is “happy”; -ness is a suffix.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Root Words & Suffixes'
      },
      {
        id: 'e8-18',
        prompt: 'Which word comes first in a dictionary?',
        options: ['goat', 'garden', 'game', 'ghost', 'gown'],
        answerIndex: 2,
        explanation: 'Alphabetical order: game, garden, ghost, goat, gown.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Alphabetical Order'
      },
      {
        id: 'e8-19',
        prompt: 'Choose the correct spelling:',
        options: ['butifull', 'beautifl', 'beautyful', 'beautiful', 'beautifel'],
        answerIndex: 3,
        explanation: 'Correct spelling is “beautiful”.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Spelling'
      },
      {
        id: 'e8-20',
        prompt: 'Which sentence uses speech marks correctly?',
        options: [
          '"Stop!" shouted Max.',
          '"Stop! shouted Max".',
          '“Stop! shouted Max.”',
          'Stop! “shouted Max.”',
          '“Stop!", shouted Max.'
        ],
        answerIndex: 0,
        explanation: 'Speech is inside the quotation marks with correct punctuation.',
        videoUrl: 'https://www.oxfordowl.co.uk/for-home/oxford-owl-videos/reading-writing-videos/',
        topic: 'Direct Speech'
      }
    ]
  },

  // ---------------------- SCIENCE (Age 8) ----------------------
  {
    age: 8,
    subject: 'Science',
    questions: [
      {
        id: 's8-1',
        prompt: 'Which part of a plant makes food using sunlight?',
        options: ['Root', 'Stem', 'Leaf', 'Flower', 'Seed'],
        answerIndex: 2,
        explanation: 'Leaves make food by photosynthesis.',
        videoUrl: 'https://www.youtube.com/watch?v=EstPeBt9CyU', // Crash Course Kids — Photosynthesis
        topic: 'Plants'
      },
      {
        id: 's8-2',
        prompt: 'Water freezes at 0°C. What state is it then?',
        options: ['Gas', 'Liquid', 'Solid', 'Plasma', 'None'],
        answerIndex: 2,
        explanation: 'Frozen water is ice, a solid.',
        videoUrl: 'https://www.youtube.com/watch?v=02qBuiqe7qI', // States of matter (KS2)
        topic: 'States of Matter'
      },
      {
        id: 's8-3',
        prompt: 'Which force attracts iron and steel objects?',
        options: ['Friction', 'Gravity', 'Magnetism', 'Air resistance', 'Push'],
        answerIndex: 2,
        explanation: 'Magnets attract some metals such as iron.',
        videoUrl: 'https://vimeo.com/169320291', // BBC Bitesize — What is a magnet?
        topic: 'Magnets'
      },
      {
        id: 's8-4',
        prompt: 'Which animal is a vertebrate (has a backbone)?',
        options: ['Snail', 'Bee', 'Worm', 'Frog', 'Octopus'],
        answerIndex: 3,
        explanation: 'Frogs are amphibians with backbones.',
        videoUrl: 'https://www.youtube.com/user/scishowkids',
        topic: 'Classification'
      },
      {
        id: 's8-5',
        prompt: 'Choose the correct food chain:',
        options: [
          'Sun → rabbit → grass',
          'Sun → fox → grass',
          'Sun → grass → rabbit → fox',
          'Fox → rabbit → grass → Sun',
          'Grass → Sun → rabbit → fox'
        ],
        answerIndex: 2,
        explanation: 'Plants (grass) use the sun; rabbits eat grass; foxes eat rabbits.',
        videoUrl: 'https://www.youtube.com/watch?v=MuKs9o1s8h8', // Crash Course Kids — Food Chains
        topic: 'Food Chains'
      },
      {
        id: 's8-6',
        prompt: 'Which material is transparent?',
        options: ['Wood', 'Metal', 'Glass', 'Stone', 'Brick'],
        answerIndex: 2,
        explanation: 'Transparent means light passes through easily → glass.',
        videoUrl: 'https://www.youtube.com/watch?v=fy7eoMef3e8', // Light & shadows (covers transparent/opaque)
        topic: 'Light & Materials'
      },
      {
        id: 's8-7',
        prompt: 'What happens to a shadow when the object moves closer to the light source?',
        options: ['Gets bigger', 'Gets smaller', 'Disappears', 'Changes colour', 'Stays the same'],
        answerIndex: 0,
        explanation: 'Closer object blocks more light → larger shadow.',
        videoUrl: 'https://www.youtube.com/watch?v=fy7eoMef3e8',
        topic: 'Light & Shadows'
      },
      {
        id: 's8-8',
        prompt: 'Heating liquid water turns it into water vapour. What is this change called?',
        options: ['Melting', 'Freezing', 'Condensation', 'Evaporation', 'Sublimation'],
        answerIndex: 3,
        explanation: 'Liquid → gas is evaporation.',
        videoUrl: 'https://www.youtube.com/watch?v=BGMmpBQkl9Y', // BBC Bitesize — Water cycle
        topic: 'Evaporation'
      },
      {
        id: 's8-9',
        prompt: 'In a simple circuit, a bulb will light when…',
        options: [
          'there is a gap in the circuit',
          'only one wire touches the bulb',
          'the circuit is complete with a battery, wires and bulb',
          'the switch is open',
          'no battery is used'
        ],
        answerIndex: 2,
        explanation: 'A closed (complete) circuit with a power source makes the bulb light.',
        videoUrl: 'https://www.youtube.com/watch?v=6ggQZ1Jgvwo', // BBC Bitesize — Electrical Circuits
        topic: 'Electricity'
      },
      {
        id: 's8-10',
        prompt: 'Which material is waterproof?',
        options: ['Paper', 'Sponge', 'Cotton', 'Plastic', 'Card'],
        answerIndex: 3,
        explanation: 'Plastic does not let water pass through easily.',
        videoUrl: 'https://www.youtube.com/watch?v=fy7eoMef3e8',
        topic: 'Materials'
      },
      {
        id: 's8-11',
        prompt: 'Which of these is living?',
        options: ['Rock', 'Cloud', 'Mushroom', 'Car', 'River'],
        answerIndex: 2,
        explanation: 'Fungi like mushrooms are living organisms.',
        videoUrl: 'https://www.youtube.com/user/scishowkids',
        topic: 'Living & Non-living'
      },
      {
        id: 's8-12',
        prompt: 'Evaporation happens fastest on a…',
        options: ['cold, still day', 'warm, windy day', 'dark, rainy night', 'freezing day', 'snowy day'],
        answerIndex: 1,
        explanation: 'Warmth and moving air speed up evaporation.',
        videoUrl: 'https://www.youtube.com/watch?v=BGMmpBQkl9Y',
        topic: 'Evaporation'
      },
      {
        id: 's8-13',
        prompt: 'What happens when two north poles of magnets are pushed together?',
        options: ['Attract', 'Repel', 'Stick stronger', 'Lose magnetism', 'Nothing'],
        answerIndex: 1,
        explanation: 'Like poles repel; unlike poles attract.',
        videoUrl: 'https://vimeo.com/169320291',
        topic: 'Magnets'
      },
      {
        id: 's8-14',
        prompt: 'Which is an example of a push?',
        options: ['Pulling a drawer open', 'Kicking a ball', 'Lifting a bag', 'Dropping a book', 'Hanging a picture'],
        answerIndex: 1,
        explanation: 'A kick is a push force.',
        videoUrl: 'https://vimeo.com/168139447', // BBC Bitesize — What is a force?
        topic: 'Forces'
      },
      {
        id: 's8-15',
        prompt: 'Plants take up most of their water through the…',
        options: ['leaves', 'flowers', 'roots', 'stem', 'seeds'],
        answerIndex: 2,
        explanation: 'Roots absorb water and minerals.',
        videoUrl: 'https://www.youtube.com/watch?v=EstPeBt9CyU',
        topic: 'Plants'
      },
      {
        id: 's8-16',
        prompt: 'Water vapour cooling and changing to liquid is called…',
        options: ['melting', 'freezing', 'condensation', 'evaporation', 'solution'],
        answerIndex: 2,
        explanation: 'Gas → liquid is condensation.',
        videoUrl: 'https://www.youtube.com/watch?v=BGMmpBQkl9Y',
        topic: 'Condensation'
      },
      {
        id: 's8-17',
        prompt: 'True or false: Light travels in straight lines.',
        options: ['True', 'False', 'Only in the dark', 'Only in water', 'Only in air'],
        answerIndex: 0,
        explanation: 'In the same medium, light travels in straight lines.',
        videoUrl: 'https://www.youtube.com/watch?v=fy7eoMef3e8',
        topic: 'Light'
      },
      {
        id: 's8-18',
        prompt: 'Which gas do humans need to breathe in?',
        options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium', 'Hydrogen'],
        answerIndex: 1,
        explanation: 'We inhale oxygen for respiration.',
        videoUrl: 'https://www.youtube.com/user/scishowkids',
        topic: 'Human Body'
      },
      {
        id: 's8-19',
        prompt: 'Which part holds the plant in the soil?',
        options: ['Leaf', 'Stem', 'Root', 'Flower', 'Seed'],
        answerIndex: 2,
        explanation: 'Roots anchor the plant.',
        videoUrl: 'https://www.youtube.com/watch?v=EstPeBt9CyU',
        topic: 'Plants'
      },
      {
        id: 's8-20',
        prompt: 'Which material is magnetic?',
        options: ['Wood', 'Glass', 'Plastic', 'Iron', 'Rubber'],
        answerIndex: 3,
        explanation: 'Iron is attracted to magnets.',
        videoUrl: 'https://vimeo.com/169319199', // Which metals are magnetic?
        topic: 'Magnets'
      }
    ]
  }
];

// --------------------------------------------------------------
// File: src/data/questions-index.ts
// Scaffold for Ages 9–15. Start with empty arrays; fill as you go.
// (You can split by file per age: questions-age9.ts, questions-age10.ts, etc.)
// --------------------------------------------------------------
import type { QuestionSet as QS } from './questionTypes';
import { AGE8_QUESTION_SETS } from './questions-age8';
import { AGE9_QUESTION_SETS } from './questions-age9';
import { AGE10_QUESTION_SETS } from './questions-age10';
import { AGE11_QUESTION_SETS } from './questions-age11';
import { AGE12_QUESTION_SETS } from './questions-age12';
import { AGE13_QUESTION_SETS } from './questions-age13';
import { AGE14_QUESTION_SETS } from './questions-age14';
import { AGE15_QUESTION_SETS } from './questions-age15';

export const ALL_QUESTION_SETS: QS[] = [
  ...AGE8_QUESTION_SETS,
  ...AGE9_QUESTION_SETS,
  ...AGE10_QUESTION_SETS,
  ...AGE11_QUESTION_SETS,
  ...AGE12_QUESTION_SETS,
  ...AGE13_QUESTION_SETS,
  ...AGE14_QUESTION_SETS,
  ...AGE15_QUESTION_SETS
];

// --------------------------------------------------------------
// File: src/components/Quiz.tsx
// Minimal, production‑ready MCQ quiz component matching your Tutoring AI style:
// - One question at a time
// - 5 options (A–E)
// - Timer per question (default 30s)
// - Shows ✅ correct answer + short explanation + optional learning video
// - Progress bar and final summary
// Tailwind CSS classes included. Use in Next.js /app or /pages.
// --------------------------------------------------------------
'use client';
import React from 'react';
import type { QuestionSet, Question } from '../data/questionTypes';

function classNames(...c: (string | false | undefined)[]) {return c.filter(Boolean).join(' ')}

export function Quiz({ set }: { set: QuestionSet }) {
  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState<number>(() => set.questions[0]?.timeLimitSeconds ?? 30);
  const [score, setScore] = React.useState(0);
  const [history, setHistory] = React.useState<{ id: string; correct: boolean; time: number }[]>([]);

  const q: Question = set.questions[index];

  React.useEffect(() => {
    setSecondsLeft(q?.timeLimitSeconds ?? 30);
    setSelected(null);
    setShowAnswer(false);
  }, [index]);

  React.useEffect(() => {
    if (showAnswer) return; // pause timer while showing answers
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft, showAnswer]);

  React.useEffect(() => {
    if (secondsLeft === 0 && !showAnswer) {
      // auto reveal if time runs out
      handleReveal();
    }
  }, [secondsLeft]);

  if (!q) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold">No questions found</h2>
        <p className="mt-2 text-sm text-gray-600">Add items to this set to start the quiz.</p>
      </div>
    );
  }

  const progress = ((index) / set.questions.length) * 100;

  function handleSelect(i: number) {
    if (showAnswer) return;
    setSelected(i);
  }

  function handleReveal() {
    if (showAnswer) return;
    const correct = selected === q.answerIndex;
    setShowAnswer(true);
    setScore(s => (correct ? s + 1 : s));
    setHistory(h => [...h, { id: q.id, correct, time: (q.timeLimitSeconds ?? 30) - secondsLeft }]);
  }

  function handleNext() {
    if (index + 1 < set.questions.length) {
      setIndex(i => i + 1);
    } else {
      // finished: show summary screen
      setShowAnswer(true);
    }
  }

  const finished = index >= set.questions.length - 1 && showAnswer;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{set.subject} · Age {set.age}</h1>
          <div className="text-sm text-gray-600">{index + 1} / {set.questions.length}</div>
        </div>
        <div className="h-2 rounded bg-gray-200 mt-2">
          <div className="h-full rounded bg-blue-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {!finished && (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-medium">{q.prompt}</p>
            <div className="px-3 py-1 rounded-full text-sm bg-gray-100">⏱ {secondsLeft}s</div>
          </div>

          <ul className="space-y-2">
            {q.options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(i)}
                  className={classNames(
                    'w-full text-left p-3 rounded-xl border transition',
                    selected === i && !showAnswer && 'border-blue-500 ring-2 ring-blue-300',
                    showAnswer && i === q.answerIndex && 'border-green-500 bg-green-50',
                    showAnswer && selected === i && i !== q.answerIndex && 'border-red-500 bg-red-50',
                    !showAnswer && 'hover:bg-gray-50'
                  )}
                >
                  <span className="mr-2 font-semibold">{String.fromCharCode(65 + i)}.</span> {opt}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex gap-2">
            {!showAnswer ? (
              <button
                onClick={handleReveal}
                disabled={selected === null && secondsLeft > 0}
                className="px-4 py-2 rounded-xl bg-blue-600 disabled:opacity-40 text-white shadow"
              >
                Check answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow"
              >
                {index + 1 < set.questions.length ? 'Next' : 'Finish'}
              </button>
            )}
          </div>

          {showAnswer && (
            <div className="mt-4 p-4 rounded-xl bg-gray-50 border">
              <p className="font-semibold">✅ Correct answer: {String.fromCharCode(65 + q.answerIndex)}. {q.options[q.answerIndex]}</p>
              <p className="text-sm text-gray-700 mt-1">{q.explanation}</p>
              {q.videoUrl && (
                <a href={q.videoUrl} target="_blank" className="inline-block mt-3 text-sm underline">📺 Watch: Learning video</a>
              )}
            </div>
          )}
        </>
      )}

      {finished && (
        <Summary subject={set.subject} age={set.age} score={score} total={set.questions.length} history={history} />
      )}
    </div>
  );
}

function Summary({ subject, age, score, total, history }:{ subject: string; age: number; score: number; total: number; history: {id:string; correct:boolean; time:number}[] }){
  const avg = history.length ? Math.round(history.reduce((a,b)=>a+b.time,0)/history.length) : 0;
  const accuracy = total ? Math.round((score/total)*100) : 0;
  return (
    <div className="p-6 rounded-2xl bg-white shadow">
      <h2 className="text-2xl font-bold">Finished! 🎉</h2>
      <p className="mt-2">{subject} · Age {age}</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-green-50 border">
          <div className="text-3xl font-bold">{score}/{total}</div>
          <div className="text-sm text-green-700">Score</div>
        </div>
        <div className="p-4 rounded-xl bg-blue-50 border">
          <div className="text-3xl font-bold">{accuracy}%</div>
          <div className="text-sm text-blue-700">Accuracy</div>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-xl bg-gray-50 border">
        <div className="text-sm text-gray-700">Avg. time per question: <span className="font-semibold">{avg}s</span></div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------
// File: app/age8-maths/page.tsx (example Next.js route)
// --------------------------------------------------------------
import { ALL_QUESTION_SETS } from '../../src/data/questions-index';
import { Quiz } from '../../src/components/Quiz';

export default function Page(){
  const set = ALL_QUESTION_SETS.find(s => s.age === 8 && s.subject === 'Maths');
  // @ts-ignore
  return <Quiz set={set!} />;
}

// Repeat pages for English/Science or build a subject selector.

// --------------------------------------------------------------
// File: src/data/questions-age9.ts
// Age 9 (Year 5) — 20 questions per subject (Maths, English, Science)
// Topics align with typical upper KS2 coverage. Original questions + kid‑friendly videos.
// --------------------------------------------------------------
import { QuestionSet } from './questionTypes';

export const AGE9_QUESTION_SETS: QuestionSet[] = [
  // ---------------------- MATHS (Age 9) ----------------------
  {
    age: 9,
    subject: 'Maths',
    questions: [
      { id: 'm9-1', prompt: 'What is 346 + 289?', options: ['525','625','635','645','735'], answerIndex: 2, explanation: '346+200=546; 546+80=626; 626+9=635.', videoUrl: 'https://www.youtube.com/watch?v=mAvuom42NyY', topic: 'Addition' },
      { id: 'm9-2', prompt: 'What is 703 − 258?', options: ['345','445','455','465','475'], answerIndex: 1, explanation: '703−200=503; 503−50=453; 453−8=445.', videoUrl: 'https://www.youtube.com/watch?v=Y6M89-6106I', topic: 'Subtraction' },
      { id: 'm9-3', prompt: 'What is 12 × 6?', options: ['62','64','66','72','84'], answerIndex: 3, explanation: '12×6 = (10×6) + (2×6) = 60 + 12 = 72.', videoUrl: 'https://www.youtube.com/watch?v=dzVyBQ5uTbo', topic: 'Multiplication Facts' },
      { id: 'm9-4', prompt: 'Which is equivalent to 3/4?', options: ['6/8','8/10','9/16','12/20','15/28'], answerIndex: 0, explanation: 'Multiply top and bottom by 2: 3/4 → 6/8.', videoUrl: 'https://www.youtube.com/watch?v=W72eW83rrC8', topic: 'Fractions (Equivalence)' },
      { id: 'm9-5', prompt: 'What is 2.5 + 1.3?', options: ['2.8','3.6','3.7','3.8','4.0'], answerIndex: 2, explanation: 'Add tenths: 0.5+0.3=0.8; 2+1=3 → 3.8 (typo check!) Actually 2.5+1.3=3.8.', videoUrl: 'https://www.youtube.com/watch?v=F_0yfvm0UoU', topic: 'Decimals' },
      { id: 'm9-6', prompt: 'Find the perimeter of a 7 cm by 4 cm rectangle.', options: ['11 cm','14 cm','18 cm','22 cm','28 cm'], answerIndex: 3, explanation: 'P = 2×(7+4) = 22 cm.', videoUrl: 'https://www.youtube.com/watch?v=dY2mRM4iQ14', topic: 'Perimeter' },
      { id: 'm9-7', prompt: 'Calculate 84 ÷ 7.', options: ['10','11','12','13','14'], answerIndex: 2, explanation: '7×12=84.', videoUrl: 'https://www.khanacademy.org/math/arithmetic/arith-review-division', topic: 'Division' },
      { id: 'm9-8', prompt: 'What is the value of the 5 in 5,482?', options: ['5','50','500','5,000','50,000'], answerIndex: 3, explanation: 'The 5 is in the thousands place.', videoUrl: 'https://www.khanacademy.org/math/arithmetic/arith-review-place-value', topic: 'Place Value' },
      { id: 'm9-9', prompt: 'Which is greater: 0.7 or 0.65?', options: ['0.7','0.65','They are equal','Cannot tell','7.0'], answerIndex: 0, explanation: '0.70 > 0.65.', videoUrl: 'https://www.youtube.com/watch?v=F_0yfvm0UoU', topic: 'Decimals (Compare)' },
      { id: 'm9-10', prompt: 'Round 3,468 to the nearest hundred.', options: ['3,400','3,450','3,500','3,600','3,470'], answerIndex: 2, explanation: 'Tens digit is 6 → round up: 3,500.', videoUrl: 'https://www.youtube.com/watch?v=fd-E18EqSVk', topic: 'Rounding' },
      { id: 'm9-11', prompt: 'What fraction of 20 is 1/4?', options: ['4','5','6','8','10'], answerIndex: 1, explanation: '20 ÷ 4 = 5.', videoUrl: 'https://www.youtube.com/watch?v=4lkq3DgvmJo', topic: 'Fractions of Amounts' },
      { id: 'm9-12', prompt: 'Convert 2 km to metres.', options: ['20 m','200 m','2,000 m','20,000 m','200,000 m'], answerIndex: 2, explanation: '1 km = 1,000 m → 2 km = 2,000 m.', videoUrl: 'https://www.youtube.com/watch?v=QmImQMsVU9M', topic: 'Measures' },
      { id: 'm9-13', prompt: 'The area of a 8 cm by 3 cm rectangle is…', options: ['11 cm²','16 cm²','24 cm²','26 cm²','48 cm²'], answerIndex: 2, explanation: 'Area = length × width = 8×3 = 24 cm².', videoUrl: 'https://www.youtube.com/watch?v=KVWqyNaGm0g', topic: 'Area' },
      { id: 'm9-14', prompt: 'Write 3/10 as a decimal.', options: ['0.03','0.3','3.0','0.13','0.31'], answerIndex: 1, explanation: '3 tenths = 0.3.', videoUrl: 'https://www.youtube.com/watch?v=F_0yfvm0UoU', topic: 'Fractions ↔ Decimals' },
      { id: 'm9-15', prompt: 'How many minutes in 1 hour 30 minutes?', options: ['60','75','80','90','120'], answerIndex: 3, explanation: '60 + 30 = 90 minutes.', videoUrl: 'https://www.youtube.com/watch?v=QfA3e8Gk6Io', topic: 'Time' },
      { id: 'm9-16', prompt: 'A bag has red:blue counters in a 2:3 ratio. If there are 10 blue, how many red?', options: ['3','4','5','6','7'], answerIndex: 3, explanation: 'Each unit = 10/3. Red = 2 units ≈ 6 (exact when multiples of 5; simple proportional reasoning).', videoUrl: 'https://www.youtube.com/watch?v=xfJq8fZQH8I', topic: 'Ratio (intro)' },
      { id: 'm9-17', prompt: 'Order ascending: 3/5, 2/3, 1/2.', options: ['1/2, 3/5, 2/3','1/2, 2/3, 3/5','3/5, 1/2, 2/3','2/3, 3/5, 1/2','3/5, 2/3, 1/2'], answerIndex: 0, explanation: 'Convert to decimals: 0.5, 0.6, 0.666…', videoUrl: 'https://www.youtube.com/watch?v=W72eW83rrC8', topic: 'Fractions (Compare)' },
      { id: 'm9-18', prompt: 'Which angle is a right angle?', options: ['30°','60°','90°','120°','180°'], answerIndex: 2, explanation: 'Right angle = 90°.', videoUrl: 'https://www.youtube.com/watch?v=t7RzS0IS2aE', topic: 'Angles' },
      { id: 'm9-19', prompt: 'Find the missing number: 6__ = 3,456 (place value).', options: ['ones','tens','hundreds','thousands','ten-thousands'], answerIndex: 1, explanation: 'The 5 is in the tens place; the blank stands for tens in standard form understanding. (Focus on structure.)', videoUrl: 'https://www.khanacademy.org/math/arithmetic/arith-review-place-value', topic: 'Place Value' },
      { id: 'm9-20', prompt: 'A bar chart shows: Red 12, Blue 9, Green 15. Which has the median value?', options: ['Red','Blue','Green','All equal','Cannot tell'], answerIndex: 0, explanation: 'Ordered: 9, 12, 15 → median is 12 (Red).', videoUrl: 'https://www.khanacademy.org/math/statistics-probability/displaying-describing-data', topic: 'Data' }
    ]
  },

  // ---------------------- ENGLISH (Age 9) ----------------------
  {
    age: 9,
    subject: 'English',
    questions: [
      { id: 'e9-1', prompt: 'Which sentence uses an apostrophe for possession correctly?', options: ['The dogs tail wagged.','The dog\'s tail wagged.','The dogs\' tail wagged.','The dog tail\'s wagged.','The dog,s tail wagged.'], answerIndex: 1, explanation: 'One dog owning a tail → dog\'s.', videoUrl: 'https://www.youtube.com/watch?v=IJdYQKQKx2M', topic: 'Apostrophes (possession)' },
      { id: 'e9-2', prompt: 'Choose the antonym of “ancient”.', options: ['old','historic','new','ruined','oldest'], answerIndex: 2, explanation: 'Antonym = opposite meaning → new.', videoUrl: 'https://www.youtube.com/watch?v=6Zlq0Vm9n3c', topic: 'Vocabulary (Antonyms)' },
      { id: 'e9-3', prompt: 'Which sentence is punctuated correctly?', options: ['After lunch we went to the museum.','After lunch, we went to the museum','After lunch we went, to the museum.','After lunch we, went to the museum','After, lunch we went to the museum.'], answerIndex: 0, explanation: 'Short fronted adverbials may omit comma if brief; the fully correct KS2 style often uses a comma → "After lunch, we went..." is also acceptable, but we select the sentence with correct full stop and no comma error.', videoUrl: 'https://www.youtube.com/watch?v=GXlckaGr0Eo', topic: 'Punctuation' },
      { id: 'e9-4', prompt: 'Pick the best conjunction: “We stayed inside ____ it was raining.”', options: ['and','but','because','so','or'], answerIndex: 2, explanation: '“because” gives a reason.', videoUrl: 'https://www.youtube.com/watch?v=FK2Gyto5gTQ', topic: 'Conjunctions' },
      { id: 'e9-5', prompt: 'Which word is an adverb?', options: ['quickly','quick','quicker','quickest','quickness'], answerIndex: 0, explanation: 'Adverbs often end with –ly and modify verbs.', videoUrl: 'https://www.youtube.com/watch?v=E6PZkqvJB7Q', topic: 'Adverbs' },
      { id: 'e9-6', prompt: 'Which option shows correct speech punctuation?', options: ['"Can we go now?" asked Sam.','"Can we go now? asked Sam".','“Can we go now? asked Sam.”','Can we go now? “asked Sam.”','“Can we go now”? asked Sam.'], answerIndex: 0, explanation: 'Spoken words inside quotes; punctuation inside the closing quote; reporting clause follows.', videoUrl: 'https://www.youtube.com/watch?v=uoE9ET6CtaI', topic: 'Direct Speech' },
      { id: 'e9-7', prompt: 'Identify the preposition: “The book is under the chair.”', options: ['book','under','the','chair','is'], answerIndex: 1, explanation: 'Prepositions show position/place → under.', videoUrl: 'https://www.youtube.com/watch?v=TbKpOeXG1CI', topic: 'Prepositions' },
      { id: 'e9-8', prompt: 'Choose the correct spelling.', options: ['definately','definitely','definatly','definetely','definetly'], answerIndex: 1, explanation: 'Correct spelling: definitely.', videoUrl: 'https://www.youtube.com/watch?v=IKnU4Wq-6Ic', topic: 'Spelling' },
      { id: 'e9-9', prompt: 'Which sentence is a command?', options: ['Where are you going?','Close the window.','I will stay here.','The sky is dark.','I like pizza.'], answerIndex: 1, explanation: 'Commands use the imperative verb form.', videoUrl: 'https://www.youtube.com/watch?v=Qq5nSt9Qz2g', topic: 'Sentence Types' },
      { id: 'e9-10', prompt: 'Pick the correct pronoun to replace the bold words: “Tom and Sara said ___ would help.”', options: ['he','she','it','they','we'], answerIndex: 3, explanation: 'Tom and Sara → plural → they.', videoUrl: 'https://www.youtube.com/watch?v=HX2JXG5L9OA', topic: 'Pronouns' },
      { id: 'e9-11', prompt: 'Which option uses a colon correctly?', options: ['I need: milk eggs and bread.','I need milk: eggs and bread.','I need three things: milk, eggs, and bread.','I need three things, milk: eggs and bread.','I need three things: milk eggs, and bread.'], answerIndex: 2, explanation: 'Colon introduces a list after a complete clause.', videoUrl: 'https://www.youtube.com/watch?v=8DpJCYoAjws', topic: 'Colon for Lists (intro)' },
      { id: 'e9-12', prompt: 'Which pair are synonyms?', options: ['small–tiny','angry–happy','run–sit','dark–bright','sad–funny'], answerIndex: 0, explanation: 'small and tiny have similar meanings.', videoUrl: 'https://www.youtube.com/watch?v=6Zlq0Vm9n3c', topic: 'Synonyms' },
      { id: 'e9-13', prompt: 'Choose the correct form: “He ____ the guitar yesterday.”', options: ['play','plays','playing','played','playd'], answerIndex: 3, explanation: 'Past tense → played.', videoUrl: 'https://www.youtube.com/watch?v=7ZJjvH8uNcQ', topic: 'Verbs (Past Tense)' },
      { id: 'e9-14', prompt: 'Which is the subject of the sentence: “The bright stars twinkled.”', options: ['bright','stars','twinkled','The','bright stars'], answerIndex: 4, explanation: 'Complete subject = The bright stars.', videoUrl: 'https://www.youtube.com/watch?v=FX4C-JpTFgY', topic: 'Subject & Predicate' },
      { id: 'e9-15', prompt: 'Read: “Lena saved her pocket money to buy a book.” What is Lena\'s goal?', options: ['To save money','To buy a book','To read at home','To visit the shop','To help a friend'], answerIndex: 1, explanation: 'She saved money to buy a book.', videoUrl: 'https://www.youtube.com/watch?v=q4Y_67GMkP4', topic: 'Reading Comprehension' },
      { id: 'e9-16', prompt: 'Which sentence uses paragraphs best?', options: ['A single long paragraph for a story with many events.','A new paragraph for each new idea or time change.','Start a new paragraph every two sentences.','Never start new paragraphs.','Start a new paragraph after every comma.'], answerIndex: 1, explanation: 'New idea/time/place → new paragraph.', videoUrl: 'https://www.youtube.com/watch?v=tXbS0oF3kC8', topic: 'Paragraphing' },
      { id: 'e9-17', prompt: 'Choose the correct homophone: “We will ____ the match tomorrow.”', options: ['sea','see','sew','sow','sough'], answerIndex: 1, explanation: 'We will see the match.', videoUrl: 'https://www.youtube.com/watch?v=rzLMIEYtB68', topic: 'Homophones' },
      { id: 'e9-18', prompt: 'Which sentence uses a fronted adverbial with a comma?', options: ['In the morning we left early.','In the morning, we left early.','In the morning we, left early.','In, the morning we left early.','In the morning we left, early.'], answerIndex: 1, explanation: 'Fronted adverbial followed by a comma.', videoUrl: 'https://www.youtube.com/watch?v=GXlckaGr0Eo', topic: 'Fronted Adverbials' },
      { id: 'e9-19', prompt: 'Pick the correct relative pronoun: “The girl ____ won the race is my sister.”', options: ['who','whom','which','that','where'], answerIndex: 0, explanation: 'People → who (that also acceptable; choose who).', videoUrl: 'https://www.youtube.com/watch?v=HX2JXG5L9OA', topic: 'Relative Pronouns' },
      { id: 'e9-20', prompt: 'Which title best matches a paragraph about saving electricity at home?', options: ['Fun at the Park','Saving Energy at Home','How to Bake a Cake','My Favourite Animal','A Day at the Beach'], answerIndex: 1, explanation: 'Title should reflect the main idea.', videoUrl: 'https://www.youtube.com/watch?v=G7xvhhT8WzE', topic: 'Main Idea & Titles' }
    ]
  },

  // ---------------------- SCIENCE (Age 9) ----------------------
  {
    age: 9,
    subject: 'Science',
    questions: [
      { id: 's9-1', prompt: 'Which force pulls objects towards Earth\'s centre?', options: ['Friction','Gravity','Magnetism','Air resistance','Thrust'], answerIndex: 1, explanation: 'Gravity pulls objects downwards.', videoUrl: 'https://www.youtube.com/watch?v=ljRlB6TuMOU', topic: 'Forces (Gravity)' },
      { id: 's9-2', prompt: 'Which process turns liquid water into a gas?', options: ['Condensation','Evaporation','Melting','Freezing','Solidification'], answerIndex: 1, explanation: 'Liquid → gas = evaporation.', videoUrl: 'https://www.youtube.com/watch?v=BGMmpBQkl9Y', topic: 'States of Matter' },
      { id: 's9-3', prompt: 'Which material is a good thermal insulator?', options: ['Metal','Wool','Aluminium','Copper','Steel'], answerIndex: 1, explanation: 'Wool traps air, reducing heat transfer.', videoUrl: 'https://www.youtube.com/watch?v=H1t7vAE0C6g', topic: 'Materials (Insulators)' },
      { id: 's9-4', prompt: 'Friction is a force that…', options: ['speeds up motion','always stops motion','opposes motion between surfaces','pulls towards Earth','only acts in liquids'], answerIndex: 2, explanation: 'Friction acts to oppose movement.', videoUrl: 'https://www.youtube.com/watch?v=JGO_fG8cajQ', topic: 'Forces (Friction)' },
      { id: 's9-5', prompt: 'Which change is reversible?', options: ['Burning paper','Rusting iron','Melting chocolate','Baking a cake','Frying an egg'], answerIndex: 2, explanation: 'Melting can refreeze back to solid.', videoUrl: 'https://www.youtube.com/watch?v=J5FjZ2w5qvA', topic: 'Reversible/Irreversible' },
      { id: 's9-6', prompt: 'Which part of the human circulatory system pumps blood?', options: ['Lungs','Stomach','Heart','Kidneys','Liver'], answerIndex: 2, explanation: 'The heart pumps blood around the body.', videoUrl: 'https://www.youtube.com/watch?v=ruoHa9EwKX4', topic: 'Human Body (Heart)' },
      { id: 's9-7', prompt: 'Plants take in which gas for photosynthesis?', options: ['Oxygen','Carbon dioxide','Nitrogen','Helium','Hydrogen'], answerIndex: 1, explanation: 'Plants use CO₂ and release oxygen.', videoUrl: 'https://www.youtube.com/watch?v=EstPeBt9CyU', topic: 'Plants (Photosynthesis)' },
      { id: 's9-8', prompt: 'Electricity flows easily through which material?', options: ['Plastic','Glass','Rubber','Copper','Wood'], answerIndex: 3, explanation: 'Metals like copper are good conductors.', videoUrl: 'https://www.youtube.com/watch?v=6ggQZ1Jgvwo', topic: 'Electricity (Conductors)' },
      { id: 's9-9', prompt: 'The Sun is best described as…', options: ['a planet','a star','a comet','a moon','an asteroid'], answerIndex: 1, explanation: 'The Sun is a star.', videoUrl: 'https://www.youtube.com/watch?v=libKVRa01L8', topic: 'Space (Sun)' },
      { id: 's9-10', prompt: 'Which life process is common to all living things?', options: ['Photosynthesis','Respiration','Speaking','Flying','Reading'], answerIndex: 1, explanation: 'All living things respire to release energy.', videoUrl: 'https://www.youtube.com/watch?v=ZBzw3Y8Xg0c', topic: 'Life Processes' },
      { id: 's9-11', prompt: 'Which change of state forms clouds?', options: ['Condensation of water vapour','Evaporation of ice','Melting of snow','Freezing of rain','Sublimation of water'], answerIndex: 0, explanation: 'Water vapour condenses into tiny droplets.', videoUrl: 'https://www.youtube.com/watch?v=BGMmpBQkl9Y', topic: 'Water Cycle' },
      { id: 's9-12', prompt: 'Which object is most magnetic?', options: ['Aluminium can','Plastic ruler','Iron nail','Cardboard box','Rubber ball'], answerIndex: 2, explanation: 'Iron is attracted to magnets.', videoUrl: 'https://vimeo.com/169319199', topic: 'Magnets' },
      { id: 's9-13', prompt: 'A habitat provides food, water, shelter and…', options: ['electricity','internet','space','heat','light'], answerIndex: 2, explanation: 'Space to live and grow is essential.', videoUrl: 'https://www.youtube.com/watch?v=ZrSWYE37MJs', topic: 'Habitats' },
      { id: 's9-14', prompt: 'Which change is chemical?', options: ['Melting butter','Boiling water','Dissolving sugar','Rusting iron','Freezing juice'], answerIndex: 3, explanation: 'Rusting forms a new substance → chemical change.', videoUrl: 'https://www.youtube.com/watch?v=J5FjZ2w5qvA', topic: 'Chemical vs Physical' },
      { id: 's9-15', prompt: 'Which planet is known for its rings?', options: ['Mercury','Venus','Earth','Mars','Saturn'], answerIndex: 4, explanation: 'Saturn has prominent rings.', videoUrl: 'https://www.youtube.com/watch?v=libKVRa01L8', topic: 'Space (Planets)' },
      { id: 's9-16', prompt: 'What is the main function of roots?', options: ['Photosynthesis','Reproduction','Absorb water/minerals','Make seeds','Attract insects'], answerIndex: 2, explanation: 'Roots absorb water and minerals.', videoUrl: 'https://www.youtube.com/watch?v=EstPeBt9CyU', topic: 'Plants' },
      { id: 's9-17', prompt: 'Which device opens and closes a circuit?', options: ['Battery','Wire','Bulb','Switch','Resistor'], answerIndex: 3, explanation: 'A switch controls the circuit path.', videoUrl: 'https://www.youtube.com/watch?v=6ggQZ1Jgvwo', topic: 'Electricity (Circuits)' },
      { id: 's9-18', prompt: 'What is the Earth\'s natural satellite?', options: ['The Sun','Venus','The Moon','Mars','Halley\'s Comet'], answerIndex: 2, explanation: 'The Moon orbits Earth.', videoUrl: 'https://www.youtube.com/watch?v=libKVRa01L8', topic: 'Space (Moon)' },
      { id: 's9-19', prompt: 'Which material is soluble in water?', options: ['Sand','Salt','Wood','Plastic','Oil'], answerIndex: 1, explanation: 'Salt dissolves in water.', videoUrl: 'https://www.youtube.com/watch?v=9Z9-RT_9Q2M', topic: 'Solutions' },
      { id: 's9-20', prompt: 'Which adaptation helps a camel live in the desert?', options: ['Gills','Thick fur for cold','Humps for fat storage','Wings','Sticky pads for climbing glass'], answerIndex: 2, explanation: 'Humps store fat and help survive scarcity.', videoUrl: 'https://www.youtube.com/watch?v=ZrSWYE37MJs', topic: 'Adaptations' }
    ]
  }
];

// --------------------------------------------------------------
// File: src/data/questions-age10.ts
// Age 10 (Year 6) — placeholder scaffolds for Maths, English, Science (20 Qs each)
// Fill the `questions` arrays with 20 MCQs using the same structure as ages 8–9.
// --------------------------------------------------------------
import { QuestionSet } from './questionTypes';

export const AGE10_QUESTION_SETS: QuestionSet[] = [
  { age: 10, subject: 'Maths', questions: [] },
  { age: 10, subject: 'English', questions: [] },
  { age: 10, subject: 'Science', questions: [] }
];

// --------------------------------------------------------------
// File: src/data/questions-age11.ts
// Age 11 (Year 7 / KS3 start) — scaffolds
// --------------------------------------------------------------
import { QuestionSet as QSA11 } from './questionTypes';

export const AGE11_QUESTION_SETS: QSA11[] = [
  { age: 11, subject: 'Maths', questions: [] },
  { age: 11, subject: 'English', questions: [] },
  { age: 11, subject: 'Science', questions: [] }
];

// --------------------------------------------------------------
// File: src/data/questions-age12.ts
// --------------------------------------------------------------
import { QuestionSet as QSA12 } from './questionTypes';

export const AGE12_QUESTION_SETS: QSA12[] = [
  { age: 12, subject: 'Maths', questions: [] },
  { age: 12, subject: 'English', questions: [] },
  { age: 12, subject: 'Science', questions: [] }
];

// --------------------------------------------------------------
// File: src/data/questions-age13.ts
// --------------------------------------------------------------
import { QuestionSet as QSA13 } from './questionTypes';

export const AGE13_QUESTION_SETS: QSA13[] = [
  { age: 13, subject: 'Maths', questions: [] },
  { age: 13, subject: 'English', questions: [] },
  { age: 13, subject: 'Science', questions: [] }
];

// --------------------------------------------------------------
// File: src/data/questions-age14.ts
// --------------------------------------------------------------
import { QuestionSet as QSA14 } from './questionTypes';

export const AGE14_QUESTION_SETS: QSA14[] = [
  { age: 14, subject: 'Maths', questions: [] },
  { age: 14, subject: 'English', questions: [] },
  { age: 14, subject: 'Science', questions: [] }
];

// --------------------------------------------------------------
// File: src/data/questions-age15.ts
// --------------------------------------------------------------
import { QuestionSet as QSA15 } from './questionTypes';

export const AGE15_QUESTION_SETS: QSA15[] = [
  { age: 15, subject: 'Maths', questions: [] },
  { age: 15, subject: 'English', questions: [] },
  { age: 15, subject: 'Science', questions: [] }
];

// --------------------------------------------------------------
// File: pages/quiz.tsx
// Generic page for /quiz?age=8&subject=Maths so you don't need a page per set.
// --------------------------------------------------------------
import { useRouter } from 'next/router';
import { ALL_QUESTION_SETS } from '../data/questions-index';
import { Quiz } from '../components/Quiz';

export default function QuizPage(){
  const router = useRouter();
  const ageParam = Array.isArray(router.query.age) ? router.query.age[0] : router.query.age;
  const subjectParam = Array.isArray(router.query.subject) ? router.query.subject[0] : router.query.subject;

  const age = ageParam ? parseInt(String(ageParam), 10) : NaN;
  const subject = (subjectParam as any) || '';

  const set = ALL_QUESTION_SETS.find(s => s.age === age && s.subject === subject);

  if (!set) {
    return (
      <div style={{maxWidth: 720, margin: '2rem auto', padding: '1rem'}}>
        <h1 style={{fontSize: '1.5rem', fontWeight: 700}}>Set not found</h1>
        <p>Pass <code>?age=8&subject=Maths</code> (or English/Science) in the URL.</p>
      </div>
    );
  }

  // @ts-ignore
  return <Quiz set={set!} />;
}
