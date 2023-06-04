import { useEffect, useState, useRef } from 'preact/hooks';
import type { JSX } from 'preact/jsx-runtime';
import { songMap } from '../strings';
import SongContainer from './SongContainer';

interface IArtistHubProps {
    name: string;
}

export default function ArtistPopup(props: IArtistHubProps): JSX.Element {
    const listOfSongs: string[] = songMap[props.name];
    // console.log(`${listOfSongs}`);

    return (
        <>
            <dialog id={`modal-toggle`} class={`modal`}>
                <form method={`dialog`} class={`modal-box bg-gradient-to-bl from-[#1c82e1] to-emerald-400 p-[3px] min-w-[32rem] w-7/12 max-w-5xl`}>
                    <div class={`w-full h-full bg-[#434343] bg-black rounded-xl p-10`}>
                        <span class={`flex flex-col justify-center items-center`}>
                            <h1 class={`text-3xl font-Druk text-white`}>{props.name.toUpperCase()}</h1>
                        </span>
                        {
                            (!!listOfSongs) ? <SongContainer artistName={props.name} songTitles={listOfSongs} /> : <></>
                        }
                    </div>
                </form>
                <form method={`dialog`} class={`modal-backdrop`}>
                    <button></button>
                </form>
            </dialog>
        </>
    );
}