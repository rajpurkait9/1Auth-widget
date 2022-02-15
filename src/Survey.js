const Survey = {
  questions: [
    {
      type: "DROPDOWN",
      text: "Choose your favourite fruit.",
      options: ["Banana", "Mango", "Grape", "Orange"],
      required: true
    },
    {
      type: "RATING",
      text: "How many stars you want to give us?",
      options: [],
      required: false
    },
    {
      type: "SCALE",
      text: "On a scale of 1-10, how much you like our services?",
      options: [],
      required: true
    },
    {
      type: "MULTIPLE_CHOICE",
      text: "Choose your favourite Colors.",
      options: ["Yellow", "Black", "Red", "Blue"],
      required: false
    },
  ]
}

export default Survey
