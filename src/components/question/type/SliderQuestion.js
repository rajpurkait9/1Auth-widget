import { Slider } from '@mui/material';

const SliderQuestion = ({ selected, setSelected }) => (
  <Slider
    value={selected ?? 0}
    step={1}
    marks
    max={10}
    onChange={(e, newValue) => newValue && setSelected(newValue)}
  />
)

export default SliderQuestion
