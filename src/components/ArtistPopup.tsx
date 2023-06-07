import type { JSX } from 'preact/jsx-runtime';
import { songMap } from '../strings';
import SongContainer from './SongContainer';
import { useEffect } from 'preact/hooks';
import { appleMusicMap, instagramMap, spotifyMap, youtubeMap } from '../strings';

interface IArtistHubProps {
    name: string;
    setModalOpen: (open:boolean) => void;
    isModalOpen: boolean;
    songLocations: Map<string, string>;
    setSongLocations: (songFiles: Map<string, string>) => void;
}

export default function ArtistPopup(props: IArtistHubProps): JSX.Element {
    const listOfSongs: string[] | undefined = songMap.get(props.name);

    return (
        <>
            <dialog id={`modal-toggle`} class={`modal`}>
                <form method={`dialog`} class={`modal-box bg-gradient-to-bl from-[#1c82e1] to-emerald-400 p-[3px] min-w-[400px] w-6/12 max-w-5xl`}>
                    <div class={`w-full h-full bg-black rounded-xl pb-10 px-3 md:p-10`}>
                        <span class={`md:hidden flex justify-end -mb-9 -mr-2`}>
                            <form method={`dialog`}>
                                <button class={`btn btn-circle bg-white scale-[0.58] text-lg text-black`} onClick={() => props.setModalOpen(false)}>X</button>
                            </form>
                        </span>
                        <span class={`flex flex-col justify-center items-center`}>
                            <h1 class={`text-3xl font-Druk text-white`}>{props.name.toUpperCase()}</h1>
                        </span>
                        {
                            (!!listOfSongs && props.isModalOpen) ? 
                            <SongContainer 
                                setSongLocations={props.setSongLocations} 
                                songLocations={props.songLocations} 
                                artistName={props.name} songTitles={listOfSongs} /> : <></>
                        }
                        <Socials artist={props.name} modalOpen={props.isModalOpen} /> 
                    </div>
                </form>
                <form method={`dialog`} class={`modal-backdrop`}>
                    <button onClick={() => props.setModalOpen(false)}></button>
                </form>
            </dialog>
        </>
    );
}

interface ISocialsProps {
    artist: string;
    modalOpen: boolean;
}

function Socials(props: ISocialsProps): JSX.Element {
    useEffect(() => {
        const elm = document.getElementById(`chat-bubble`);
        elm?.classList.toggle(`typewriter`);
    }, [props.modalOpen]);

    const hasInstagram = instagramMap.has(props.artist);
    const hasYoutube = youtubeMap.has(props.artist);
    const hasSpotify = spotifyMap.has(props.artist);
    const hasAppleMusic = appleMusicMap.has(props.artist);

    const chatBubbleString = (!hasSpotify && !hasAppleMusic) ? 'Check out my socials' : 'Check out my music and socials';

    return (
        <>
            <span class={`flex justify-center mx-10`}>
                <div id={`chat-container`} class={`chat chat-start scale-90 pt-4 md:pt-10`}>
                    <div class={`chat-image avatar`}>
                        <div class={`rounded-full w-14`}>
                            <img src={`../artists/${props.artist.split(` `).join('')}.jpeg`} class={``} />
                        </div>
                    </div>
                    <div class={`chat-header pl-2 pb-1 opacity-50 text-xs`}>
                        {props.artist}
                    </div>
                    <div class={`chat-bubble bg-[#218aff]`}>
                        {(props.artist !== '') ? <p id={`chat-bubble`} class={`text-left pr-8`}>{chatBubbleString}</p> : <></>}
                    </div>
                </div>
            </span>
            <span class={`flex flex-row gap-8 md:gap-12 pt-3 px-10 md:px-0 justify-center`}>
                {AppleMusicIcon(hasAppleMusic, props.artist)}
                {SpotifyIcon(hasSpotify, props.artist)}
                {InstagramIcon(hasInstagram, props.artist)}
                {YoutubeIcon(hasYoutube, props.artist)}
            </span>
        </>
    );
}

function AppleMusicIcon(hasAppleMusic: boolean, artist: string): JSX.Element {
    return ((!hasAppleMusic) ? 
        <></> 
        :
        <a href={appleMusicMap.get(artist)} class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-pink-700 border-pink-700`}>
            <img src={`../socials/applemusic.png`} class={`w-[50px] rounded-2xl`}/>
        </a>
    );
}

function SpotifyIcon(hasSpotify: boolean, artist: string): JSX.Element {
    return ((!hasSpotify) ? 
        <></> 
        :
        <a href={spotifyMap.get(artist)} class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-green-500 border-green-500`}>
            <img src={`../socials/spotify.svg`} class={`w-[50px]`}/>
        </a>
    );
}

function InstagramIcon(hasInstagram: boolean, artist: string): JSX.Element {
    return ((!hasInstagram) ? 
        <></> 
        :
        <a href={instagramMap.get(artist)} class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-purple-600 border-purple-600`}>
            <img src={`../socials/color-IG.svg`} class={`w-[50px]`}/>
        </a>
    );
}

function YoutubeIcon(hasYoutube: boolean, artist: string): JSX.Element {
    return ((!hasYoutube) ? 
        <></> 
        :
        <a href={youtubeMap.get(artist)} class={`md:border-gray-800 border p-2 rounded-xl md:opacity-75 md:hover:opacity-100 md:hover:border-red-600 border-red-600`}>
            <img src={`../socials/color-YT.svg`} class={` pt-1 w-[55px]`}/>
        </a>
    );
}