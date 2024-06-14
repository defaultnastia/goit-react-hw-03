import { Field, Form, Formik } from "formik";
import { useId } from "react";
import Input from "react-input-auto-format";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  phone: "",
};

const FormattedInput = (props) => (
  <Input
    className="my-custom-input"
    type="text"
    {...props}
    format="### - ## - ##"
  />
);

const handleSubmit = (values, actions) => {
  console.log(values);

  actions.resetForm();
};

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.addContact}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" id={nameFieldId} />

        <label htmlFor={phoneFieldId}>Phone</label>
        <Field name="phone" as={FormattedInput} id={phoneFieldId} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
