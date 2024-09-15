import { FC, ReactNode, MouseEvent,KeyboardEvent, useEffect, useRef, RefObject } from 'react';

import { Container, Content } from './styles';


interface ModalProps {
  isOpen?: boolean
  children?: ReactNode
  onClose?: () => void
}

const ModalRoot: FC<ModalProps> = ({ isOpen=false, onClose, children }) => {
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => { 
    if(e.key === 'Escape' && onClose){
      onClose()
    }
  }

  return (
    <Container 
      isOpen={isOpen} 
      onClick={handleBackdropClick}
      tabIndex={-1}
      ref={modalRef}
    >
      <Content
        onKeyPress={handleKeyPress}
      >
        {children}
      </Content>
    </Container>
  );
};

export default ModalRoot;
