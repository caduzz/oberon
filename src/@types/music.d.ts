/* eslint-disable camelcase */

interface Device {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
    supports_volume: boolean;
}
  
export interface ExternalUrls {
    spotify: string;
}
  
export interface Artist {
    external_urls: ExternalUrls;
    followers: { href: string; total: number };
    genres: string[];
    href: string;
    id: string;
    images: { url: string; height: number; width: number }[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: { url: string; height: number; width: number }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: { reason: string };
    type: string;
    uri: string;
    artists: Artist[];
}
  
export interface ExternalIds {
    isrc: string;
    ean: string;
    upc: string;
}
  
export interface Item {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: object; // Pode ser definido de forma mais específica
    restrictions: { reason: string };
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}
  
export interface Context {
    type: string;
    href: string;
    external_urls: ExternalUrls;
    uri: string;
}
  
export interface Actions {
    interrupting_playback: boolean;
    pausing: boolean;
    resuming: boolean;
    seeking: boolean;
    skipping_next: boolean;
    skipping_prev: boolean;
    toggling_repeat_context: boolean;
    toggling_shuffle: boolean;
    toggling_repeat_track: boolean;
    transferring_playback: boolean;
}
  
export interface CurrentlyPlayingResponse {
    device: Device;
    repeat_state: string;
    shuffle_state: boolean;
    context: Context;
    timestamp: number;
    progress_ms: number;
    is_playing: boolean;
    item: Item;
    currently_playing_type: string;
    actions: Actions;
}