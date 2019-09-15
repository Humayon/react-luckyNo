import React from 'react';
import '../app.css';

const Count = props => {
  return (
    <div className="col-md-4 text-center my-3">
      <p className="rounded-circle mx-auto count">{props.count}</p>
    </div>
  );
};
export default Count;
