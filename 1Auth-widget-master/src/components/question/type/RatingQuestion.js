import Rating from '@mui/material/Rating';

const RatingQuestion = ({ selected, setSelected }) => (
  <Rating
    name="no-value"
    value={selected ?? 0}
    onChange={(_, newValue) => {
      newValue && setSelected(newValue)
    }}
  />
)

export default RatingQuestion
