export const Contacts = ({ name, number }) => {
  return (
    <li>
      <p>
        <span>{name}</span>: <span>{number}</span>
      </p>
    </li>
  );
};