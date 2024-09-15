import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { Container } from './styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onInputChange: (value:string) => void,
  label: string,
  inputValue: string | number | undefined
};

const FormInput: FC<FormInputProps> = ({ label, id, inputValue, onInputChange, ...rest }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <Container hasValue={value !== ''}>
      <label htmlFor={id}>{label}</label> 
      <input
        id={id}
        onChange={handleInputChange}
        value={inputValue}
        {...rest}
      />
    </Container>
  );
};

export default FormInput;
