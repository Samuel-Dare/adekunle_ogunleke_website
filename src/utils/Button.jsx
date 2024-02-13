import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm bg-colorBrand font-semibold uppercase tracking-wide text-colorGrey0 transition-colors duration-300 hover:bg-colorBrand2 hover:text-colorGrey900 focus:bg-colorBrand2 focus:outline-none focus:ring focus:ring-colorBrand2 focus:ring-offset-2 disabled:cursor-not-allowed w-full mx-auto';

  const secondaryBase =
    'inline-block text-lg rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-colorGrey400 text-colorGrey-400 hover:bg-colorGrey400 hover:text-colorGrey800 focus:bg-colorGrey400 focus:text-colorGrey800 focus:ring-colorGrey-200';

  const pointerBase =
    'text-colorBrand tracking-wide inline-block text-lg font-semibold disabled:cursor-not-allowed focus:outline-none transition-colors duration-300';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4 md:text-lg md:w-auto',
    // primary2: base + ' px-4 py-3 md:px-6 md:py-4 md:text-lg md:w-auto',
    primaryFull: base + ' rounded-none px-4 py-3 md:px-6 md:py-4 md:text-lg',
    // round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',

    small:
      'px-4 py-2 md:px-5 md:py-2.5 text-sm border-colorBrand hover:bg-colorBrand2 hover:text-colorGrey100 md:w-auto rounded-lg ' +
      secondaryBase,

    pointer: pointerBase,

    pointerBlack: 'text-colorGrey800 hidden md:inline-block ' + pointerBase,

    secondary: secondaryBase + ' md:w-auto',
    secondaryGrey: secondaryBase,
    secondaryFull: 'text-sm w-full rounded-lg ' + secondaryBase,
  };

  if (!children) return;

  if (to)
    return (
      <Link to={to} className={styles[type] + ' text-center'}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
