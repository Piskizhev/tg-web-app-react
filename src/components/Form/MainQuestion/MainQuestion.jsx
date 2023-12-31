import "../MainQuestion/MainQuestion.css";
import bin from "../../../images/icons/bin.svg";
import React, { useState } from "react";
import DropBox from "../QuestionTypes/DropBox";

const MainQuestion = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='question'>
      <div className='questionLable'>
        <div className='questionNumber'>#1 Question</div>
        <div className='questionBin'>
          <a href='/sport-form'>
            <img src={bin} alt='delete' />
          </a>
        </div>
      </div>
      <div className='questionTitle'>
        <div id='textInput' type='textInput'>
          Question title
        </div>
        <div className='questionInput'>
          <input
            type='text'
            name='titleInput'
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <DropBox />
      </div>
    </div>
  );
}

export default MainQuestion;
