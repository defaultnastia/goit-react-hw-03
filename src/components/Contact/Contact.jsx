import { faker } from "@faker-js/faker";
import css from "./Contact.module.css";
import { Tooltip } from "react-tooltip";

const imageLink = () => faker.image.urlPicsumPhotos({ height: 80, width: 80 });

const Contact = ({ contact }) => {
  return (
    <div className={css.contactBox}>
      <img src={imageLink()} alt="avatar" />
      <div className={css.contactInfo}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        {/* <button>Add to Call</button> */}
      </div>
      <button data-tooltip-id="delete">❌</button>
      <Tooltip
        id="delete"
        content="Delete contact"
        variant="error"
        place="bottom"
      />
    </div>
  );
};

export default Contact;
