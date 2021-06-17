const settleMembersImageBoxes = () => {
    const boxes = document.querySelectorAll('.team__member img');
    Array.from( boxes ).forEach( ( box ) => {
        box.style.height = `${box.getBoundingClientRect().width}px`;
    } );
}