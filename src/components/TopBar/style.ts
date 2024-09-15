import styled from "styled-components";

export const TobBarContainer = styled.div`
    width: 100%;
    height: 2.2rem;
    background-color: #07090e;

    border-bottom: .01rem solid #ddd1; 

    display: flex;
    justify-content: space-between;
    
    .topBarContent {
        padding: .4rem;
        display: flex;
        width: 100%;
        align-items: center;
        -webkit-app-region: drag;

        .topBarTitle {
            display: flex;
            align-items: center;
            
            padding-left: .4rem;
        }
    }
    .topBarBtn {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        button {
            padding: .6rem;
            
            display: flex;
            
            font-size: .9rem;

            align-items: center;
            justify-content: center;
            
            cursor: pointer;
            border: none;
            background-color: transparent;
            color: #aaa;

            :hover {
                color: #fff;

                background-color: #15131c;
            }
        }

        .btnClose {
            :hover {
                background-color: #f49;
                color: #fff;
            }
        }
    }
`