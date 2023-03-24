import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Selections = () => {
  return (
    <FormControl fullWidth>
      <InputLabel>Processor</InputLabel>
      <Select>
        <MenuItem value="Intel i9">Intel i9</MenuItem>
        <MenuItem value="AMD Ryzen 7">AMD Ryzen 7</MenuItem>
      </Select>
      <TextField label="Motherboard" fullWidth />
      <TextField label="RAM" fullWidth />
      <TextField label="Storage" fullWidth />
      <TextField label="Graphics Card" fullWidth />
      <TextField label="Case" fullWidth />
    </FormControl>
  );
};

export default Selections;
