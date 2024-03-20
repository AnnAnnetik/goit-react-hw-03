import style from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={style.formContainer}>
        <div className={style.inputContainer}>
          <label htmlFor={nameFieldId}> Name</label>
          <Field type="text" name="name" id={nameFieldId} />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={numberFieldId}> Number</label>
          <Field type="text" name="number" id={numberFieldId} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
