import { writable } from "svelte/store";

export const song_locations = writable(new Map<string, string>())

export async function DownloadSong(songName: string, artist_name: string): Promise<Blob> {
  // console.log(`HOST NAME = ${hostName}`)
  // const songUrl: string = `${hostName}/discography/${artistSegment}/${songSegment}`
  // const songUrl: string = `https://raggstar-assets.s3.us-east-2.amazonaws.com/songs/${artistSegment}/`
  const artistSegment = artist_name.split(' ').join('+');
  const songSegment = songName.split(' ').join('+');
  const songUrl: string = `/discography/${artistSegment}/${songSegment}`
  return await fetch(songUrl).then(data => data.blob());
}

export function ResetIndicators(songName: string) {
  // Make sure button of other songs are on play state
  const pauseButtonElement = document.getElementById(`play-pause-${songName}`);
  if (!!pauseButtonElement && pauseButtonElement?.classList.contains(`paused`)) {
    pauseButtonElement.classList.toggle(`paused`);
  }
  // Make sure timestamp on others is empty
  const timeStampElement = document.getElementById(`timeStamp-${songName}`);
  if (!!timeStampElement && timeStampElement.innerHTML !== '0:00') {
    timeStampElement.innerHTML = '0:00';
  }
  // Reset progress bar of old song
  const progressBarElement = document.getElementById(
    `progressBar-${songName}`
  ) as HTMLProgressElement | null;
  if (!!progressBarElement) {
    progressBarElement.value = 0;
  }
}
