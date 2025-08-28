// data/questions-index.js
// Aggregates ALL question sets (ages 8–15) into one array.
//
// ✔ Safe: missing files fall back to empty arrays
// ✔ Helpers: getQuestionSet, getAges, getSubjectsForAge
// ✔ CommonJS so it "just works" in Next.js server code

function safeImport(modPath) {
  try {
    // Try local JS data files first (recommended)
    return require(modPath);
  } catch (e) {
    // If you kept some earlier TypeScript files in src/data/, try those too
    try {
      return require('../src/data/' + modPath.replace('./', ''));
    } catch {
      return {};
    }
  }
}

// Try JS versions in /data first; TS fallback lives under /src/data
const { AGE8_QUESTION_SETS  = [] } = safeImport('./questions-age8');
const { AGE9_QUESTION_SETS  = [] } = safeImport('./questions-age9');
const { AGE10_QUESTION_SETS = [] } = safeImport('./questions-age10'); // optional if you haven't added Age 10 yet
const { AGE11_QUESTION_SETS = [] } = safeImport('./questions-age11');
const { AGE12_QUESTION_SETS = [] } = safeImport('./questions-age12');
const { AGE13_QUESTION_SETS = [] } = safeImport('./questions-age13');
const { AGE14_QUESTION_SETS = [] } = safeImport('./questions-age14');
const { AGE15_QUESTION_SETS = [] } = safeImport('./questions-age15');

const join = (...groups) => groups.flat();

export const ALL_QUESTION_SETS = join(
  AGE8_QUESTION_SETS,
  AGE9_QUESTION_SETS,
  AGE10_QUESTION_SETS,
  AGE11_QUESTION_SETS,
  AGE12_QUESTION_SETS,
  AGE13_QUESTION_SETS,
  AGE14_QUESTION_SETS,
  AGE15_QUESTION_SETS
);

// ---------- Handy helpers ----------
/** Find one set by age + subject */
export const getQuestionSet = (age, subject) =>
  ALL_QUESTION_SETS.find(s => s.age === Number(age) && s.subject === subject);

/** All ages that have at least one subject populated */
export const getAges = () =>
  [...new Set(ALL_QUESTION_SETS.map(s => s.age))].sort((a, b) => a - b);

/** Subjects available for a given age (e.g. ['Maths','English','Science']) */
export const getSubjectsForAge = (age) =>
  [...new Set(ALL_QUESTION_SETS.filter(s => s.age === Number(age)).map(s => s.subject))];
