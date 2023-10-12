import { useState } from "react";
import list from "../QuestionsIcons/list.svg";
import oneA from "../QuestionsIcons/oneA.svg";
import severalA from "../QuestionsIcons/severalA.svg";

const DropBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    setIsOpen(false);
  };

  const selectValues = [
    {
      id: 1,
      label: "Text",
      icon: <img src={list} alt='text' />,
    },
    {
      id: 2,
      label: "One from the list",
      icon: <img src={oneA} alt='one' />,
    },
    {
      id: 3,
      label: "Several from the list",
      icon: <img src={severalA} alt='multy' />,
    },
  ];

  return (
    <div>
      {isOpen && (
        <div className='optionsBox'>
          <span className='lineOptions' />
          <div className='dropdownOptions'>
            {selectValues.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOptionClick(item)}
                className='dropdownOption'
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropBox;
