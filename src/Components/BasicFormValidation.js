import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import YupValidation from "./YupValidation";

const BasicFormValidation = () => {
  const initialValue = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    image: ""
  };

  // const [imgError, setImgError] = useState();
  // const [img, setImg] = useState(null);

  // const manageImage = (event) => {
  //   const image = event.target.files[0];
  //   const { type, size } = image;
  //   const supportedSize = 1048576;
  //   const supportedType = ["image/png", "image/gif"];
  //   if (size > supportedSize) {
  //     setImgError("Image size more than 1 MB");
  //   } else if (!supportedType.includes(type)) {
  //     setImgError("Invalid Image Format");
  //   } else {
  //     setImg(image);
  //   }
  // };

  const handleSubmit = (values, props) => {
    // // For Custom File Submit
    // const newData = { ...values };
    // newData.image = img;
    // alert(JSON.stringify(newData));

    // alert(JSON.stringify(values));

    console.log(values);

    props.resetForm();
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
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
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
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="name" />}
                      error={props.errors.name && props.touched.name}
                      required
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
                      error={props.errors.email && props.touched.email}
                    />

                    <Field
                      as={TextField}
                      label="Phone Number"
                      name="phoneNumber"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="phoneNumber" />}
                      error={
                        props.errors.phoneNumber && props.touched.phoneNumber
                      }
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
                      error={props.errors.password && props.touched.password}
                    />

                    <Field
                      as={TextField}
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="confirmPassword" />}
                      error={
                        props.errors.confirmPassword &&
                        props.touched.confirmPassword
                      }
                    />

                    {/* First Way */}
                    <TextField
                      name="image"
                      type="file"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      onChange={(event) =>
                        props.setFieldValue("image", event.target.files[0])
                      }
                      onBlur={props.handleBlur}
                      // helperText={<ErrorMessage name="image" />}
                      // error={props.errors.name && props.touched.name}
                      // required
                    />

                    {/* <TextField
                      type="file"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      onChange={manageImage}
                      error={imgError && imgError}
                      helperText={imgError && <ErrorMessage />}
                      required
                    /> */}

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
