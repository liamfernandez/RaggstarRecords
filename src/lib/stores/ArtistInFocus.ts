import { writable } from 'svelte/store';

export const artist_name = writable("");

export const modal_open = writable(false);

export const currentPlayingSong = writable("");
