import styled from "styled-components";

interface IButtonPicture {
    isActive: boolean
}

export const ButtonPicture = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-size: 1.2rem;
    color: ${(p: IButtonPicture) => p.isActive ? "#ff2255" : "#fff"};
    transition: .2s;
    :focus {
        outline: none;
    }
`

export const TimerContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    padding: 0.4rem;

    .timerContent {
        display: flex;
        flex-direction: column;
        align-items: center;

        .buttonArea {
            margin-top: 2rem;
            display: flex;
            
            button {
                display: flex;
                align-items: center;
                justify-content: center;
        
                width: 2rem;
                height: 2rem;
    
                cursor: pointer;
        
                color: #fff;
                background-color: #f25;
        
                border-radius: .2rem;
                border: none;
                margin-right: .5rem;
                
                transition: 0.2s;
                :disabled {
                    background-color: #222;
                    cursor: not-allowed;
                }
                :hover {
                    background-color: #f36;
                    :disabled {
                        background-color: #222;
                    }
                }
            }
        }
    }
`;
