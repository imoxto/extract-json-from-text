const { jsonFromText } = require("../index.js");

const hugeJson = {
  array: [
    {
      question:
        "What is the process of water returning to the atmosphere by evaporation and transpiration called?",
      options: ["Precipitation", "Condensation", "Runoff", "Sublimation"],
      answer: "Transpiration",
    },
    {
      question: "What is the process of water flowing across land called?",
      options: ["Runoff", "Infiltration", "Groundwater", "Transpiration"],
      answer: "Runoff",
    },
    {
      question:
        "What is the process of liquid water turning into water vapor called?",
      options: [
        "Precipitation",
        "Condensation",
        "Transpiration",
        "Sublimation",
      ],
      answer: "Evaporation",
    },
  ],
  object: {
    fib: [
      {
        statement:
          "______ water flows across land (runoff), into the ground (infiltration and percolation), and through the ground (groundwater).",
        answers: ["Liquid"],
      },
      {
        statement:
          "Water in different phases moves through the atmosphere (transportation). Liquid water evaporates into _______.",
        answers: ["water vapor"],
      },
      {
        statement:
          "Solid ice and snow can turn directly into _______. The opposite can also take place when water vapor becomes solid (deposition).",
        answers: ["gas"],
      },
    ],
    mcq: [
      {
        question:
          "What is the process of water returning to the atmosphere by evaporation and transpiration called?",
        options: ["Precipitation", "Condensation", "Runoff", "Sublimation"],
        answer: "Transpiration",
      },
      {
        question: "What is the process of water flowing across land called?",
        options: ["Runoff", "Infiltration", "Groundwater", "Transpiration"],
        answer: "Runoff",
      },
      {
        question:
          "What is the process of liquid water turning into water vapor called?",
        options: [
          "Precipitation",
          "Condensation",
          "Transpiration",
          "Sublimation",
        ],
        answer: "Evaporation",
      },
    ],
    snippet: [
      {
        question: "What is the water cycle?",
        answer:
          "The cycle of processes by which water circulates between the earth's oceans, atmosphere, and land.",
      },
      {
        question: "What is the process of water moving into plants called?",
        answer: "Plant uptake",
      },
      {
        question: "What is the process of water turning into solid called?",
        answer: "Deposition",
      },
    ],
    tf: {
      true: [
        "Water in different phases moves through the atmosphere.",
        "The water cycle is a complex system that includes many different processes.",
      ],
      false: [
        "Groundwater only moves into plants through plant uptake.",
        "Sublimation is the process of water vapor becoming liquid.",
      ],
    },
  },
};

const testData = hugeJson.object;
const dataStr = JSON.stringify(testData);

const str = `Lorem ipsum dolor sit amet, ${dataStr} consectetur adipiscing elit.`;
const jsonResults = jsonFromText(str);
console.log(jsonResults);
