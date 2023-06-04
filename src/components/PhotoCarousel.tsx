import type { JSX } from 'preact/jsx-runtime';
import { useEffect } from 'preact/hooks';

export default function PhotoCarousel(): JSX.Element {
    const orderOfPics: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    useEffect(() => {
        let navTrayOne = document.getElementById(`nav-img-1`)
        navTrayOne?.classList.toggle(`opacity-50`)

    });

    return (
        <>
            <div id={`carousel`} class={`carousel w-full overflow-x-hidden`}>
                <div class="absolute flex justify-between translate-y-[380px] left-5 right-5 z-[1] ">
                    <button id={`leftButton`} class={"btn btn-disabled btn-circle"} onClick={() => {
                        scrollImage(false);
                    }}>❮</button> 
                    <button id={`rightButton`} class={"btn btn-circle"} onClick={() => { 
                        scrollImage(true);
                        }}>❯</button>
                </div>
                {orderOfPics.map((num: number) => {
                    return (
                        <div class="carousel-item relative w-full h-[750px] object-cover">
                            <img src={`./main-room/main-room-${num}.jpeg`} class={`w-full object-cover`} />
                        </div>
                    );
                })}
            </div>
            <ul id={`navTray`} class={`carousel carousel-center 2xl:justify-center pt-10 py-4 mx-5 flex flex-row gap-2 overflow-scroll overflow-x-hidden`}>
                {orderOfPics.map((num: number) => {
                    return (
                        <li class="carousel-item min-h-[100px] min-w-[100px]">
                            <img id={`nav-img-${num}`} onClick={() => {
                                navImageClicked(num)
                            }} src={`./main-room/main-room-${num}.jpeg`} class={`w-[100px] h-[100px] object-cover`} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

function navImageClicked(num: number, scroll:boolean = true) {
    const orderOfPics: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    for (let x of orderOfPics) {
        const elm = document.getElementById(`nav-img-${x}`);
        if (x != num) {
            if (elm?.classList.contains(`opacity-50`)) {
                elm.classList.toggle(`opacity-50`)
            }
        } else {
            console.log(`About to toggle opacity for image number: #`, x)
            if (!elm?.classList.contains(`opacity-50`))
                elm?.classList.toggle(`opacity-50`)
        }
    }

    if (scroll) {
        let carousel = document.getElementById(`carousel`);
        const newXPos = window.innerWidth*(num-1);
        carousel?.scrollTo(newXPos, 0);
        toggleButtons(newXPos, carousel?.scrollWidth)
    
    }
    let navTray = document.getElementById(`navTray`)
    const navTrayPos = 100 * (num-7);
    navTray?.scrollTo(navTrayPos,0)
}

function scrollImage(scrollRight:boolean): void {
    let carousel = document.getElementById(`carousel`);
    let newScrollPos = carousel?.scrollLeft;
    if (scrollRight) {
        carousel?.scrollBy(window.innerWidth,0);
        newScrollPos += window.innerWidth;
    }
    else {
        carousel?.scrollBy(-1 * window.innerWidth, 0);
        newScrollPos -= window.innerWidth;
    }

    toggleButtons(newScrollPos, carousel?.scrollWidth);
    // console.log(`newScrollPos / window.innerWidth =`, Math.floor(newScrollPos / window.innerWidth))
    navImageClicked(Math.floor(newScrollPos / (window.innerWidth -10)) + 1, false);
}

function toggleButtons(scrollPos, maxWidth):void {
    let leftButton = document.getElementById('leftButton')
    let rightButton = document.getElementById('rightButton');
    if (scrollPos < window.innerWidth) {
        leftButton?.classList.toggle(`btn-disabled`);
    }
    else if (scrollPos >= maxWidth - window.innerWidth){
        rightButton?.classList.toggle(`btn-disabled`);
    } else  {
        if (leftButton?.classList.contains(`btn-disabled`)) {
            leftButton?.classList.toggle(`btn-disabled`);
        }

        if (rightButton?.classList.contains(`btn-disabled`)) {
            rightButton?.classList.toggle(`btn-disabled`);
        }
    }
}