import type { JSX } from 'preact/jsx-runtime';
import "./styles.css"

export default function DiscographyContainer(): JSX.Element {
    const artists = ['Candi', 'Cee The Scholar', 'Fearless J', 'Gifted', 'HBK Dolo', 'K5', 'Ken Doll', 'Linko',
     'Morgen', 'NL Preet', 'Rojo', 'Roman Xzavier', 'Shoda', 'Tay', 'Vernell', 'YG', 'Yung Yana']

     console.log(artists[1].split(` `).join(''))

    return (
        <>
            <div class={`py-10 flex flex-row justify-center gap-1 flex-wrap`}>
                {artists.map((name) => {
                    return(
                        <button class={`image-container`}>
                            <img src={`../artists/${name.split(` `).join('')}.jpeg`} class={` object-cover h-[200px] w-[200px]`} />
                            <div class={`overlay`}>
                                <p class={'mt-[47%] text-white'}>{name}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </>
    );
}


// If needed, shuffle function to shuffle artist cardsyay
function shuffle(array) {
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