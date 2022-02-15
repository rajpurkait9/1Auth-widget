import { useReducer } from "react"
import AnswerContent from "./components/answer/AnswerContent"
import answerReducer from "./components/answer/reducer/AnswerReducer"
import QuestionsController from "./components/question/controller/QuestionsController"
import QuestionHeading from "./components/question/heading/QuestionHeading"
import Survey from './Survey'

function App() {
  const [state, dispatch] = useReducer(answerReducer, {
    answers: [],
    questions: Survey.questions,
    currentQuestionIndex: 0,
    error: "",
    result: ""
  })

  if (state.result) {
    return (
      <>
        <h1>Thanks for Completing the survey.</h1>
        <h2>{state.result}</h2>
      </>
    )
  }

  return (
    <>
      <QuestionHeading text={state.questions[state.currentQuestionIndex].text} />

      <AnswerContent
        type={state.questions[state.currentQuestionIndex].type}
        options={state.questions[state.currentQuestionIndex].options}
        selected={state.answers[state.currentQuestionIndex]}
        setSelected={(optionIndex) => dispatch({ type: "answer", payload: { questionIndex: state.currentQuestionIndex, optionIndex } })}
      />

      {state.error ? <h5>{state.error}</h5> : null}

      <QuestionsController
        currentQuestionIndex={state.currentQuestionIndex}
        required={state.questions[state.currentQuestionIndex].required}
        answered={state.answers[state.currentQuestionIndex] !== undefined}
        numOfQuestions={state.questions.length}
        onNext={() => dispatch({ type: "next" })}
        onPrevious={() => dispatch({ type: "previous" })}
        onSubmit={() => dispatch({ type: "submit" })}
      />
    </>
  )
}


export default App;
