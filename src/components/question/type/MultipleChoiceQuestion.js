import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const MultipleChoiceQuestion = ({ options, selected, setSelected }) => {
  const handleSubmit = (checked, index) => {
    const answers = selected?.split('') ?? new Array(options.length).fill('0')
    answers[index] = checked ? '1' : '0'

    setSelected(answers.join(''))
  }

  return (
    <FormGroup>
      {options.map((option, index) => <FormControlLabel
        key={index}
        control={
          <Checkbox
            checked={selected?.[index] === '1'}
            onChange={(e) => handleSubmit(e.target.checked, index)}
          />
        }
        label={option}
      />
      )}
    </FormGroup>
  )
}

export default MultipleChoiceQuestion
