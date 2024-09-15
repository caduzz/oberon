import styled from "styled-components";

export const Container = styled.div`
    padding-inline: 1rem;

    .imageArea {
        position: relative;
        img {
            width: 100%;
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
                font-size: 1.5rem;

                width: 3rem;
                height: 3rem;
            }
            .playble {
                font-size: 2rem;
            }
        }
    }
    
    .albumArea {
        padding: .5rem;
        margin-top: .8rem;
        
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
            margin-top: .8rem;

            p {
                margin-bottom: .4rem;
                font-size: .8rem;
            }
        }
    }
`