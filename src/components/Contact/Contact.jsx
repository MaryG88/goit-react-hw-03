import s from "./Contact.module.css";
import { RiUser6Line } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";

const Contact = ({
  id,
  name,
  number,
  onDeleteContact,
}) => (
  <li className={s.contactItem}>
    <div className={s.contactContainer}>
      <p className={s.contactData}>
        <RiUser6Line
          className={s.contactIcon}
          size="16"
        />
        {name}
      </p>
      <p className={s.contactData}>
        <MdOutlinePhone
          className={s.contactIcon}
          size="16"
        />
        {number}
      </p>
    </div>
    <button
      onClick={() => onDeleteContact(id)}
      className={s.deleteBtn}
    >
      Delete
    </button>
  </li>
);

export default Contact;
