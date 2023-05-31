import { useEffect, useState, useRef } from 'preact/hooks';
import type { JSX } from 'preact/jsx-runtime';

interface IArtistHubProps {
    name: string;
}

export default function ArtistHub(props: IArtistHubProps): JSX.Element {
    const audioRef = useRef(null);
    const [srcUrl, setSrcUrl] = useState<string>('')

    if (props.name !== '') {
        useEffect(() => {
            setSrcUrl('https://raggstar-assets.s3.us-east-2.amazonaws.com/songs/unreleased_drake.mp3');
            // const fetchData = async () => {
            //     const res = await fetch();
            //     const blob = new Blob([res.formData.Body], {type:'audio/mp3'});

            // }
    
            // fetchData();
        })
    }

    const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      };
    
      const pauseAudio = () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      };

    return (
        <>
            <input type="checkbox" id="modal-toggle" className="modal-toggle" />
            <div className="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">Congratulations random Internet user aka {props.name}!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <button onClick={playAudio}>Play</button>
                    <button onClick={pauseAudio}>Pause</button>
                    <audio ref={audioRef} src={srcUrl} controls />
                    <div class="modal-action">
                        <label for="modal-toggle" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
}