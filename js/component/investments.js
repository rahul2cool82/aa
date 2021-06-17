const settleInvestmentsImageBoxes = () => {
    const boxes = document.querySelectorAll( '.investments__block img' );
    Array.from( boxes ).forEach( (box) => {
        box.style.height = `${box.getBoundingClientRect().width}px`;
    } );
}