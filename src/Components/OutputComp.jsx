import React from "react";
import { useSelector } from "react-redux";

const OutputComp = ({ reset }) => {
  const tip = useSelector((state) => state.tip);
  const validateTip = () => {
    if (
      tip.tipTotal <= 0 ||
      isNaN(tip.tipTotal) ||
      tip.bill === 0 ||
      tip.tip === 0 ||
      tip.tip === "" ||
      tip.people === 0
    ) {
      return "00.0";
    } else {
      return tip.tipTotal;
    }
  };
  const validateT0tal = () => {
    if (
      tip.total <= 0 ||
      isNaN(tip.total) ||
      tip.bill === 0 ||
      tip.tip === 0 ||
      tip.tip === "" ||
      tip.people === 0
    ) {
      return "00.0";
    } else {
      return tip.total;
    }
  };

  return (
    <div className='OutputComp'>
      <div className='OutputComp_top'>
        <div className='OutputComp_div'>
          <span>
            <p className='OutputComp_title'>Tip Amount</p>
            <p className='OutputComp_subtitle'>/ person</p>
          </span>
          <p className='OutputComp_amount'>${validateTip()}</p>
        </div>
        <div className='OutputComp_div'>
          <span>
            <p className='OutputComp_title'>Total</p>
            <p className='OutputComp_subtitle'>/ person</p>
          </span>
          <p className='OutputComp_amount'>${validateT0tal()}</p>
        </div>
      </div>

      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default OutputComp;
