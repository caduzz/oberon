import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
    
    .content {
        border-radius: 5px;
        background: #07090f;
        border: 1px solid #222;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem;
        color: #fff;

        .closeBtn {
            position: absolute;
            top: .5rem;
            right: .5rem;
            background-color: transparent;
            border: none;
            cursor: pointer;
            -webkit-app-region: no-drag;
        }    

        .progressTimerArea {
            -webkit-app-region: drag;
            display: flex;
            align-items: center;
            button {
                -webkit-app-region: no-drag;
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
                margin-left: .5rem;
                
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

            right: 0rem;
            bottom: 0rem;
            padding: .5rem;
            position: absolute;
        }
    }
`