import { useState } from "react";

function ContactForm({ number, onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone: number });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
      <h3>Save Contact</h3>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />

      <p>📞 {number}</p>

      <button
        type="submit"
        style={{
          padding: "10px",
          width: "100%",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginBottom: "8px"
        }}
      >
        Save
      </button>

      {/* 🔥 Cancel Button */}
      <button
        type="button"
        onClick={onCancel}
        style={{
          padding: "10px",
          width: "100%",
          background: "gray",
          color: "white",
          border: "none",
          borderRadius: "8px"
        }}
      >
        Cancel
      </button>
    </form>
  );
}

export default ContactForm;