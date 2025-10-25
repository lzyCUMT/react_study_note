import { useState } from "react";
import DropDown from "../components/Dropdown";
function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <a href="/dashboard">Dashboard</a>
      <DropDown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropDownPage;
