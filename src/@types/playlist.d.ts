/* eslint-disable camelcase */
interface Artist {
  name: string;
}

interface Album {
  id: string;
  name: string;
  images: [{ url: string }];
  uri: string;
  type: string;
  total_tracks: number;
}

export interface Track {
  name: string;
  artists: Artist[];
  album: Album;
  played_at: string;
  id: string;
}

export interface RecentlyPlayedResponse {
  track: Track;
  album: false;
  played_at: string;
}
