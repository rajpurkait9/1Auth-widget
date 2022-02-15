import DropDownQuestion from '../question/type/DropDownQuestion'
import MultipleChoiceQuestion from '../question/type/MultipleChoiceQuestion'
import RatingQuestion from '../question/type/RatingQuestion'
import SliderQuestion from '../question/type/SliderQuestion'

const AnswerContent = ({ type, options, selected, setSelected }) => {
  if (type === "RATING") {
    return <RatingQuestion
      selected={selected}
      setSelected={setSelected}
    />
  }

  if (type === "DROPDOWN") {
    return <DropDownQuestion
      options={options}
      selected={selected}
      setSelected={setSelected}
    />
  }

  if (type === "SCALE") {
    return <SliderQuestion
      selected={selected}
      setSelected={setSelected}
    />
  }

  if (type === "MULTIPLE_CHOICE") {
    return <MultipleChoiceQuestion
      options={options}
      selected={selected}
      setSelected={setSelected}
    />
  }

  return null
}

export default AnswerContent