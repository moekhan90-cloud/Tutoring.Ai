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
      }
    ],
    11: [
      {
        id: "m11-1",
        prompt: "Simplify: 3x + 5x",
        choices: ["8x", "15x", "35x", "x^8"],
        answerIndex: 0,
        topic: "algebra",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "m11-2",
        prompt: "What is the area of a rectangle with length 12cm and width 5cm?",
        choices: ["17 cm²", "60 cm²", "24 cm²", "30 cm²"],
        answerIndex: 1,
        topic: "geometry",
        difficulty: "medium",
        targetSeconds: 30
      }
    ],
    // Repeat for ages 12–15
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
        topic: "grammar",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    11: [
      {
        id: "e11-1",
        prompt: "Which sentence uses the correct form of 'their'?",
        choices: [
          "There going to the park.",
          "Their going to the park.",
          "They're going to the park.",
          "Thier going to the park."
        ],
        answerIndex: 2,
        topic: "grammar",
        difficulty: "medium",
        targetSeconds: 30
      },
      {
        id: "e11-2",
        prompt: "What is the synonym of 'happy'?",
        choices: ["Sad", "Joyful", "Angry", "Tired"],
        answerIndex: 1,
        topic: "vocabulary",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    // Repeat for ages 12–15
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
        prompt: "Which part of the plant makes food?",
        choices: ["Root", "Leaf", "Stem", "Flower"],
        answerIndex: 1,
        topic: "plants",
        difficulty: "easy",
        targetSeconds: 20
      }
    ],
    11: [
      {
        id: "s11-1",
        prompt: "What gas do humans exhale?",
        choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answerIndex: 1,
        topic: "respiration",
        difficulty: "easy",
        targetSeconds: 20
      },
      {
        id: "s11-2",
        prompt: "What type of energy is stored in food?",
        choices: ["Kinetic", "Potential", "Chemical", "Thermal"],
        answerIndex: 2,
        topic: "energy",
        difficulty: "medium",
        targetSeconds: 25
      }
    ],
    // Repeat for ages 12–15
  }
};

export default questions;
