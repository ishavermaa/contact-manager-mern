import { useState } from "react";

function DialPad({ onSave }) {
  const [number, setNumber] = useState("");

  const handleClick = (digit) => {
    setNumber(prev => prev + digit);
  };

  // 🔙 Remove last digit
  const handleBackspace = () => {
    setNumber(prev => prev.slice(0, -1));
  };

  // ❌ Clear all
  const handleClear = () => {
    setNumber("");
  };

  return (
    <div>
      <h2>Dial</h2>

      <input
        value={number}
        readOnly
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "18px",
          marginBottom: "10px",
          textAlign: "center"
        }}
      />

      {/* Dial buttons */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px"
      }}>
        {[1,2,3,4,5,6,7,8,9,0].map(n => (
          <button
            key={n}
            onClick={() => handleClick(n)}
            style={{
              padding: "15px",
              fontSize: "18px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button
          onClick={handleBackspace}
          style={{
            flex: 1,
            padding: "10px",
            background: "#f39c12",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          ⌫ Backspace
        </button>

        <button
          onClick={handleClear}
          style={{
            flex: 1,
            padding: "10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Clear
        </button>
      </div>

      {/* Save */}
      <button
        onClick={() => onSave(number)}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px"
        }}
      >
        Save Contact
      </button>
    </div>
  );
}

export default DialPad;