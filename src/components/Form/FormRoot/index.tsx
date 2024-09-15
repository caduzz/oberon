  import { FC, KeyboardEvent } from 'react';
import { Container } from './styles';

interface IForm {
  onKeyPressEnter?: () => void
}

const FormRoot: FC<IForm> = ({ children, onKeyPressEnter }) => {

  const handleKeyPressEnter = (e: KeyboardEvent) => { 
    if(e.key === 'Enter' && onKeyPressEnter){
      onKeyPressEnter()
    }
  }

  return (
    <Container onKeyPress={handleKeyPressEnter}>{children}</Container>
  );
};

export default FormRoot;
