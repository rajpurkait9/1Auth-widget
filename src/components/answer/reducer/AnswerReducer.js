
const answerReducer = (state, { type, payload }) => {
  if (type === "answer") {
    const answers = [...state.answers]

    answers[payload.questionIndex] = payload.optionIndex

    return { ...state, answers, error: "" }
  }

  if (type === "skip") {
    const answers = [...state.answers]

    answers[payload.questionIndex] = null

    return { ...state, answers, error: "" }
  }

  if (type === "next") {
    if (state.questions[state.currentQuestionIndex].required && state.answers[state.currentQuestionIndex] === undefined) {
      return { ...state, error: "Please choose an answer!" }
    }

    return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1, error: "" }
  }

  if (type === "previous") {
    return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1, error: "" }
  }

  if (type === "submit") {
    const result = state.answers.map((answer) => (answer ? answer.toString() : null))

    return { ...state, error: "", result: JSON.stringify(result) }
  }

  return state
}

export default answerReducer