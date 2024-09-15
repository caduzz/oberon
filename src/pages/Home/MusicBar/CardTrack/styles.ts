import styled from "styled-components";

export const Container = styled.div`
    padding: .5rem;
    transition: .2s;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: .8rem;
    display: flex;
    width: 100%;

    .playlistImg {
        position: relative;
        img {
            width: 3.75rem;
            height: 3.75rem;

            border-radius: 4px;

            object-fit: cover;
        }
        .play {
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;

            width: 3.75rem;
            height: 3.75rem;
            border-radius: 4px;
            font-size: 1.8rem;

            top: 0;
            left: 0;

            opacity: 0;
        }
    }
    
    .playlistInfos {
        margin-left: .5rem;
        .playlistName {
            color: #fff;
            font-size: 1.2rem;
        }
        .playlistType {
            margin-top: .1rem;
            color: #d7d7d7;
            font-size: .8rem;
        }
    }

    :hover {
        background-color: #f25;
        
        .play {
            background-color: #2226;
            opacity: 1;
        }
    }
`