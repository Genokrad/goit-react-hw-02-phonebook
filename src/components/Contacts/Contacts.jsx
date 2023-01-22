import PropTypes from 'prop-types';
import { StyledButton } from './Contacts.styled';

export const Contacts = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      <p>
        <span>{name}</span>: <span>{number}</span>
      </p>
      <StyledButton onClick={() => deleteContact(id)}>Delete</StyledButton>
    </li>
  );
};

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
