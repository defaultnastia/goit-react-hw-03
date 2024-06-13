import { faker } from "@faker-js/faker";

const imageLink = () => faker.image.urlPicsumPhotos({ height: 80, width: 80 });

const Contact = ({ contact }) => {
  return (
    <div>
      <img src={imageLink()} alt="avatar" />
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button>❌</button>
    </div>
  );
};

export default Contact;
