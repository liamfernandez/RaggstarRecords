import type { JSX } from 'preact/jsx-runtime';
import { songMap } from '../strings';
import SongContainer from './SongContainer';
import { useEffect } from 'preact/hooks';

interface IArtistHubProps {
    name: string;
    setModalOpen: (open:boolean) => void;
    isModalOpen: boolean;
}

export default function ArtistPopup(props: IArtistHubProps): JSX.Element {
    const listOfSongs: string[] = songMap[props.name];

    return (
        <>
            <dialog id={`modal-toggle`} class={`modal`}>
                <form method={`dialog`} class={`modal-box bg-gradient-to-bl from-[#1c82e1] to-emerald-400 p-[3px] min-w-[32rem] w-6/12 max-w-5xl`}>
                    <div class={`w-full h-full bg-black rounded-xl p-10`}>
                        <span class={`flex flex-col justify-center items-center`}>
                            <h1 class={`text-3xl font-Druk text-white`}>{props.name.toUpperCase()}</h1>
                        </span>
                        {
                            (!!listOfSongs) ? <SongContainer artistName={props.name} songTitles={listOfSongs} /> : <></>
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

    return (
        <>
            <span class={`flex justify-center`}>
                <div id={`chat-container`} class={`chat chat-start scale-90 mt-10`}>
                    <div class={`chat-image avatar`}>
                        <div class={`rounded-full w-14`}>
                            <img src={`../artists/${props.artist.split(` `).join('')}.jpeg`} class={``} />
                        </div>
                    </div>
                    <div class={`chat-header pl-2 pb-1 opacity-50 text-xs`}>
                        {props.artist}
                    </div>
                    <div class={`chat-bubble bg-[#218aff]`}>
                        {(props.artist !== '') ? <p id={`chat-bubble`} class={`text-left pr-8`}>Check out my music and socials</p> : <></>}
                    </div>
                </div>
            </span>
            <span class={`flex flex-row gap-12 pt-3 justify-center`}>
                <a id={`apple`} class={` border-gray-800 border p-2 rounded-xl opacity-75 hover:opacity-100 hover:border-pink-700`}>
                    <img src={`../socials/applemusic.png`} class={`w-[50px] rounded-2xl`}/>
                </a>
                <a id={`spotify`} class={` border-gray-800 border p-2 rounded-xl opacity-75 hover:opacity-100 hover:border-green-500`}>
                    <img src={`../socials/spotify.svg`} class={`w-[50px]`}/>
                </a>
                <a id={`instagram`} class={` border-gray-800 border p-2 rounded-xl opacity-75 hover:opacity-100 hover:border-purple-600`}>
                    <img src={`../socials/color-IG.svg`} class={`w-[50px]`}/>
                </a>
                <a id={`youtube`} class={` border-gray-800 border p-2 rounded-xl opacity-75 hover:opacity-100 hover:border-red-600`}>
                    <img src={`../socials/color-YT.svg`} class={` pt-1 w-[55px]`}/>
                </a>
            </span>
        </>
    );
}