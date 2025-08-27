// /data/recommendations.js
// Map quiz topics -> suggested learnings and lessons/courses.

const recommendations = {
  math: {
    "place-value": {
      message:
        "Place value confusion shows up in multi-digit operations. Review how each digit’s position changes its value.",
      lessons: [
        "Understanding Thousands, Hundreds, Tens & Ones",
        "Expanded Form and Comparing Numbers",
        "Rounding and Estimation Drills",
      ],
    },
    multiplication: {
      message:
        "Build fluency with times tables and patterns so multi-step problems feel automatic.",
      lessons: [
        "Times Tables Mastery (×0–×12)",
        "Area Models & Arrays",
        "Speed Drills: Mixed Multiplication",
      ],
    },
    division: {
      message:
        "Strengthen basic division and the connection to multiplication facts.",
      lessons: [
        "Division as Inverse of Multiplication",
        "Short Division Strategies",
        "Word Problems with Remainders",
      ],
    },
    fractions: {
      message:
        "Focus on equivalent fractions and simplifying before operations.",
      lessons: [
        "Equivalent Fractions & Simplifying",
        "Common Denominators (Add/Subtract)",
        "Fractions ↔ Decimals Practice",
      ],
    },
    perimeter: {
      message:
        "Revisit perimeter vs area and make sure you’re summing side lengths correctly.",
      lessons: [
        "Perimeter of Rectangles & Polygons",
        "Mixed Perimeter vs Area Problems",
        "Real-World Measurement Tasks",
      ],
    },
    "algebra-like-terms": {
      message:
        "Combine like terms carefully—match the variable and power before adding coefficients.",
      lessons: [
        "Combining Like Terms",
        "Distributive Property Warm-ups",
        "Simplifying Algebraic Expressions",
      ],
    },
    area: {
      message:
        "Review area formulas and units; draw quick sketches to label length/width/base/height.",
      lessons: [
        "Area of Rectangles & Triangles",
        "Parallelograms & Composite Shapes",
        "Units & Word Problems",
      ],
    },
    factors: {
      message:
        "Prime factors make many problems easier—practice factor trees and divisibility rules.",
      lessons: [
        "Divisibility Rules (2,3,5,9,10, etc.)",
        "Prime Factorization & GCF/LCM",
        "Applications to Fractions & Ratios",
      ],
    },
    "decimals-to-fractions": {
      message:
        "Translate place value in decimals into fraction form; always simplify.",
      lessons: [
        "Tenths/Hundredths to Fractions",
        "Terminating vs Repeating Decimals",
        "Operations with Decimals & Fractions",
      ],
    },
    "one-step-equations": {
      message:
        "Balance both sides—undo operations in reverse order to isolate the variable.",
      lessons: [
        "Inverse Operations (Add/Subtract/Multiply/Divide)",
        "Solving One-Step Equations",
        "Equation Word Problems",
      ],
    },
    ratios: {
      message:
        "Use tape/ratio tables to see part-to-part vs part-to-whole clearly.",
      lessons: [
        "Simplifying Ratios",
        "Ratio Tables & Double-Number Lines",
        "Applications: Recipes & Maps",
      ],
    },
    percentages: {
      message:
        "Convert between fractions, decimals, and percentages; benchmark 10%, 25%, 50%.",
      lessons: [
        "Percent of a Quantity",
        "Increase/Decrease & Discounts",
        "Percentage Word Problems",
      ],
    },
    integers: {
      message:
        "Use number lines and real-world contexts (temperature/elevation) for negative numbers.",
      lessons: [
        "Adding/Subtracting Integers",
        "Multiplying/Dividing Integers",
        "Absolute Value & Distance",
      ],
    },
    angles: {
      message:
        "Angle sums and naming relationships (complementary/supplementary) help solve quickly.",
      lessons: [
        "Triangle Angle Sum",
        "Complementary & Supplementary Angles",
        "Unknown Angles in Diagrams",
      ],
    },
    circles: {
      message:
        "Memorise C=2πr and A=πr²; be careful distinguishing radius vs diameter.",
      lessons: [
        "Circumference & Area of Circles",
        "Arc Length & Sectors (Intro)",
        "π Estimation & Applications",
      ],
    },
    "linear-equations": {
      message:
        "Translate words to algebra, then isolate the variable step by step.",
      lessons: [
        "Two-Step Linear Equations",
        "Distributive Property & Combining Terms",
        "Equation Modeling from Context",
      ],
    },
    slope: {
      message:
        "Slope is rise/run—compute from pairs of points and connect to rate of change.",
      lessons: [
        "Slope from Points & Graphs",
        "Slope-Intercept Form (y=mx+b)",
        "Graphing Lines & Intercepts",
      ],
    },
    "pythagorean-theorem": {
      message:
        "For right triangles only—check which side is the hypotenuse before substituting.",
      lessons: [
        "Pythagorean Theorem Basics",
        "Finding Missing Legs/Hypotenuse",
        "Distance on the Coordinate Plane",
      ],
    },
    proportions: {
      message:
        "Cross-multiply cautiously and reduce ratios before solving.",
      lessons: [
        "Solving Proportions",
        "Scale Drawings & Similar Figures",
        "Unit Conversion with Proportions",
      ],
    },
    "unit-rate": {
      message:
        "Divide to find per-1 quantities; compare by converting to a common unit.",
      lessons: [
        "Unit Rate & Best Buy",
        "Speed/Cost per Unit Problems",
        "Complex Conversions",
      ],
    },
    "simultaneous-equations": {
      message:
        "Choose substitution or elimination, and keep equations aligned to avoid sign errors.",
      lessons: [
        "Solving Systems by Substitution",
        "Solving Systems by Elimination",
        "Systems Word Problems",
      ],
    },
    "slope-intercept": {
      message:
        "Identify b as the starting value and m as change per unit; graph intercepts cleanly.",
      lessons: [
        "Intercepts & Graphing Lines",
        "Parallel/Perpendicular Lines (Intro)",
        "Real-World Linear Models",
      ],
    },
    exponents: {
      message:
        "Use exponent rules (product/quotient/power) and watch for negative/zero exponents.",
      lessons: [
        "Exponent Laws",
        "Powers of Ten & Scientific Notation",
        "Simplifying with Exponents",
      ],
    },
    probability: {
      message:
        "List outcomes systematically; distinguish theoretical vs experimental probability.",
      lessons: [
        "Simple Probability",
        "Compound Events & Trees (Intro)",
        "Expected Value (Foundation)",
      ],
    },
    polygons: {
      message:
        "Use polygon interior-angle sums and break complex shapes into simpler ones.",
      lessons: [
        "Interior/Exterior Angles",
        "Regular Polygons",
        "Composite Figures & Angle Puzzles",
      ],
    },
    quadratics: {
      message:
        "Connect factoring, zeros, and the graph; check a×c method or completing the square.",
      lessons: [
        "Factoring Quadratics",
        "Quadratic Formula & Discriminant",
        "Graphs: Vertex & Intercepts",
      ],
    },
    factoring: {
      message:
        "Always factor out the GCF first; recognise special patterns (squares/cubes).",
      lessons: [
        "GCF & Special Products",
        "Difference of Squares",
        "Trinomials (ax²+bx+c)",
      ],
    },
    functions: {
      message:
        "Understand input→output rules; evaluate and interpret in context.",
      lessons: [
        "Function Notation f(x)",
        "Tables, Graphs, and Rules",
        "Linear vs Non-Linear Models",
      ],
    },
    trigonometry: {
      message:
        "For right triangles, relate SOH-CAH-TOA to sides; use calculators carefully (degrees!).",
      lessons: [
        "Sine, Cosine, Tangent Basics",
        "Solving Right Triangles",
        "Trigonometric Ratios in Context",
      ],
    },
  },

  english: {
    punctuation: {
      message:
        "Tighten punctuation—commas, apostrophes, and semicolons drive clarity.",
      lessons: [
        "Commas & Apostrophes Essentials",
        "Semicolons vs Conjunctions",
        "Punctuating Quotations",
      ],
    },
    "parts-of-speech": {
      message:
        "Label nouns, verbs, adjectives, adverbs—this supports stronger sentences.",
      lessons: [
        "Parts of Speech Bootcamp",
        "Modifiers & Placement",
        "Sentence Diagramming (Intro)",
      ],
    },
    vocabulary: {
      message:
        "Grow academic vocabulary; practise with context clues and word families.",
      lessons: [
        "Context Clues Strategies",
        "Synonyms/Antonyms Precision",
        "Greek & Latin Roots",
      ],
    },
    capitalization: {
      message:
        "Review proper nouns, titles, and sentence starts for consistent capitalization.",
      lessons: [
        "Capitalization Rules",
        "Titles & Proper Nouns",
        "Common Errors Practice",
      ],
    },
    "sentence-types": {
      message:
        "Know declarative/interrogative/imperative/exclamatory and punctuate accordingly.",
      lessons: [
        "Sentence Types & Purposes",
        "Run-ons and Fragments Fix-ups",
        "Combining Sentences Clearly",
      ],
    },
    homophones: {
      message:
        "They’re/their/there and similar sets need meaning-based checks before you write.",
      lessons: [
        "Commonly Confused Words",
        "Pronoun-Antecedent Agreement",
        "Editing for Homophones",
      ],
    },
    semicolons: {
      message:
        "Use semicolons between closely related independent clauses or in complex lists.",
      lessons: [
        "Semicolons vs Colons vs Commas",
        "Independent Clauses Refresher",
        "Punctuation in Compound Sentences",
      ],
    },
    grammar: {
      message:
        "Shore up subjects, predicates, and modifiers to avoid ambiguity.",
      lessons: [
        "Core Grammar Review",
        "Modifiers & Placement",
        "Avoiding Comma Splices",
      ],
    },
    idioms: {
      message:
        "Idioms rely on context; build familiarity via reading and practice quizzes.",
      lessons: [
        "Common Idioms & Meanings",
        "Figurative vs Literal Language",
        "Using Idioms Effectively",
      ],
    },
    apostrophes: {
      message:
        "Differentiate possession vs contraction; avoid it’s/its mistakes.",
      lessons: [
        "Apostrophes for Possession",
        "Contractions & Common Pitfalls",
        "Editing Practice",
      ],
    },
    "sentence-structure": {
      message:
        "Combine clauses correctly; use semicolons or conjunctions to avoid run-ons.",
      lessons: [
        "Simple/Compound/Complex Sentences",
        "Coordinating & Subordinating Conjunctions",
        "Fixing Run-ons & Fragments",
      ],
    },
    "subject-verb-agreement": {
      message:
        "Match singular/plural forms; watch tricky subjects (neither/either, indefinite pronouns).",
      lessons: [
        "Agreement with Compound Subjects",
        "Indefinite Pronouns",
        "Collective Nouns & Intervening Phrases",
      ],
    },
    "figurative-language": {
      message:
        "Identify and use simile, metaphor, personification for vivid writing.",
      lessons: [
        "Figurative Language Toolkit",
        "Imagery & Tone",
        "Crafting Comparisons in Writing",
      ],
    },
    clauses: {
      message:
        "Use commas for nonessential clauses; avoid comma splices elsewhere.",
      lessons: [
        "Essential vs Nonessential Information",
        "Relative Pronouns (who/which/that)",
        "Punctuation with Clauses",
      ],
    },
    tone: {
      message:
        "Look for word choice and connotation; practise identifying tone in short passages.",
      lessons: [
        "Diction & Connotation",
        "Author’s Purpose & Tone",
        "Close Reading Exercises",
      ],
    },
    morphology: {
      message:
        "Prefixes/roots/suffixes unlock meaning—build families of related words.",
      lessons: [
        "Greek & Latin Roots",
        "Affixes and Word Families",
        "Decoding Academic Vocabulary",
      ],
    },
    parallelism: {
      message:
        "Keep lists and paired ideas in the same grammatical form for clarity.",
      lessons: [
        "Parallel Structure in Sentences",
        "Revising for Style",
        "Common Non-Parallel Pitfalls",
      ],
    },
    "dangling-modifiers": {
      message:
        "Make sure the modifier clearly describes the subject that follows.",
      lessons: [
        "Modifiers & Placement",
        "Dangling/Misplaced Modifiers Fix-ups",
        "Clarity in Complex Sentences",
      ],
    },
    quotations: {
      message:
        "Punctuate inside quotes and attribute with commas or colons appropriately.",
      lessons: [
        "Quotation Marks & Dialogue",
        "Block Quotes & Punctuation",
        "Integrating Evidence",
      ],
    },
    hyphens: {
      message:
        "Hyphenate compound modifiers before nouns (e.g., ‘well-known author’).",
      lessons: [
        "Hyphens vs Dashes",
        "Compound Modifiers",
        "Consistency in Style Guides",
      ],
    },
    writing: {
      message:
        "Aim for a focused, arguable thesis and strong paragraph structure.",
      lessons: [
        "Thesis Statements & Claims",
        "PEEL/TEEL Paragraphs",
        "Outlining & Revising",
      ],
    },
    style: {
      message:
        "Choose concise, direct language; cut wordiness and redundancy.",
      lessons: [
        "Concision & Clarity",
        "Active vs Passive Voice",
        "Editing for Readability",
      ],
    },
    rhetoric: {
      message:
        "Balance ethos, pathos, and logos; support claims with evidence.",
      lessons: [
        "Rhetorical Appeals",
        "Using Evidence Effectively",
        "Audience & Purpose",
      ],
    },
    "verb-mood": {
      message:
        "Use the subjunctive for hypotheticals (‘If I were…’) and maintain consistent mood.",
      lessons: [
        "Indicative, Imperative, Subjunctive",
        "Conditional Statements",
        "Editing Practice",
      ],
    },
  },

  science: {
    astronomy: {
      message:
        "Clarify planetary features and Earth-Sun-Moon relationships (phases, seasons).",
      lessons: [
        "Planets & Their Characteristics",
        "Earth-Moon-Sun System",
        "Why We Have Seasons",
      ],
    },
    plants: {
      message:
        "Reinforce photosynthesis inputs/outputs and plant structures.",
      lessons: [
        "Plant Structures & Functions",
        "Photosynthesis Lab Simulations",
        "Transport in Plants",
      ],
    },
    "states-of-matter": {
      message:
        "Track particle motion/spacing for solid, liquid, gas; review phase changes.",
      lessons: [
        "Particle Model of Matter",
        "Melting/Freezing/Boiling/Condensing",
        "Energy & Phase Change Graphs",
      ],
    },
    atmosphere: {
      message:
        "Know atmospheric composition and the role of nitrogen/oxygen/CO₂.",
      lessons: [
        "Layers & Composition of the Atmosphere",
        "Respiration vs Photosynthesis",
        "Greenhouse Effect (Intro)",
      ],
    },
    "animal-groups": {
      message:
        "Classify by backbone, body covering, and reproduction methods.",
      lessons: [
        "Vertebrates vs Invertebrates",
        "Animal Classification Keys",
        "Adaptations & Habitats",
      ],
    },
    respiration: {
      message:
        "Contrast inhaled vs exhaled gases and the role of the lungs and blood.",
      lessons: [
        "Respiratory System Basics",
        "Gas Exchange & Circulation",
        "Exercise and Breathing Rate",
      ],
    },
    cells: {
      message:
        "Review organelles and their functions; compare plant vs animal cells.",
      lessons: [
        "Cell Structure & Organelles",
        "Microscope Skills",
        "Cell Processes (Osmosis/Diffusion)",
      ],
    },
    energy: {
      message:
        "Differentiate renewable/nonrenewable; trace energy transformations.",
      lessons: [
        "Forms of Energy",
        "Energy Conversions & Efficiency",
        "Sustainable Resources",
      ],
    },
    forces: {
      message:
        "Connect Newton’s laws to everyday motion; separate weight vs mass.",
      lessons: [
        "Balanced vs Unbalanced Forces",
        "Friction, Gravity, Tension",
        "Force Diagrams & Calculations",
      ],
    },
    "physical-vs-chemical": {
      message:
        "Identify signs of chemical change vs reversible physical change.",
      lessons: [
        "Evidence of Chemical Reactions",
        "Physical Properties & Changes",
        "Conservation of Mass (Intro)",
      ],
    },
    genetics: {
      message:
        "Tie chromosomes/genes/alleles together; practise Punnett squares.",
      lessons: [
        "DNA, Genes, and Chromosomes",
        "Punnett Squares & Probability",
        "Traits, Inheritance, Variation",
      ],
    },
    "circulatory-system": {
      message:
        "Follow the path of blood and the role of red blood cells and hemoglobin.",
      lessons: [
        "Heart & Blood Vessels",
        "Pulmonary vs Systemic Circulation",
        "Blood Components & Functions",
      ],
    },
    "chemistry-pH": {
      message:
        "Place substances on the pH scale; connect acids/bases to real examples.",
      lessons: [
        "pH Scale & Indicators",
        "Acids, Bases, and Neutralization",
        "Everyday Chemistry (Soaps, Food, Soil)",
      ],
    },
    "physics-motion": {
      message:
        "Use velocity vs speed correctly; compute acceleration from data.",
      lessons: [
        "Speed, Velocity, and Acceleration",
        "Distance-Time & Velocity-Time Graphs",
        "Forces & Motion Experiments",
      ],
    },
    "earth-science": {
      message:
        "Revisit rock cycle processes and how sediments become rock.",
      lessons: [
        "Rock Cycle Overview",
        "Weathering, Erosion, Deposition",
        "Sedimentary Rock Formation",
      ],
    },
    "chemistry-thermo": {
      message:
        "Compare endothermic vs exothermic with energy diagrams.",
      lessons: [
        "Heat in Chemical Reactions",
        "Energy Profiles",
        "Everyday Examples & Labs",
      ],
    },
    "physics-forces": {
      message:
        "Apply F = m·a and draw force diagrams to solve numeric problems.",
      lessons: [
        "Newton’s Laws with Calculations",
        "Net Force & Acceleration",
        "Applications: Safety & Motion",
      ],
    },
    "periodic-table": {
      message:
        "Recognise groups/periods; halogens, alkali metals, and trends (reactivity, size).",
      lessons: [
        "Structure of the Periodic Table",
        "Families & Common Properties",
        "Trends Across Periods/Groups",
      ],
    },
    climate: {
      message:
        "Understand how greenhouse gases trap infrared radiation and affect climate.",
      lessons: [
        "Greenhouse Effect & Energy Balance",
        "Major Greenhouse Gases",
        "Climate Change Evidence (Intro)",
      ],
    },
    "chemistry-bonding": {
      message:
        "Differentiate ionic (transfer) vs covalent (sharing) with examples.",
      lessons: [
        "Ionic vs Covalent Bonds",
        "Molecular Models",
        "Properties from Bond Type",
      ],
    },
    "physics-work": {
      message:
        "Relate work = force × distance and connect to energy transfer.",
      lessons: [
        "Work, Power, Energy",
        "Simple Machines & Mechanical Advantage",
        "Real-World Problem Solving",
      ],
    },
  },
};

export default recommendations;
