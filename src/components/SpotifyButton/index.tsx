import LogoSpotify from '../../../assets/icons/spotify-logo.png'
import { Button } from './style';

const ButtonSpotify = () => {
  return (
    <Button onClick={window.Main.openSpotify} title='Open Spotify'>
      <img src={LogoSpotify} alt='Logo Spotify'/>
    </Button>
  );
};

export default ButtonSpotify;