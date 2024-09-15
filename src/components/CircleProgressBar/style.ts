import styled from "styled-components";

interface ContainerSvgProps {
    fontSize: string;
    fontColor: string;
}

export const ContainerSvg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    svg {
        display: flex;
        align-items: center;
        justify-content: center;
        
        transform: rotate(270deg);
        
        circle {
            transition: .1s;
        }
    }

    h2 {
        position: absolute;

        font-size: ${(p: ContainerSvgProps) => p.fontSize};
        color: ${(p: ContainerSvgProps) => p.fontColor};
    }
`