import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "../../ReusableFormComponent/FormInterface";

export const productRegisterInitialValues = {
  name: "",
  lastName: "",
  email: "",
  productCode: "",
};

//? Validations Inpusts form
export const productRegisterSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Not valid Email address"
    )
    .defined("Required!"),
  productCode: yup
    .string()
    .min(8, "Too short!")
    .max(40, "Too long!")
    .defined("Required!"),
});

//? Data constructor form
export const productRegisterDataConstructor: IDataConstructor[] = [
  {
    LabelText: "Name",
    FieldType: "text",
    FieldName: "name",
    FieldPH: "John",
  },
  {
    LabelText: "Last Name",
    FieldType: "text",
    FieldName: "lastName",
    FieldPH: "Smith",
  },
  {
    LabelText: "Email",
    FieldType: "email",
    FieldName: "email",
    FieldPH: "johnsmith@example.com",
  },
  {
    LabelText: "Amazon Order ID",
    FieldType: "text",
    FieldName: "productCode",
    FieldPH: "#***-*******-********",
  },
];

export const buttonProductRegisterForm: IButtonForm[] = [
  { name: "Register", type: "submit" },
];
