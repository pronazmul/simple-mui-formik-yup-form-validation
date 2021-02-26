import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const BasicFormValidation = () => {
  const ValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short !")
      .max(30, "Too Long !")
      .required("Required !"),

    email: yup
      .string()
      .email("Enter a Vaid Email")
      .required("Email is Required"),
    password: yup
      .string()
      .min(8, "Password must Contained 8 Character")
      .max(50, "Too long")
      .required("Enter Your Password")
  });

  const initialValue = {
    name: "",
    email: "",
    password: ""
  };
  const handleSubmit = (value, props) => {
    console.log(value);
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Basic Formik Form Validation</Typography>
            <Formik
              initialValues={initialValue}
              ValidationSchema={ValidationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
                console.log(props);
                return (
                  <Form>
                    {/* First Way */}
                    <TextField
                      label="Name"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      value={name}
                      onChange={props.handleChange}
                    />
                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="Email"
                      type="Email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="email" />}
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                    />

                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};

export default BasicFormValidation;
