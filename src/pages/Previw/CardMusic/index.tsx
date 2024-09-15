import { FC } from 'react';
import { Container } from './styles';

import { MdSkipNext, MdSkipPrevious, MdPlayArrow, MdPause } from 'react-icons/md'
import { next, pause, play, prev } from '../../../services/api';
import { millisecondsConvertForMinutes } from '../../../utils/timerComvert';
import { CurrentlyPlayingResponse } from '../../../@types/music';

import ProgressBar from '../../../components/ProgressBar';
import { limitarString } from '../../../utils/stringConvert';

interface ICardMusic {
    currentMusic: CurrentlyPlayingResponse
}

const CardMusic: FC<ICardMusic> = ({currentMusic}) => {

    const pouseOrResume = () => {
        if(currentMusic.is_playing){
          pause()
        }else {
          play()
        }
    }

    return (
        <Container>
            <div className='imageArea'>
                <img src={currentMusic.item.album.images[0].url} alt="music image"/>
                <div className='playerController'>
                    <button onClick={prev}><MdSkipPrevious color='#fff'/></button>
                    <button onClick={pouseOrResume} className='playble'>{!currentMusic.is_playing ? <MdPlayArrow color='#fff'/> : <MdPause color='#fff'/>}</button>
                    <button onClick={next}><MdSkipNext color='#fff'/></button>
                </div>
            </div>
            <div className='albumArea'>
                <div className='artistArea'>
                    <h3>{limitarString(currentMusic.item.name, 20)}</h3>
                    <div className='artistsNames'>
                        {currentMusic.item.artists.map((artist: any) => artist.name).join(', ')}
                    </div>
                    <div className='barra'>
                        <div className='progressArea'>
                            <p>{millisecondsConvertForMinutes(currentMusic.progress_ms)}</p>
                            <p>{millisecondsConvertForMinutes(currentMusic.item.duration_ms)}</p>
                        </div>
                        <ProgressBar porcentagem={currentMusic.progress_ms} total={currentMusic.item.duration_ms}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CardMusic;
