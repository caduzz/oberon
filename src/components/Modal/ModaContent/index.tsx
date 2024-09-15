import { FC, ReactNode } from 'react';

import { Container } from './styles';


interface ModalProps {
  children: ReactNode
}

const ModalContent: FC<ModalProps> = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

export default ModalContent;
