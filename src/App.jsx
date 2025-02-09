import { useState } from "react";
import UserInput from "./components/UserInput"
import Result from "./components/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      const tempUserInput = {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      }
      return tempUserInput;
    });
  }

  return (
    <>
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Result input={userInput}/>
    </>
  )
}

export default App
