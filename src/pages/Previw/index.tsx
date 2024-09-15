import { useState, useEffect } from 'react';
import { Container } from './style';

import { pause, play, track } from '../../services/api';
import CardMusic from './CardMusic';

import { CurrentlyPlayingResponse } from '../../@types/music';
import { BsPause, BsPlay } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { secondsConvertForMinutes } from '../../utils/timerComvert';

function Previw() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(true)
  const [currentMusic, setCurrentMusic] = useState<CurrentlyPlayingResponse>()

  const getTrack = async () => {
    const res = await track()
    if (!res.err) {
      setCurrentMusic(res)
    }
  }

  const toggleTimer = () => {
    setIsActive(prev => !prev);
    if (!isActive) {
      setIsActive(false);
      window.Main.startTimer(time)
      play();
    } else {
      setIsActive(true);
      window.Main.pauseTimer()
      pause();
    }
  };

  useEffect(() => {
    getTrack()
    setInterval(getTrack, 1000)
    window.Main.updateTimer((state) => {
      setTime(state.currentTime);
      setIsActive(state.isTimerRunning);
    });
    window.Main.updateStateTimer({ timer: 0, action: false })
  }, []);

  return (
    <Container>
      <div className='content'>
        <button className='closeBtn' onClick={window.Main.closeSobreposition}>
          <MdClose color='#fff' />
        </button>
        {currentMusic ? (
          currentMusic.item?.album ? (
            <CardMusic currentMusic={currentMusic} />
          ) :
            <h2>Loading</h2>
        ) :
          <h2>Now Play Music</h2>
        }
        <div className='progressTimerArea'>
          {secondsConvertForMinutes(time)}
          <button onClick={toggleTimer} disabled={time === 0}>
            {isActive ? <BsPause size={25} /> : <BsPlay size={25} />}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Previw