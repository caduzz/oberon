import styled from "styled-components";

interface BarProps {
    width: number;
}

export const Bar = styled.div<BarProps>`
    width: 100%;
    height: 4px;

    background-color: #333;

    border-radius: 2px;

    .progress {
        width: ${p => `${p.width}%`};
        height: 100%;
        background-color: #fff;
        
        border-radius: 2px;
    }

`