import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
const FILE_SIZE = 160 * 1024;

const YupValidation = {
  name: yup
    .string()
    .min(2, "Too Short !")
    .max(30, "Too Long !")
    .required("Required !"),

  email: yup.string().email("Enter a Vaid Email").required("Email is Required"),

  select: yup.string().required("Select a Option"),

  password: yup
    .string()
    .min(8, "Password must Contained 8 Character")
    .max(50, "Too long")
    .required("Enter Your Password"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not matched")
    .required("Confirm Password is Required"),

  website: yup.string().url().required("Website is Required"),

  file: yup
    .mixed()
    .required("File is Required")
    .test(
      "fileSize",
      "File is Too Lerge",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
};

export default YupValidation;
