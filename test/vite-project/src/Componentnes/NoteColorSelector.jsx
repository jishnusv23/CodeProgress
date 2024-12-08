import React, { useState } from "react";

// Array of color options
const COLOR_OPTIONS = [
  "#FF6B6B", // Red
  "#4ECDC4", // Teal
  "#45B7D1", // Blue
  "#FDCB6E", // Yellow
  "#6C5CE7", // Purple
  "#A8E6CF", // Mint Green
  "#FF8ED4", // Pink
];

const NoteColorSelector = ({ initialColor, onColorChange }) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const handleColorButtonClick = () => {
    setIsColorPickerOpen(true);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorChange(color);
    setIsColorPickerOpen(false);
  };

  const handleCancel = () => {
    setIsColorPickerOpen(false);
  };

  return (
    <div className="relative">
      {/* Color Selection Button */}
      <button
        onClick={handleColorButtonClick}
        className="w-8 h-8 rounded-full border"
        style={{ backgroundColor: selectedColor }}
      >
        🎨
      </button>

      {/* Color Picker Popup */}
      {isColorPickerOpen && (
        <div className="absolute z-10 p-4 bg-white border rounded-lg shadow-lg">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {COLOR_OPTIONS.map((color) => (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button
            onClick={handleCancel}
            className="w-full bg-gray-200 text-black rounded p-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteColorSelector;
