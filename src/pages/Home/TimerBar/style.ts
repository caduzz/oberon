import styled from "styled-components";

export const Contente = styled.div`
    width: 100%;
    height: 100%;

    header {
        padding: 1.25rem;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0.2rem;
            font-size: 0.6rem;
            border-radius: 50%;

            color: #fff;

            cursor: pointer;
            background-color: transparent;
            border: 0.01rem solid #fff;
            
            transition: 0.2s;

            :hover {
                color: #ddd8;
                border: 0.01rem solid #ddd8;
            }
        }
    }

    ul {
        padding: .4rem;
    }

    .label-separetor {
        display: flex;
        flex-direction: row;
    }
`

export const LabelSeparetor = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`