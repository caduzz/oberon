import TimerBar from './TimerBar';
import MusicBar from './MusicBar';

import Timer from './Timer';

import { HomeContainer } from './style';
import TobBar from '../../components/TopBar';
function Home() {
  return (
    <>
    <TobBar />
    <HomeContainer >
      <TimerBar />
      <Timer />
      <MusicBar />
    </HomeContainer>
    </>
  );
}

export default Home