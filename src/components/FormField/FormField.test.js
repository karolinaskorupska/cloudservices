import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormField from './FormField';

describe('Form Field', () => {
  it('Renders the component', () => {
    render(<FormField label="name" name="name" id="name" />);
  });
});

// const InputWithButton = () => {
//     const [inputValue, setInputValue] = useState('');

//     handleInputChange = (e) => setInputValue(e.target.value);

//     return(
//         <>
//             <input onChange={handleInputChange} value={inputValue} name="Name" id="name" placeholder="Enter name" />
//             <button disabled={!inputValue}>Submit</button>
//         </>
//     )

// };

// //opisuje test
// describe('Input With Button', () => {
//     //test czy renderuje
//     it('renders component', ()=>{
//         render(<InputWithButton/>);
//         //metoda pozwala pobierać elementy komponentu
//         // screen.getByText('Submit');
//     });
// });

// //sprawdzenie czy input działa poprawnie
// describe('is input properly handling value change', () => {
//     render(<InputWithButton/>);
//     const input = screen.getByPlaceholderText('Enter name');
//     const button = screen.getByText('Submit');
//     fireEvent.change(input, {target: {value: 'roman'} });
//     expect(input).toHaveValue('roman');
//     expect(button).not.toBeDisabled();

// })

// export default InputWithButton;
