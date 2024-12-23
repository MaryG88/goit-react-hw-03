import s from "./ContactForm.module.css";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ]+$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .matches(
      onlyLetters,
      "This field can content only letters"
    )
    .required("Required"),
  number: Yup.number()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required")
    .positive()
    .integer(),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form>
        <div>
          <label
            className={s.label}
            htmlFor={nameFieldId}
          >
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={s.error}
            name="name"
            component="span"
          />
        </div>
        <div>
          <label
            className={s.label}
            htmlFor={numberFieldId}
          >
            Number
          </label>
          <Field
            className={s.input}
            type="number"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={s.error}
            name="number"
            component="span"
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
