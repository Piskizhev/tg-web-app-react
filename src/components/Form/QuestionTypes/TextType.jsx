import { useState } from "react";
import "../Form.css"

const TextType = () => {
  const [textInput, setTextInput] = useState("");

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className='answerTextTitle'>
      <span>Answer Preview</span>
      <input
        type='text'
        className='answerTextInput'
        value={textInput}
        onChange={handleTextInputChange}
        placeholder='Enter text here'
      />
    </div>
  );
}

export default TextType;
