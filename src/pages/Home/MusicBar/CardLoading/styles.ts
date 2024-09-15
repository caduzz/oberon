import styled from "styled-components";

export const Container = styled.div`
    padding-inline: 1rem;

    .loadingArea {
        img {
            width: 100%;
            margin-bottom: 1rem;
        }
    }
    
    
    @media (max-width: 600px) {
        padding-inline: 0px;
        display: flex;
        justify-content: flex-end;

        img {
            margin-bottom: 0px;
            width: 10rem;
            height: 10rem;
        }
    }
`