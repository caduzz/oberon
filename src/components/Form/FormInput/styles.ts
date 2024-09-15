import styled, { css } from "styled-components";

interface InputProps {
    hasValue: boolean
}

const staticCss = css`
    label {
        font-size: .8rem;
        color: #ff2255;
        top: .5rem;
        left: .5rem;
    }
    input {
        height: 40px;
        margin-top: 20px;
    }
`;

export const Container = styled.div<InputProps>`
    width: 100%;
    position: relative;

    border: 1px solid #ddd3;
    border-radius: 3px;

    display: flex;
    flex-direction: column;

    height: 3rem;


    label {
        width: 100%;
        pointer-events: none;
        cursor: text;
        transition: 0.2s;
        top: 1rem;
        left: 1rem;
        position: absolute;
        color: #ddd;
    }
    input {
        height: 3.4rem;
        border: none;
        cursor: text;
        color: #fff;
        background-color: #0000;
        width: 100%;
        padding-inline: .5rem;
        outline: none;
        position: relative;
    }

    
    &:focus-within {
        outline: 2px solid #ff2255;
        ${staticCss}
    }

    ${p => p.hasValue && staticCss}
`;