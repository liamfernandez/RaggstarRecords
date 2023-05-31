// import type { JSX } from 'preact/jsx-runtime';
import song from "../../../public/unreleased_drake.mp3"

export async function get({params, res}: any) {
    // const currentSong = await GetCurrentPlayingSong();
    console.log(`guts of song: `, song);

    return {
        body: song
    }
}