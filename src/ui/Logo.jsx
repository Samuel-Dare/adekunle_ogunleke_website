import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className="w-full text-2xl font-bold text-colorBrand2">
      <p>Adekunle Ogunleke</p>
    </NavLink>
  );
}

export default Logo;
