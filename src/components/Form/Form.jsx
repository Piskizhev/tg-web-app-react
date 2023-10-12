import {React,useState} from 'react'
import "./Form.css"
import QuestionMain from "./MainQuestion/MainQuestion";
import TextType from './QuestionTypes/TextType';
import RadioType from './QuestionTypes/RadioType';
import CheckBoxType from './QuestionTypes/CheckBoxType';
import DropBox from "./QuestionTypes/DropBox";
import list from "./QuestionsIcons/list.svg"
import oneA from "./QuestionsIcons/oneA.svg"
import severalA from "./QuestionsIcons/severalA.svg"

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
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
    <div className='answerTextStyle'>
      <QuestionMain />
    <div className='answerTypeTitle'>
      <p>Answer Type</p>
    </div>

    <div className='dropdown'>
      <div className='selectedOptions' onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <div className='selectedOption'>
            {selectedOption.icon}
            <span>{selectedOption.label}</span>
          </div>
        ) : (
          <span className='selectedOption'>Select an option</span>
        )}
      </div>
      {selectedOption && selectedOption.label === "Text" ? (
        <TextType />
      ) : null}
      {selectedOption && selectedOption.label === "One from the list" ? (
        <RadioType />
      ) : null}
      {selectedOption &&
      selectedOption.label === "Several from the list" ? (
        <CheckBoxType />
      ) : null}
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
      <DropBox/>
    </div>
  </div>
  )

}
  
export default Form;