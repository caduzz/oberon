import styled from "styled-components";

interface ResizeContainerProps {
    width: number;
    bgColor?: string;
}

interface ResizeHandleProps {
    isResizing: boolean,
    sense: 'left' | 'right'
}

export const ResizeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    position: relative;

    width: ${(p: ResizeContainerProps) => `${p.width}px`};
    background-color: ${(p: ResizeContainerProps) => p.bgColor};

    max-width: 19.75rem;
    min-width: 12.5rem;
    
    user-select: none;
`

export const ResizeHandle = styled.div`
    width: 6px;
    height: 100%;
    background-color: transparent;
    cursor: ew-resize;

    transition: .2s;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    
    .icon {
        border-radius: 8px;
        width: 2px;
        height: 12px;
        background-color: #fff5;
    }

    ${(p: ResizeHandleProps) => p.isResizing && `
        background-color: #fff1;
        cursor: ew-resize;
    `}


    ${(p: ResizeHandleProps) => p.sense === 'left' ? `
        left: 0;
        border-left: .01rem solid #ddd1;
    `: 
    `
        right: 0;
        border-right: .01rem solid #ddd1;
    `}

    :hover {
        background-color: #fff1;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
`