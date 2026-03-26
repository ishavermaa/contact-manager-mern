function ContactList({ contacts, onDelete }) {
  return (
    <div style={{ marginTop: "15px" }}>
      {contacts.map(c => (
        <div
          key={c._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            textAlign: "left"
          }}
        >
          <p><strong>{c.name}</strong></p>
          <p>{c.phone}</p>

          <button
            onClick={() => onDelete(c._id)}
            style={{
              padding: "5px 10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;