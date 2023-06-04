import type { JSX } from 'preact/jsx-runtime';
import { useEffect, useState } from 'preact/hooks';
import ArtistPopup from './ArtistPopup';
import { artists } from '../strings';
import "./styles.css"

export default function DiscographyContainer(): JSX.Element {
    const [artistToFocus, setArtistToFocus] = useState<string>(``);

    return (
        <>
            <div class={`py-10 flex flex-row justify-center gap-1 flex-wrap`}>
                {artists.map((name: string) => {
                    return(
                        <button htmlFor={`more-info-modal`} class={`image-container`} onClick={() => {
                            showModal(name);
                        }}>
                            <img src={`../artists/${name.split(` `).join('')}.jpeg`} class={`object-cover 2xl:h-[450px] 2xl:w-[450px] h-[300px] w-[300px]`} />
                            <div class={`overlay`}>
                                <p class={'mt-[47%] text-white 2xl:text-2xl'}>{name}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
            <ArtistPopup name={artistToFocus}/>
        </>
    );

    function showModal(nameOfArtist:string): void {
        setArtistToFocus(nameOfArtist); 
        document.getElementById(`modal-toggle`).showModal()
    }
}


// If needed, shuffle function to shuffle artist cardsyay
function shuffle(array: any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }