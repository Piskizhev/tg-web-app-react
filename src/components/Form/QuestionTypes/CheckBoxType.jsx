import {React, useState} from 'react'
import cross from "../QuestionsIcons/cross.svg"

const CheckBoxType = () =>  {

  const [textInput, setTextInput] = useState("");
  const [variantsList, setVariantsList] = useState([
    { label: "Variant 1", checked: false },
  ]);
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };
  const handleCheckboxChange = (index) => {
    const updatedVariantsList = [...variantsList];
    updatedVariantsList[index] = {
      ...variantsList[index],
      checked: !variantsList[index].checked,
    };
    setVariantsList(updatedVariantsList);
  };

  const handleAddVariant = () => {
    if (textInput.trim() !== "") {
      const newVariant = { label: textInput, checked: false };
      setVariantsList([...variantsList, newVariant]);
      setTextInput("");
    }
  };

  const handleDeleteVariant = (index) => {
    if (variantsList.length > 1) {
      const updatedVariantsList = [...variantsList];
      updatedVariantsList.splice(index, 1); // Remove the variant at the specified index
      setVariantsList(updatedVariantsList);
    }
  };

  return (
    <div className='answerTextTitle'>
      <span>Answer Preview</span>
      <div className='listOptions'>
        {variantsList.map((variant, index) => (
          <div key={index} className='listItem'>
            <input
              type='checkbox'
              checked={variant.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <input
              type='text'
              value={variant.label}
              onChange={(e) => {
                const updatedVariantsList = [...variantsList];
                updatedVariantsList[index] = {
                  ...variant,
                  label: e.target.value,
                };
                setVariantsList(updatedVariantsList);
              }}
            />
            {variantsList.length > 1 && (
              <img
                src={cross}
                alt='Delete'
                onClick={() => handleDeleteVariant(index)}
              />
            )}
          </div>
        ))}
        <div className='listItem' style={{ border: "none" }}>
          <input
            type='checkbox'
            name='variant'
            checked={false}
            disabled={true}
          />
          <input
            type='text'
            value={textInput}
            onChange={handleTextInputChange}
            onBlur={handleAddVariant}
            placeholder='Add new variant'
            className='editable-input'
          />
        </div>
      </div>
    </div>
  );
}

export default CheckBoxType