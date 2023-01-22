export const Item = ({ name, number }) => {
  return (
    <li>
      <p>
        <span>{name}</span>: <span>{number}</span>
      </p>
    </li>
  );
};
