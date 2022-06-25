import React, { useState } from "react";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setPeople,
  setBill,
  setTip,
  getTipAmount,
  getTotalAmount,
} from "../App/slice";
import { useEffect } from "react";

const InputComp = ({
  bill,
  setBiller,
  person,
  setPerson,
  tip,
  setTipper,
  activeTip,
  setActiveTip,
}) => {
  const [billError, setBillerError] = useState(false);
  const [personError, setPersonError] = useState(false);
  const [tipError, setTipperError] = useState(false);

  const state = useSelector((state) => state.tip);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.tip === 0 || state.bill === 0 || state.people === 0) {
      return;
    }
    dispatch(getTipAmount());
    dispatch(getTotalAmount());
  }, [dispatch, state]);

  const validateBill = (n) => {
    setBiller(n);
    setBillerError(false);
    if (isNaN(n)) {
      setBillerError(true);
    } else if (n > 0) {
      dispatch(setBill(n));
    } else {
      dispatch(setBill(0));
    }
  };
  const validatePerson = (n) => {
    setPerson(n);
    setPersonError(false);
    if (!isNaN(n)) {
      if (n <= 0) {
        setPersonError(true);
        dispatch(setPeople(0));
        return;
      }
      dispatch(setPeople(n));
    }
  };
  const validateTip = (n) => {
    setTipper(n);
    setActiveTip(n);
    setTipperError(false);
    if (!isNaN(n)) {
      if (n <= 0) {
        setTipperError(true);
        dispatch(setTip(0));
      }
      dispatch(setTip(n));
      return;
    }
  };

  const active = (n) => {
    setTipper("");
    switch (n) {
      case 50:
        setActiveTip(50);
        dispatch(setTip(50));
        break;
      case 20:
        setActiveTip(20);
        dispatch(setTip(20));
        break;
      case 5:
        setActiveTip(5);
        dispatch(setTip(5));
        break;
      case 10:
        setActiveTip(10);
        dispatch(setTip(10));
        break;
      case 15:
        setActiveTip(15);
        dispatch(setTip(15));
        break;
      default:
        setActiveTip("none");
    }
  };

  return (
    <div className='InputComp'>
      <div className='InputComp_bill'>
        <label htmlFor='Bill'>Bill</label>
        <div>
          <img src={dollarIcon} alt='dollar Icon' />
          <input
            className={`${
              billError
                ? "outline-2 outline-red-500"
                : "outline-2 outline-StrongCyan"
            }`}
            value={bill}
            onChange={(e) => validateBill(e.target.valueAsNumber)}
            min='0'
            type='number'
            name='Bill'
            placeholder='0'
            id='Bill'
          />
          {billError && (
            <p className='absolute -bottom-6 text-red-500'>
              must be more than zero
            </p>
          )}
        </div>
      </div>
      <fieldset className='InputComp_tip'>
        <legend>Select a Tip %</legend>
        <div>
          <button
            className={`${
              activeTip === 5
                ? "bg-StrongCyan text-veryDarkCyan"
                : "text-white bg-veryDarkCyan"
            }`}
            onClick={() => active(5)}>
            5%
          </button>
          <button
            className={`${
              activeTip === 10
                ? "bg-StrongCyan text-veryDarkCyan"
                : "text-white bg-veryDarkCyan"
            }`}
            onClick={() => active(10)}>
            10%
          </button>
          <button
            className={`${
              activeTip === 15
                ? "bg-StrongCyan text-veryDarkCyan"
                : "text-white bg-veryDarkCyan"
            }`}
            onClick={() => active(15)}>
            15%
          </button>
          <button
            className={`${
              activeTip === 20
                ? "bg-StrongCyan text-veryDarkCyan"
                : "text-white bg-veryDarkCyan"
            }`}
            onClick={() => active(20)}>
            20%
          </button>
          <button
            className={`${
              activeTip === 50
                ? "bg-StrongCyan text-veryDarkCyan"
                : "text-white bg-veryDarkCyan"
            }`}
            onClick={() => active(50)}>
            50%
          </button>
          <input
            min='0'
            max='100'
            className={`${
              tipError
                ? "outline-4 outline-red-500"
                : "outline-4 outline-StrongCyan"
            }`}
            pattern={/^.{1,3}$/}
            onChange={(e) => {
              validateTip(e.target.value);
            }}
            maxLength='3'
            value={tip}
            type='text'
            name='Custom'
            id='Custom'
            placeholder='Custom'
          />
        </div>
      </fieldset>
      <div className='InputComp_people'>
        <label htmlFor='People'>Number of People</label>
        <div>
          <img src={personIcon} alt='person Icon' />
          <input
            className={`${
              personError
                ? "outline-2 outline-red-500"
                : "outline-2 outline-StrongCyan"
            }`}
            onChange={(e) => validatePerson(e.target.valueAsNumber)}
            type='number'
            value={person}
            min='0'
            name='People'
            placeholder='0'
            id='People'
          />
          {personError && (
            <p className='absolute -bottom-6 text-red-500'>
              must be more than zero
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputComp;
