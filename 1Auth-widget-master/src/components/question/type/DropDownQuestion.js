import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"

const DropDownQuestion = ({ options, selected, setSelected }) => (
  <FormControl>
    <RadioGroup
      value={selected ?? ""}
      onChange={(e) => { setSelected(e.target.value) }}
    >
      {options.map((option, index) => <FormControlLabel key={index} value={index} control={<Radio />} label={option} />)}
    </RadioGroup>
  </FormControl>
)

export default DropDownQuestion
