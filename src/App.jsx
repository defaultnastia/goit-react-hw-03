import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import contacts from "./data/contacts.json";

const App = () => (
  <>
    <h1>Phone Book</h1>
    <ContactForm />
    <SearchBox />
    <ContactList contacts={contacts} />
  </>
);

export default App;
``;
