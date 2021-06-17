const slideshow = () => {
    const slideShowImageBoxes = document.querySelectorAll('.slideshow__images--box');
    const slideShowContentBoxes = document.querySelectorAll('.slideshow__contents--box');
    const buttons = document.querySelectorAll('.slideshow__buttons--box');
    const dots = document.querySelectorAll('.slideshow__dots--box');

    const time = 8000;
    let currentSlide = 0;

    const blockEvents = ( ) => {
        Array.from( buttons ).forEach( ( button ) => {
            button.style = `pointer-events: none;`;
        } );
        Array.from( dots ).forEach( ( dot ) => {
            dot.style = `pointer-events: none;`;
        } );
    }

    const allowEvents = ( ) => {
        Array.from( buttons ).forEach( ( button ) => {
            button.style = ``;
        } );
        Array.from( dots ).forEach( ( dot ) => {
            dot.style = ``;
        } );
    }

    const slideChange = ( current, next ) => {

        clearTimeout( slideTimeout );
        blockEvents();

        const currentSlideImageBox = slideShowImageBoxes[ current ];
        const currentSlideContentBox = slideShowContentBoxes[ current ];
        const currentSlideDot = dots[ current ];
        const nextSlideImageBox = slideShowImageBoxes[ next ];
        const nextSlideContentBox = slideShowContentBoxes[ next ];
        const nextSlideDot = dots[ next ];

        currentSlideImageBox.style = `z-index: 2;`;
        currentSlideImageBox.classList.remove( 'select' );

        const slideChanging = setTimeout(
            () => {
                currentSlideImageBox.classList.add('unset');
                currentSlideContentBox.classList.remove( 'select' );
                currentSlideDot.classList.remove('select');
                nextSlideImageBox.classList.add('select');
                nextSlideContentBox.classList.add('select');
                nextSlideDot.classList.add('select');

                const reset = setTimeout(
                    () => {
                        currentSlideImageBox.style = ``;
                        currentSlideImageBox.classList.remove('unset');
                        currentSlide = next;
                        allowEvents();

                        slideTimeout = setTimeout(
                            () => {
                                slideSettlement( next, next + 1 );
                            }, time
                        );

                    }, 1001
                );

            }, 10
        );
    }

    const slideSettlement = ( from, to ) => {

        if ( from === to ){
            return;
        }
        to = to === slideShowImageBoxes.length ? 0 : to;
        to = to === -1 ? slideShowImageBoxes.length - 1 : to;
        slideChange( from, to );
    }

    let slideTimeout = setTimeout(
        () => {
            slideChange(0,1);
        }, time
    );

    Array.from( buttons ).forEach( ( button ) => {
        button.addEventListener( 'click', function() {
            if ( button.classList.contains( 'left' ) ){
                slideSettlement( currentSlide, currentSlide - 1 );
            }else{
                slideSettlement( currentSlide, currentSlide + 1 );
            }
        } );
    } );

    Array.from( dots ).forEach( ( dot, index ) => {
        dot.addEventListener( 'click', function(){
            slideSettlement( currentSlide, index );
        } );
    } );

}