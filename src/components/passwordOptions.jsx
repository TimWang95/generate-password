import { useState } from 'react';

export default function PasswordOptions() {
  const [lowerCaseIsChecked, setLowerCaseIsIsChecked] = useState(true);
  const [upperCaseIsChecked, setUpperCaseIsChecked] = useState(false);
  const [numbersIsChecked, setNumbersIsChecked] = useState(false);
  const [symbolsIsChecked, setSymbolsIsChecked] = useState(false);
  const [lengthValue, setLengthValue] = useState(8);
  const [characterValue, setCharacterValue] = useState("");

  const handleLowerCase = (e) => {
    setLowerCaseIsIsChecked(e.target.checked);
  }
  const handleUpperCase = (e) => {
    setUpperCaseIsChecked(e.target.checked);
  }
  const handleNumber = (e) => {
    setNumbersIsChecked(e.target.checked);
  }
  const handleSymbol = (e) => {
    setSymbolsIsChecked(e.target.checked);
  }
  const handleLength = (e) => {
    setLengthValue(e.target.value);
  }
  const handleExculdCharacter = (e) => {
    setCharacterValue(e.target.value)
  }

  return {
    lowerCaseIsChecked, upperCaseIsChecked, numbersIsChecked, symbolsIsChecked, lengthValue, characterValue, 
    handleLowerCase, handleUpperCase, handleNumber, handleSymbol, handleLength, handleExculdCharacter
  }
}