import s from "./ContactForm.module.css";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";

// const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ]+$/;
const onlyNumbers = /^\d{3}-\d{2}-\d{2}$/;

const ContactForm = ({ onSubmit }) => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      // .matches(
      //   onlyLetters,
      //   "This field can content only letters"
      // )
      .required("Name is Required"),
    number: Yup.string()

      .matches(
        onlyNumbers,
        "Phone number must be in format xxx-xx-xx"
      )
      .required("Phone number is required"),
  });

  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={s.form}>
          <div>
            <label className={s.label}>
              Name
            </label>
            <Field
              className={s.input}
              name="name"
              placeholder="John Doe"
            />
            <ErrorMessage
              className={s.error}
              name="name"
              component="span"
            />
          </div>
          <div>
            <label className={s.label}>
              Number
            </label>
            <Field
              className={s.input}
              name="number"
              placeholder="123-45-67"
            />
            <ErrorMessage
              className={s.error}
              name="number"
              component="span"
            />
          </div>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
