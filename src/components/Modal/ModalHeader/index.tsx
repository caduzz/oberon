import { FC, ReactNode } from 'react';
import { Container } from './styles';

interface ModalProps {
  children?: ReactNode
  title: string
}

const ModalHeader: FC<ModalProps> = ({ title, children }) => {
  return (
    <Container>
      <h1 className='title'>{title}</h1>
      <div className='rast'>{children}</div>
    </Container>
  );
};

export default ModalHeader;
