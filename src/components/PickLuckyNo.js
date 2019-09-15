import React from 'react';

const PickLuckyNo = props => {
  let luckyPickHandler = () => {
    props.luckyNoHandler();
  };
  return (
    <div className="mt-3">
      <button className="btn btn-secondary" onClick={luckyPickHandler}>
        Pick No
      </button>
      {props.luckyNo && (
        <h4 className="text-info mt-3">
          Your lucky no is <span className="text-danger">{props.luckyNo}</span>
        </h4>
      )}
    </div>
  );
};

export default PickLuckyNo;
