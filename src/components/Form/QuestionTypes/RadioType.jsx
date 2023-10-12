import {React, useState} from 'react'
import cross from "../QuestionsIcons/cross.svg"
import "./QuestionTypes.css"

const RadioType = () => {
  const [textInputList, setTextInputList] = useState("");
  const [optionsList, setOptionsList] = useState([
    { label: "Variant 1", selected: false },
  ]);

  const handleTextInputChangeList = (event) => {
    setTextInputList(event.target.value);
  };

  const handleInputBlur = () => {
    if (textInputList.trim() !== "") {
      const newOption = { label: textInputList, selected: false };
      setOptionsList([...optionsList, newOption]);
      setTextInputList("");
    }
  };

  const handleRadioChange = (index) => {
    const updatedOptionsList = optionsList.map((option, i) => {
      return { ...option, selected: i === index };
    });
    setOptionsList(updatedOptionsList);
  };

  const handleDeleteOption = (index) => {
    const updatedOptionsList = [...optionsList];
    updatedOptionsList.splice(index, 1);
    setOptionsList(updatedOptionsList);
  };

  return (
    <div className='answerTextTitle'>
      <span>Answer Preview</span>
      <div className='listOptions'>
        <div>
          {optionsList.map((option, index) => (
            <div className='listItem' key={index}>
              <>
                <input
                  type='radio'
                  name='variant'
                  checked={option.selected}
                  onChange={() => handleRadioChange(index)}
                />
              </>
              <>
                <input
                  type='text'
                  value={option.label}
                  onChange={(e) => {
                    const updatedOptionsList = [...optionsList];
                    updatedOptionsList[index] = {
                      ...option,
                      label: e.target.value,
                    };
                    setOptionsList(updatedOptionsList);
                  }}
                />
              </>
              {optionsList.length > 1 && (
                <img
                  src={cross}
                  alt='delete'
                  onClick={() => handleDeleteOption(index)}
                />
              )}
            </div>
          ))}
          <div className='listItem' style={{ border: "none" }}>
            <input
              type='radio'
              name='variant'
              checked={false}
              disabled={true}
            />
            <input
              type='text'
              value={textInputList}
              onChange={handleTextInputChangeList}
              onBlur={handleInputBlur}
              placeholder='Add new option'
            />
          </div>
        </div>
      </div>
    </div>
  );

}

export default RadioType