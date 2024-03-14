import { Add, Remove, Send } from "@mui/icons-material";
import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

const PracticeDynamicInput = () => {
  const [inputField, setInputField] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleChange = (e: ChangeEvent, index) => {
    const values = [...inputField];
    values[index][e.target.name] = e.target.value;
    setInputField(values);
  };
  const handleRemove = (index) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField(values);
  };
  const handleAdd = () => {
    setInputField([...inputField, { firstName: "", lastName: "" }]);
  };
  return (
    <Container>
      <h2>Add Fields</h2>
      <form onSubmit={handleSubmit}>
        {inputField.map((field, index) => {
          return (
            <>
              <div>
                <TextField
                  sx={{ marginRight: "20px" }}
                  size="small"
                  name="firstName"
                  label="firstName"
                  value={field.firstName}
                  onChange={(e) => handleChange(e, index)}
                />
                <TextField
                  sx={{ marginRight: "20px" }}
                  size="small"
                  name="lastName"
                  label="lastName"
                  value={field.lastName}
                  onChange={(e) => handleChange(e, index)}
                />
                <IconButton onClick={() => handleRemove(index)}>
                  <Remove />
                </IconButton>
                <IconButton onClick={handleAdd}>
                  <Add />
                </IconButton>
              </div>
            </>
          );
        })}
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ marginTop: "20px" }}
          endIcon={<Send />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default PracticeDynamicInput;
