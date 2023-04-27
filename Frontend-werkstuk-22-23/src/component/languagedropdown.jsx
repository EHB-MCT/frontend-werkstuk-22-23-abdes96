import { useState } from "react";

function Dropdownlanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageSelection = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <select value={selectedLanguage} onChange={handleLanguageSelection}>
      <option value="English">ENG</option>
      <option value="Spanish">NL</option>
      <option value="French">FR</option>
    </select>
  );
}

export default Dropdownlanguage;
