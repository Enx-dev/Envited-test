import React, { useState } from "react";
import { reset } from "../App/slice";
import InputComp from "./InputComp";
import OutputComp from "./OutputComp";
import { useDispatch } from "react-redux";
const Container = () => {
  const [bill, setBiller] = useState(0);
  const [person, setPerson] = useState(0);
  const [tip, setTipper] = useState();
  const [activeTip, setActiveTip] = useState();
  const dispatch = useDispatch();
  const resets = () => {
    dispatch(reset());
    setBiller(0);
    setPerson(0);
    setTipper(0);
    setActiveTip("none");
  };
  return (
    <section className='Container'>
      <InputComp
        activeTip={activeTip}
        setActiveTip={setActiveTip}
        bill={bill}
        setBiller={setBiller}
        person={person}
        setPerson={setPerson}
        tip={tip}
        setTipper={setTipper}
      />
      <OutputComp reset={resets} />
    </section>
  );
};

export default Container;
