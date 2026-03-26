import { useEffect, useState } from "react";
import DialPad from "../components/DialPad";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { getContacts, createContact, deleteContact } from "../services/api";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [number, setNumber] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Fetch contacts
  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Open form with number
  const handleSave = (num) => {
    if (!num) return;
    setNumber(num);
    setShowForm(true);
  };

  // Save contact
  const handleSubmit = async (data) => {
    await createContact(data);
    setShowForm(false);   // go back to dial pad
    setNumber("");        // clear input
    fetchContacts();
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  // Search handler
  const handleSearch = async (value) => {
    const res = await getContacts(value);
    setContacts(res.data);
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "auto",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      <h1>📱 Contact Manager</h1>

      {/* ✅ SHOW ONLY ONE COMPONENT */}
      {!showForm && <DialPad onSave={handleSave} />}

      {showForm && (
        <ContactForm
          number={number}
          onSubmit={handleSubmit}
          onCancel={() => setShowForm(false)} // 🔥 extra UX
        />
      )}

      <SearchBar setSearch={handleSearch} />

      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
}

export default Home;