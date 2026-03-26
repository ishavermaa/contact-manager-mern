import { useState } from "react";

function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    setSearch(val);
  };

  return (
    <input
      value={value}
      placeholder="🔍 Search contacts..."
      onChange={handleChange}
      style={{ width: "100%", padding: "10px", marginTop: "15px" }}
    />
  );
}

export default SearchBar;