/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

function flipCardOnHover(card) {
    card.classList.add('flipped'); 
}

function revertCard(card) {
    card.classList.remove('flipped'); 
}