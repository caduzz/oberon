import { FC, ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

import { MdClose } from 'react-icons/md'

const ModalCloseBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <MdClose />
    </Container>
  );
};

export default ModalCloseBtn;
