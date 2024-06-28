import { useState } from "react";
import PasswordOptions from './components/passwordOptions';
import "./App.scss";

function App() {
  const [ans, setAns] = useState("");
  const [isInvlid, setIsInvlid] = useState(false);
  const {
    lowerCaseIsChecked, upperCaseIsChecked, numbersIsChecked, symbolsIsChecked, lengthValue, characterValue, 
    handleLowerCase, handleUpperCase, handleNumber, handleSymbol, handleLength, handleExculdCharacter
  } = PasswordOptions();

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // 隨機產生 array 中的一個值
  function sample(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  function handleClick() {
    let collection = [];

    if (lowerCaseIsChecked) {
      collection = collection.concat(lowerCaseLetters.split(""));
    }
    if (upperCaseIsChecked) {
      collection = collection.concat(upperCaseLetters.split(""));
    }
    if (numbersIsChecked) {
      collection = collection.concat(numbers.split(""));
    }
    if (symbolsIsChecked) {
      collection = collection.concat(symbols.split(""));
    }

    // 移除不要的值
    collection = collection.filter((character) => {
      // 包含 character 回傳 !true
      return !characterValue.includes(character);
    });

    let password = "";
    for (let i = 0; i < lengthValue; i++) {
      password += sample(collection);
    }

    
    if(lengthValue <= 0){
      password = "Please enter valid number";
      setIsInvlid(true)
    } else if(collection.length === 0){
      password = "There is no valid character in your selection.";
      setIsInvlid(true)
    } else {
      setIsInvlid(false)
    }
    
    setAns(password);
  }

  
  const ansClass = isInvlid ? "invalid" : "valid"

  return (
    <>
      <div className="container">
        <h1>Generate Password</h1>
        
        <div className="box">
          <label htmlFor="length">length</label>
          <input
            type="number"
            id="length"
            value={lengthValue}
            onChange={handleLength}
          />
        </div>

        <div className="box">
          <label htmlFor="lowercase">Lowercase</label>
          <input
            type="checkbox"
            id="lowercase"
            checked={lowerCaseIsChecked}
            onChange={handleLowerCase}
          />
          <span>{`(eg. abcdefg)`}</span>
        </div>

        <div className="box">
          <label htmlFor="uppercase">Uppercase</label>
          <input
            type="checkbox"
            id="uppercase"
            checked={upperCaseIsChecked}
            onChange={handleUpperCase}
          />
          <span>{`(eg. ABCDEFG)`}</span>
        </div>

        <div className="box">
          <label htmlFor="numbers">Numbers</label>
          <input
            type="checkbox"
            id="numbers"
            checked={numbersIsChecked}
            onChange={handleNumber}
          />
          <span>{`(eg. 1234567)`}</span>
        </div>

        <div className="box">
          <label htmlFor="symbols">Symbols</label>
          <input
            type="checkbox"
            id="symbols"
            checked={symbolsIsChecked}
            onChange={handleSymbol}
          />
          <span>{`(eg. !@#$%^&*)`}</span>
        </div>

        <div className="box">
          <label htmlFor="exculdeCharacters">Exculde Characters</label>
          <input
            type="text"
            id="exculdeCharacters"
            value={characterValue}
            onChange={handleExculdCharacter}
          />
        </div>

        
        <div className="password-wrapper">
          <h2>Your password is:</h2>
          <p className={ansClass}>{ans}</p>
        </div>

        <button onClick={handleClick}>click</button>
      </div>
    </>
  );
}

export default App;
