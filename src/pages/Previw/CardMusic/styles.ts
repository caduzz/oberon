import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    .imageArea {
        display: flex;
        flex-grow: 1;
        position: relative;

        img {
            width: auto;   
        }
        .playerController {
            -webkit-app-region: no-drag;
            transition: .2s;
            cursor: pointer;

            width: 100%;
            height: 100%;

            position: absolute;
            top: 0;
            left: 0;

            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;

            :hover {
                opacity: 1;
                background-color: #2228;
            }
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                border: none;
                cursor: pointer;    
                font-size: .8rem;

                width: 3rem;
                height: 3rem;
            }
            .playble {
                font-size: 1.5rem;
            }
        }
    }
    
    .albumArea {
        width: 100%;
        margin-left: 1rem;

        .artistArea {
            margin-bottom: .8rem;

            .artistsNames {
                margin-block: .4rem;
                display: flex;
                font-size: .8rem; 
            }
        }

        .progressArea {
            display: flex;
            justify-content: space-between;

            p {
                margin-bottom: .4rem;
                font-size: .8rem;
            }
        }
    }

    @media (max-height: 120px) {
        .barra {
            display: none;
        }
    }
`