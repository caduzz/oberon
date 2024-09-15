import styled from "styled-components";

interface ILiMenu {
    isActive: boolean
}

export const LiMusicMenu = styled.li`
    padding: .4rem;
    width: 100%;
    text-align: center;
    opacity: ${(p: ILiMenu) => p.isActive ? 1 : 0.2};
`

export const Contente = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    header {
        padding: 1.25rem;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .playlistArea {
        padding-inline: 1.2rem;
        padding-bottom: 1.2rem;
        overflow-y: scroll;
        
        flex: 1;

        .music-menu {
            margin-bottom: .5rem;
            width: 100%;
            list-style-type: none;
            cursor: pointer;
            display: flex;
            font-size: 12px;
            justify-content: space-between;
        }
    }
`