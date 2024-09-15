import { FC, useEffect, useState } from 'react';
import { Contente, LiMusicMenu } from './style';

import { track, playlist, playlistRecommended, playlistQueue } from '../../../services/api';

import Resize from '../../../components/Resize';

import CardMusic from './CardMusic';
import CardLoading from './CardLoading';

import { CurrentlyPlayingResponse } from '../../../@types/music';
import { RecentlyPlayedResponse, Track } from '../../../@types/playlist';
import CardTrack from './CardTrack';
import ButtonSpotify from '../../../components/SpotifyButton';

interface ISelectdPlaylist {
  name: string,
  title: string,
  key: number
  selected: boolean
}

const MusicBar: FC = () => {

  const [currentMusic, setCurrentMusic] = useState<CurrentlyPlayingResponse>()
  const [playlists, setPlaylists] = useState<RecentlyPlayedResponse[]>([])
  const [selectdPlaylist, setSelectdPlaylist] = useState<ISelectdPlaylist[]>([
    { selected: true, title: "Tocadas Recentemente", name: "⏱️", key: 1 },
    { selected: false, title: "Recomendado Para Estudar", name: "📖", key: 2 },
    { selected: false, title: "Fila", name: "📑", key: 3 },
  ])

  const getTrack = async () => {
    const res = await track()
    if (!res.err) {
      setCurrentMusic(res)
    }
  }

  const menuSelect = (key: number) => {
    const data = selectdPlaylist.map((menuSelect) => {
      if (menuSelect.key === key && !menuSelect.selected) {
        menuSelect.selected = true;
      }

      if (menuSelect.key !== key && menuSelect.selected) {
        menuSelect.selected = false;
      }
      return menuSelect;
    });

    setSelectdPlaylist(data)
  }

  useEffect(() => {
    const selectedType = selectdPlaylist.find(selected => selected.selected)

    switch (selectedType?.key) {
      case 1:
        playlist().then(data => {
          setPlaylists(data)
        })
        break
      case 2:
        playlistRecommended().then(data => {
          setPlaylists(data)
        })
        break
      case 3:
        playlistQueue().then(data => {
          setPlaylists(data)
        })
    }
  }, [selectdPlaylist])

  useEffect(() => {
    setInterval(getTrack, 1000)
  }, [])

  return (
    <Resize
      initialWidth={500}
      bgColor='#07090f'
      sense={'left'}
    >
      <Contente>
        <header>
          <h2>Spotify</h2>
          <ButtonSpotify />
        </header>
        {currentMusic ? (
          currentMusic.item?.album ? (
            <CardMusic currentMusic={currentMusic} />
          ) :
            <CardLoading msg='Loading' />
        ) :
          <CardLoading msg='Now Play Music' />
        }
        <div className='playlistArea'>
          <ul className='music-menu'>
            {selectdPlaylist.map(menu => (
              <LiMusicMenu
                isActive={menu.selected}
                title={menu.title}
                key={menu.key}
                onClick={() => menuSelect(menu.key)}
              >
                {menu.name}
              </LiMusicMenu>
            ))}
          </ul>
          {playlists.length !== 0 &&
            playlists.map((data: RecentlyPlayedResponse | Track) => (
              data.album ? (
                <CardTrack track={data} key={data.played_at} />
              ) :
                <CardTrack track={data.track} key={data.track.played_at} />
            ))
          }
        </div>
      </Contente>
    </Resize>
  );
};

export default MusicBar;
