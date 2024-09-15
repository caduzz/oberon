import { FC } from 'react';
import { Container } from './styles';

import { MdPlayArrow } from 'react-icons/md'
import { playUri } from '../../../../services/api';

import { Track } from '../../../../@types/playlist';
import { limitarString } from '../../../../utils/stringConvert';

interface ICardMusic {
    track: Track
}

const CardTrack: FC<ICardMusic> = ({ track }) => {
    return (
        <Container
            onClick={() => playUri(track.album.uri)}
            title={track.name}
        >
            <div className='playlistImg'>
                <img src={track.album.images[0].url} alt="playlist image" />
                <div className='play'>
                    <MdPlayArrow color='#fff' />
                </div>
            </div>
            <div className='playlistInfos'>
                <p className='playlistName'>{limitarString(track.name, 20)}</p>
                <p className='playlistType'>{limitarString(track.album.name, 8)}</p>
                <p className='playlistType'>{track.album.total_tracks} • {track.album.type}</p>
            </div>
        </Container>
    );
};

export default CardTrack;