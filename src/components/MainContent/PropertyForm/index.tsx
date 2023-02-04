import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";

interface IPropertForm {
  onDataChange: (name: string, val: string) => void;
}
const PropertyForm: FC<IPropertForm> = ({ onDataChange }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    onDataChange(name, value);
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h6" fontWeight="bold">
        Property details
      </Typography>
      <TextField
        name="name"
        id="property_title"
        label="Property title"
        variant="standard"
        onChange={handleChange}
      />
      <TextField
        name="price"
        id="price"
        label="Price"
        variant="standard"
        type="number"
        onChange={handleChange}
      />
      <TextField
        name="plotSize"
        id="plot_size"
        label="Plot size"
        variant="standard"
        onChange={handleChange}
      />
      <TextField
        name="rooms"
        id="rooms"
        label="Rooms"
        variant="standard"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PropertyForm;
