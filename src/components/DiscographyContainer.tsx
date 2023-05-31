import type { JSX } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks';
import ArtistHub from './ArtistHub';
import "./styles.css"

export default function DiscographyContainer(): JSX.Element {
    // const artists = shuffle(['Candi', 'Cee The Scholar', 'DattkidRob', 'Fearless J', 'Gifted', 'HBK Dolo', 'K5', 'Ken Doll', 'Linko',
    //  'Morgen', 'North Ave Jax', 'NL Preet', 'PMG', 'Rae', 'Rojo', 'Roman Xzavier', 
    //  'Shoda', 'Tay', 'Vernell', 'Winn', 'YG', 'Yung Scrapp', 'Yung Yana']);
    const artists = ['Candi', 'Cee The Scholar', 'DattkidRob', 'Fearless J', 'Gifted', 'HBK Dolo', 'K5', 'Ken Doll', 'Linko',
     'Morgen', 'North Ave Jax', 'NL Preet', 'PMG', 'Rae', 'Rojo', 'Roman Xzavier', 
     'Shoda', 'Tay', 'Vernell', 'Winn', 'YG', 'Yung Scrapp', 'Yung Yana'];

    const [artistToFocus, setArtistToFocus] = useState<string>(``);

    return (
        <>
            <div class={`py-10 flex flex-row justify-center gap-1 flex-wrap`}>
                {artists.map((name: string) => {
                    return(
                        <button htmlFor={`more-info-modal`} class={`image-container`} onClick={() => {
                            setArtistToFocus(name);
                            showModal();
                        }}>
                            <img src={`../artists/${name.split(` `).join('')}.jpeg`} class={` object-cover 2xl:h-[450px] 2xl:w-[450px] h-[300px] w-[300px]`} />
                            <div class={`overlay`}>
                                <p class={'mt-[47%] text-white'}>{name}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
            <ArtistHub name={artistToFocus}/>
        </>
    );
}

function showModal(): void {
    const elm = document.getElementById(`modal-toggle`)
    elm.checked = !elm.checked
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