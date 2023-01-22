// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// // import styled from 'styled-components';
// import { StyledForm, StyledButton, StyledLabel, StyledDiv } from './App.styled';
// import { Item } from './Item/Item';
// import { Section } from './Section/Section';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   handleChange = ({ target }) => {
//     const { value, name } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { contacts, name, number } = this.state;
//     const newContact = {
//       name: name,
//       number: number,
//     };

//     this.setState({ contacts: [...contacts, newContact] });

//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     // const { contacts, name } = this.state;
//     return (
//       <>
//         <Section Title="Phonebook">
//           <StyledForm onSubmit={this.handleSubmit}>
//             <StyledDiv>
//               <StyledLabel htmlFor="">Name</StyledLabel>
//               <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.name}
//               />
//             </StyledDiv>
//             <StyledDiv>
//               <StyledLabel htmlFor="">Number</StyledLabel>
//               <input
//                 type="tel"
//                 name="number"
//                 // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 onChange={this.handleChange}
//                 value={this.state.number}
//               />
//             </StyledDiv>
//             <StyledButton>Add contact</StyledButton>
//           </StyledForm>
//         </Section>
//         <Section title="Contacts">
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//             value={this.state.name}
//           />
//           <ul>
//             {this.state.contacts.map(contact => {
//               return (
//                 <Item
//                   key={nanoid()}
//                   name={contact.name}
//                   number={contact.number}
//                 />
//               );
//             })}
//           </ul>
//         </Section>
//       </>
//     );
//   }
// }
