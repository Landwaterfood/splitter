import TipButton from "./Components/TipButton";
import TotalPeopleInput from "./Components/TotalPeopleInput/index";
import BillInput from "./Components/Billinput";
import TotalPerPerson from "./Components/TotalPeopleInput/index";
import TipPerPerson from "./Components/TipButton/index";
import ResetButton from "./Components/ResetButton/index";
import CustomTipInput from "./Components/CustomTipInput";

import { useState } from "react";

function App() {
  const [tipAmount, setTipAmount] = useState(0);
  function handleClick5Percent() {
    setTipAmount(5);
  }
  function handleClick10Percent() {
    setTipAmount(10);
  }
  function handleClick15Percent() {
    setTipAmount(15);
  }
  function handleClick20Percent() {
    setTipAmount(20);
  }
  function handleClick25Percent() {
    setTipAmount(25);
  }
  function handleClick50Percent() {
    setTipAmount(50);
  }
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const [billAmount, setBillAmount] = useState(0);
  function handleBillChange(event) {
    setInputValue(event.target.value);
  }
  const [customTipAmount, setCustomTipAmount] = useState(0);
  function handleCustomTipChange(event) {
    setInputValue(event.target.value);
  }

  const [peopleAmount, setPeopleAmount] = useState(0);
  function handlePeopleChange(event) {
    setInputValue(event.target.value);
  }

  handleReset.updateState(preResetState);

  return (
    <>
      <div className="flex flex-col items-center p-20">
        <h1 className="tracking-wide text-4xl font-semibold ">S P L I</h1>
        <h1 className="tracking-wide text-4xl font-semibold">T T E R</h1>
      </div>

      <div className="w-100 flex justify-center">
        <div className=" flex  content-center rounded-md bg-white w-2/3 h-2/3 p-10">
          <div>
            <div>
              <p>Bill</p>
              <BillInput handleBillChange={handleBillChange} />
            </div>
            <div>
              <p>Select Tip %</p>
              <div className="flex flex-wrap">
                <TipButton percent={"5"} clickHandler={handleClick5Percent} />
                <TipButton percent={"10"} clickHandler={handleClick10Percent} />
                <TipButton percent={"15"} clickHandler={handleClick15Percent} />
                <TipButton percent={"20"} clickHandler={handleClick20Percent} />
                <TipButton percent={"25"} clickHandler={handleClick25Percent} />
                <TipButton percent={"50"} clickHandler={handleClick50Percent} />
                <CustomTipInput handleCustomTipChange={handleCustomTipChange} />
              </div>
              <p>Number Of People</p>
              <TotalPeopleInput clickHandler={handlePeopleChange} />
            </div>
          </div>
          <div className="bg-teal-800 rounded-md px-7 w-6/12">
            <div className="inline-block">
              <p>TotalPerPerson </p>
              <div>$0.00</div>
            </div>
            <div className="inline-block">
              <p>TipPerPerson</p>
              <div>$0.00</div>
            </div>
            <ResetButton clickHandler={handleReset}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
