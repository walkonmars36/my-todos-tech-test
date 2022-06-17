import React from "react";
import "./InputBox.scss";
// import plus from "../../assets/images/plus.jpeg";

const InputBox = ({handleInput}) => {
  return (
    <form onSubmit={handleInput} className="form">
      <input className="form__input" type="text" />
      <button className="form__button" type="submit">
        <img className="form__image" alt="" />
      </button>
    </form>
  );
};

export default InputBox;
