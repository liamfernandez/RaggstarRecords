import { useEffect, useState, useRef } from 'preact/hooks';
import type { JSX } from 'preact/jsx-runtime';

interface ISongContainerProps {
    songTitles: string[];
    artistName: string;
    songLocations: Map<string, string>;
    setSongLocations: (songFiles: Map<string, string>) => void;
}

export default function SongContainer(props: ISongContainerProps):JSX.Element {
    const [currentPlayingSong, setCurrentPlayingSong] = useState<string>('');
    const audioRef = useRef<HTMLAudioElement>(null);
    
    if (props.songTitles.length < 1) {
        return (
            <div>
                <p class={`text-center text-white text-xs`}>We don't do snippets. This artist has been recording with RaggStar but hasn't dropped yet. Stay tuned.</p>
            </div>
        );
    }
    else {
        useEffect(() => {
            if (currentPlayingSong === '') {
                return;
            }
            let isMounted = true;

            if (!props.songLocations.has(currentPlayingSong)) {
                const loadingElm = document.getElementById(`loading-${currentPlayingSong}`);
                loadingElm?.classList.toggle(`hidden`);
                const playPause = document.getElementById(`play-pause-${currentPlayingSong}`);
                playPause?.classList.toggle(`hidden`);

                const songData = DownloadSong(currentPlayingSong);
                songData.then((blob) => {
                    const blobLocation = URL.createObjectURL(blob);
                    props.songLocations.set(currentPlayingSong, blobLocation);
                    audioRef.current.src = blobLocation;
                    loadingElm?.classList.toggle(`hidden`);
                    playPause?.classList.toggle(`hidden`);
                    audioRef.current.play();
                    if (isMounted) {
                        props.setSongLocations(props.songLocations);
                    }
                });
            }
            else {
                console.log(`we got the location loaded already`);
                audioRef.current.src = props.songLocations.get(currentPlayingSong);
                audioRef.current.play();
            }

            return () => { isMounted = false; }
        }, [currentPlayingSong])
        
        return (
            <>
                <ul class={`flex flex-col gap-2 pb-2 pt-5`}>
                    {props.songTitles.map((songName) => {
                        return (
                            <li class={`wait-for-hov p-[2px]`}>
                                <div class={`items-center p-2 justify-between flex flex-row bg-[#262626]`}>
                                    <span class={`play-pause`} id={`play-pause-${songName}`} onClick={() => { PlaySong(songName) }} />
                                    <p class={`text-white`}>{songName}</p>
                                    <span class={`flex flex-row gap-2 items-center`}>
                                        <span id={`timeStamp-${songName}`} class={` text-gray-500 text-xs`}>0:00</span>
                                        <progress id={`progressBar-${songName}`} class={`bg-white progress progress-info w-16 md:w-32`} value={0} max={100} />
                                    </span>
                                    <span id={`loading-${songName}`} class={`hidden loading loading-spinner text-[#3ca5e6]`}></span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <p class={`text-xs text-left pb-2 text-gray-500`}>Recorded at RaggStar Studios</p>
                <audio id={`audio-player`} ref={audioRef} type={`audio/mpeg`} onTimeUpdate={UpdateSongTracking}/>
            </>
        );
    }

    function UpdateSongTracking(elm: JSX.TargetedEvent<HTMLAudioElement, Event>) {
        // Grab HTML Elements to update
        const timeStampElement = document.getElementById(`timeStamp-${currentPlayingSong}`);
        const progressBarElement: HTMLProgressElement = document.getElementById(`progressBar-${currentPlayingSong}`) as HTMLProgressElement;
        // Update progress bar
        const percentageOfSong = (elm.currentTarget.currentTime / elm.currentTarget.duration)*100;
        progressBarElement.value = (Number.isNaN(elm.currentTarget.duration)) ? 0 : Math.floor(percentageOfSong);
        //update timestamp
        const secondsPlayedOfSong = Math.floor(elm.currentTarget.currentTime) + 1;
        const minutesPlayedOfSong = Math.floor(secondsPlayedOfSong / 60);

        let secondsString = `${secondsPlayedOfSong % 60}`;

        if (secondsPlayedOfSong < 10) {
            secondsString = '0' + secondsPlayedOfSong;
        }
        if (!Number.isNaN(elm.currentTarget.duration)) {
            const newTimeStamp:string = `${minutesPlayedOfSong}:${secondsString}`
            timeStampElement.innerHTML = newTimeStamp;
        }
        else {
            timeStampElement.innerHTML = '';
        }
    }


    function PlaySong(songName:string) {
        document.getElementById(`play-pause-${songName}`)?.classList.toggle(`paused`);
        let songIsPlaying = !audioRef.current.paused;
        let songSwitched = false;

        if (currentPlayingSong !== songName) {
            //Make sure button of other songs are on play state
            const lastSongPauseButton = document.getElementById(`play-pause-${currentPlayingSong}`)
            if (lastSongPauseButton?.classList.contains(`paused`)) {
                lastSongPauseButton.classList.toggle(`paused`);
            }
            const oldSong = currentPlayingSong;
            setCurrentPlayingSong(songName);
            songSwitched = true;

            const oldSongTimeStampElement = document.getElementById(`timeStamp-${oldSong}`);
            if (oldSongTimeStampElement != null && oldSongTimeStampElement.innerHTML !== '0:00') {
                oldSongTimeStampElement.innerHTML = ''
            }
        }

        if (!songSwitched) {
            if (songIsPlaying) {
                audioRef.current.pause();
            }
            else {
                audioRef.current.play();
            }
        }
    }

    async function DownloadSong(songName: string):Promise<Blob> {
        const artistSegment = props.artistName.split(' ').join('+');
        const songUrl:string = `https://raggstar-assets.s3.us-east-2.amazonaws.com/songs/${artistSegment}/`
        return await fetch(`${songUrl}${songName.split(' ').join('').toLowerCase()}.mp3`).then(data => data.blob());
    }
}