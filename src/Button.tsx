import * as React from 'react';

type Props = {
  isActive: boolean
};

const Button: React.FC<Props> = ({ isActive }) => (
  <button
    className={`button ${isActive ? 'active' : 'disable'}`}
    onClick={() => console.log("Clicked!")}
  >
    Button
  </button>
);

export default Button;
