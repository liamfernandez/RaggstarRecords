import { error } from '@sveltejs/kit'
import { artists, songMap } from '$lib/strings.js';
// import { GetSongBlob } from '$lib/server/SongDataProvider.js';

export async function GET({ params, setHeaders }) {
  const artistName = params.artist.replaceAll('+', ' ');
  const songName = params.songName.replaceAll('+', ' ');

  if (!artists.includes(artistName)) {
    throw error(404, {
      message: `Artist ${params.artist} is unknown`
    })
  }
  else if (!songMap.get(artistName)?.includes(songName)) {
    throw error(404, {
      message: `Artist ${params.artist} does not have song titled [${params.songName}] available for preview.`
    })
  }

  // const songBlob = await GetSongBlob(params.artist, params.songName);
  const songUrl: string = `https://raggstar-assets.s3.us-east-2.amazonaws.com/songs/${params.artist}/${songName.replaceAll(' ', '').toLowerCase()}.mp3`
  const response = await fetch(songUrl)
  const songBlob = await response.blob()

  setHeaders({
    'Content-Type': "audio/mpeg"
  })

  return new Response(songBlob);
}
