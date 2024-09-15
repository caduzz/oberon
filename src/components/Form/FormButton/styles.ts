import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    color: #ddd;
    cursor: pointer;

    background-color: #ff2255;
    border: none;
    border-radius: 3px;

    display: flex;
    flex-direction: column;

    height: 3rem;
    width: 100%;

    transition: .2s;

    outline-color: #ff2255;

    :hover {
        background-color: #07090a;
    }

    :focus {
        outline: 2px solid #ff2255;
    }
`;