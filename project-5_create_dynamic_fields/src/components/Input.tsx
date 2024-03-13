/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add, Remove, Send } from "@mui/icons-material";
import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import { useState } from "react";

const Input = () => {
  const [inputField, setInputField] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputField);
  };
  const handleChange = (e: React.ChangeEvent, index: number) => {
    const values = [...inputField];
    values[index][e.target.name] = e.target.value;
    setInputField(values);
  };
  const addNewField = () => {
    console.log("limon");
    const newArray = [...inputField, { firstName: "", lastName: "" }];
    console.log(newArray);
    setInputField(newArray);
  };
  const removeNewField = (index: number) => {
    const newArray = [...inputField];
    newArray.splice(index, 1);
    setInputField(newArray);
  };
  return (
    <div>
      <Container>
        <h2>Add Fields</h2>
        <form onSubmit={handleSubmit}>
          {inputField.map((field, index) => {
            return (
              <Box
                key={index}
                display={"flex"}
                alignItems={"center"}
                marginTop={"20px"}
              >
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
                <div>
                  {inputField.length > 1 && (
                    <IconButton
                      sx={{ marginRight: "10px" }}
                      onClick={() => removeNewField(index)}
                    >
                      <Remove />
                    </IconButton>
                  )}

                  <IconButton onClick={addNewField}>
                    <Add />
                  </IconButton>
                </div>
              </Box>
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
    </div>
  );
};

export default Input;
