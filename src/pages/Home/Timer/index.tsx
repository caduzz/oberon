import { useState, useEffect, useContext, useRef } from 'react';
import { ButtonPicture, TimerContainer } from './style';
import CircleProgressBar from '../../../components/CircleProgressBar';
import { BsPause, BsPlay } from 'react-icons/bs';
import { MdRestartAlt } from 'react-icons/md';
import { RiPictureInPictureExitFill, RiPictureInPictureFill } from 'react-icons/ri';
import soundNotify from '../../../../assets/sounds/notify.mp3';
import { TimerContext } from '../../../contexts/timerContext';
import { pause, play } from '../../../services/api';

const Timer = () => {
  const { timers } = useContext(TimerContext);
  const [initialTime, setInitialTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isWorking, setIsWorking] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActivePicture, setIsActivePicture] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tocarSom = () => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.2;
    }
  }

  const toggleTimer = () => {
    setIsActive(prev => !prev);
    if (!isActive) {
      window.Main.startTimer(time);
      play();
    } else {
      window.Main.pauseTimer();
      pause();
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
    window.Main.resetTimer(initialTime);
  };

  const updateTimerScreens = () => {
    for (let i = 0; i < timers.length; i++) {
      const timer = timers[i];

      if (timer.selected) {
        window.Main.pauseTimer();
        if (isWorking) {
          setInitialTime(timer.working * 60);
          window.Main.updateStateTimer({ timer: timer.working * 60, action: true });

          return
        }

        setInitialTime(timer.rest * 60);
        window.Main.updateStateTimer({ timer: timer.rest * 60, action: true });

        return
      }
      setInitialTime(0);
      window.Main.updateStateTimer({ timer: 0, action: true });
    }
  }

  const openScreen = () => {
    window.Main.openSobreposition()
    window.Main.updateStateTimer({ timer: time, action: true })
    window.Main.pictureInPictureState().then(val => setIsActivePicture(val))
  }

  useEffect(() => {
    window.Main.updateTimer((state) => {
      setTime(state.currentTime);
      setIsActive(state.isTimerRunning);
    });

    window.Main.updateSobreposition((state) => {
      setIsActivePicture(state)
    });

    window.Main.timerComplete(() => {
      if (timers.find(timer => timer.selected === true)) {
        tocarSom();
        pause();
        setIsActive(false)
        window.Main.pauseTimer();
        setIsWorking((working) => !working);
      }
    });
  }, []);


  useEffect(() => {
    window.Main.pictureInPictureState().then(val => setIsActivePicture(val))
    updateTimerScreens()
  }, [timers, isWorking]);

  return (
    <TimerContainer>
      <ButtonPicture onClick={openScreen} isActive={isActivePicture}>
        {!isActivePicture ? <RiPictureInPictureFill /> : <RiPictureInPictureExitFill />}
      </ButtonPicture>
      <div className='timerContent'>
        <CircleProgressBar
          size={280}
          time={time}
          textSize='2.5rem'
          textColor={time !== 0 ? '#fff' : '#fff9'}
          color={time !== 0 ? '#f25' : '#222'}
          strokeWidth={15}
          porcentagem={time / initialTime}
        />
        <h2 style={{ color: '#fff', marginTop: '1rem' }}>{isWorking ? 'Working' : 'Rest'}</h2>

        <div className='buttonArea'>
          <button onClick={toggleTimer} disabled={time <= 0}>
            {isActive ? <BsPause size={25} /> : <BsPlay size={25} />}
          </button>
          <button onClick={resetTimer} disabled={time <= 0}>
            <MdRestartAlt size={25} />
          </button>
        </div>
        <audio ref={audioRef}>
          <source src={soundNotify} type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </div>
    </TimerContainer>
  );
};

export default Timer;
