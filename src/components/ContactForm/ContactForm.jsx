import { Field, Formik } from "formik";

const values = {
  name: "",
  phone: "",
};

const ContactForm = () => {
  return (
    <Formik>
      <Field name="name" />
    </Formik>
  );
};

export default ContactForm;
