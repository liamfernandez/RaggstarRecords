import type { JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import ArtistPopup from './ArtistPopup';
import { artists } from '../strings';
import "./styles.css"

export default function DiscographyContainer(): JSX.Element {
    const [artistToFocus, setArtistToFocus] = useState<string>(``);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [songLocations, setSongLocations] = useState<Map<string,string>>(new Map<string,string>());

    // UseEffect hook handles URLs per artist
    useEffect(() => {
        let url:string = ''; 
        url = window.location.href;

        if (url.indexOf('?') != -1)
        {
            let artistQuery:string = url.split('?')[1];
            if (artistQuery.includes('%20')) {
                artistQuery = artistQuery.split('%20').join(' ')
            }

            if (artists.includes(artistQuery)) {
                showModal(artistQuery);
            }
        }
    }, [])

    return (
        <>
            <div class={`md:py-10 pb-10 pt-4 flex flex-row justify-center gap-3 md:gap-1 flex-wrap`}>
                {artists.map((name: string) => {
                    return(
                        <button htmlFor={`more-info-modal`} class={`image-container`} onClick={() => {
                            showModal(name);
                        }}>
                            <p class={`md:hidden text-left text-xs`}>{name}</p>
                            <img src={`../artists/${name.split(` `).join('')}.jpeg`} class={`object-cover 2xl:h-[450px] 2xl:w-[450px] h-[300px] w-[300px]`} />
                            <div class={`hidden md:block overlay`}>
                                <p class={'mt-[47%] text-white 2xl:text-2xl'}>{name}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
            <ArtistPopup setSongLocations={setSongLocations} songLocations={songLocations} name={artistToFocus} setModalOpen={setModalOpen} isModalOpen={modalOpen} />
        </>
    );

    function showModal(nameOfArtist:string): void {
        setArtistToFocus(nameOfArtist); 
        document.getElementById(`modal-toggle`).showModal();
        setModalOpen(true);
    }
}