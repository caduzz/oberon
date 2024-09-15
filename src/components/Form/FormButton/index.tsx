import { FC, ReactNode } from 'react';
import { Container } from './styles';


interface FormButtonProps {
  children: ReactNode,
  onClick: () => void
};

const FormButton: FC<FormButtonProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>{children}</Container>
  );
};

export default FormButton;
