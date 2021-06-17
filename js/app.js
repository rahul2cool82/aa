const app = () => {
    slideshow();
    settleMembersImageBoxes();
    settleInvestmentsImageBoxes();
}

window.addEventListener( 'resize', () => {
    settleMembersImageBoxes();
    settleInvestmentsImageBoxes();
} );
window.addEventListener( 'load', () => {
    settleMembersImageBoxes();
    settleInvestmentsImageBoxes();
} );
app();