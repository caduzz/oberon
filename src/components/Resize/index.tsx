import { useEffect, useState, MouseEvent, FC, ReactNode } from 'react';
import { Content, ResizeContainer, ResizeHandle } from './style';

interface ResizeProps {
  sense: 'left' | 'right',
  initialWidth: number;
  bgColor?: string,
  sensitivity?: number,
  children: ReactNode
}

const Resize: FC<ResizeProps> = ({ sense, bgColor, children, sensitivity = 2, initialWidth = 250 }) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [initialWidths, setInitialWidth] = useState(initialWidth); // Largura inicial da barra
  const [width, setWidth] = useState(initialWidths);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setStartX(null);
    setInitialWidth(width); // Atualize o valor inicial com a largura atual
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => { 
    if (isResizing && startX !== null) {
      
      requestAnimationFrame(() => {
        let newWidth = width;

        if (sense === 'right') {
          newWidth = width + (e.clientX - startX) * sensitivity;
        } else {
          newWidth = width - (e.clientX - startX) * sensitivity;
        }
  
        setWidth(newWidth);
        setStartX(e.clientX);
      });
    }
  };

  useEffect(() => {
    const stopResize = () => {
      setIsResizing(false);
      setStartX(null);
      if(width > 700){
        setWidth(700)
      }
  
      if(width < 100){
        setWidth(100)
      }
    };

    document.addEventListener('mouseup', stopResize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', stopResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <ResizeContainer
      width={width}
      bgColor={bgColor}
    >
      <ResizeHandle 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        isResizing={isResizing}
        sense={sense}
      >
        <div className='icon' />
      </ResizeHandle>
      <Content>{children}</Content>
    </ResizeContainer>
  );
};

export default Resize;