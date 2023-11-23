// CustomSelect.js
import React, { useState, useEffect } from 'react';

function CustomSelect({ listname, options, onSelectedChange, initialSelectedValues }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    // Set initial selected values when component mounts
    if (initialSelectedValues) {
      setSelectedValues(initialSelectedValues);
    }
  }, [initialSelectedValues]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleApply = () => {
    onSelectedChange(selectedValues);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-between w-full p-4 border rounded-md shadow-sm z-50"
        id="dropdown-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <span className="font-bold text-lg">{listname}</span>
        <span className={`ml-2 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
            {options.map((option) => (
              <div
                key={option}
                className={`block px-4 py-2 text-sm leading-5 text-gray-700 cursor-pointer hover:bg-gray-100 ${selectedValues.includes(option) ? 'bg-gray-300' : ''}`}
                onClick={() => selectOption(option)}
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
          <button
            className="apply-button w-full p-2 text-white bg-[#19514F] rounded-md"
            onClick={handleApply}
            disabled={selectedValues.length === 0}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
