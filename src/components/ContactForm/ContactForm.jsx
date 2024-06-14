import { Field, Form, Formik } from "formik";
import { useId } from "react";

const initialValues = {
  name: "",
  phone: "",
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" id={nameFieldId} />

        <label htmlFor={phoneFieldId}>Phone</label>
        <Field name="phone" id={phoneFieldId} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
