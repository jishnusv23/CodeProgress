import React, { useState } from "react";
import { flushSync } from "react-dom";

const NestedSelection = () => {
  const [selectedCatagory, setSelectedCatagory] = useState("");
  const [items, setItems] = useState<string[] | null>(null);
  const [nest, setNest] = useState(false);

  const data = [
    {
      category: "Fruits",
      items: ["Apple", "Banana", "Orange", "Grapes"],
    },
    {
      category: "Vegetables",
      items: ["Carrot", "Broccoli", "Lettuce", "Tomato"],
    },
  ];

  const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const catagory = e.target.value;

    flushSync(() => {
      setSelectedCatagory(catagory);
    });

    const catagoryData = data.find((x) => x.category === catagory);

    flushSync(() => {
      setItems(catagoryData ? catagoryData.items : null);
    });

    setNest(true);
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold">Nested DropDown</h1>
      
      <select
        name="category"
        id="category"
        value={selectedCatagory}
        onChange={handleChanges}
      >
        <option value="">Select category</option>
        {data.map((x, index) => (
          <option value={x.category} key={index}>
            {x.category}
          </option>
        ))}
      </select>

      {nest && (
        <select disabled={!selectedCatagory}>
          <option value="">Select</option>
          {items?.map((x, index) => (
            <option value={x} key={index}>
              {x}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default NestedSelection;
