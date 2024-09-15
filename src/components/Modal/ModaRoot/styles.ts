import styled from "styled-components";

interface ContainerPropsModal {
    isOpen: boolean
}

export const Container = styled.div<ContainerPropsModal>`
    display: ${p => p.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 2.2rem;
    left: 0; 

    z-index: 100;


    align-items: center;
    justify-content: center;

    width: 100%;
    height: calc(100% - 2.2rem);


    background-color: #0007;
`;
export const Content = styled.div`
    width: 34rem;
    background-color: #101318;

    border-radius: 4px;

    box-shadow: 0 0 8px 2px #0004;
`;