import { Button } from "@mui/material"

const QuestionsController = ({ currentQuestionIndex, required, answered, numOfQuestions, onNext, onPrevious, onSubmit }) => {
  return (
    <>
      {
        currentQuestionIndex > 0 ?
          <Button
            variant="outlined"
            onClick={onPrevious}
          >
            Previous
          </Button> :
          null
      }
      {
        currentQuestionIndex === numOfQuestions - 1 ?
          <Button
            variant="contained"
            onClick={onSubmit}
          >
            Submit
          </Button> :
          <Button
            variant="contained"
            onClick={onNext}
          >
            {required || answered ? "Next" : "Skip"}
          </Button>
      }
    </>
  )
}

export default QuestionsController