// import { Form } from 'formik';
import style from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={style.formContainer}>
      <div className={style.inputContainer}>
        <label htmlFor=""> Name</label>

        <input type="text" />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor=""> Number</label>

        <input type="text" />
      </div>

      <button>Add contact</button>
    </form>
  );
};
export default ContactForm;
