import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Selections = ({ selections }) => {
  return (
    <Box
      sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" } }}
      width="25ch"
      margin={2}
    >
      <FormControl fullWidth>
        <InputLabel id="processor-label">Processor</InputLabel>
        <Select labelId="processor-label" value={selections[0]}>
          <MenuItem value="Intel i9">Intel i9</MenuItem>
          <MenuItem value="AMD Ryzen 7">AMD Ryzen 7</MenuItem>
        </Select>
      </FormControl>
      <InputLabel label="Motherboard" value={selections[1]} fullWidth />
      <TextField label="RAM" value={selections[2]} fullWidth />
      <TextField label="Storage" value={selections[3]} fullWidth />
      <TextField label="Graphics Card" value={selections[4]} fullWidth />
      <TextField label="Case" value={selections[5]} fullWidth />
    </Box>
  );
};

export default Selections;
