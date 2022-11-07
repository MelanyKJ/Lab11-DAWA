import imagen1 from '../../assets/im1.png';
import {
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Typography,
  Select,
} from "@mui/material";

const DropDown = ({ type, handleChange, types }) => {
  return (
    <Box mt={5}>
      <img className="img1" src={imagen1} width={120} height={120}></img>
      <h1 className="titlePrin">
        Tipo de pokemones
      </h1> 
      <FormControl fullWidth>
        <InputLabel>Tipos</InputLabel>
        <Select value={type} label="Tipos" onChange={handleChange}>
          {types.length > 0 &&
            types.map(({ url, name }) => (
              <MenuItem value={url}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
