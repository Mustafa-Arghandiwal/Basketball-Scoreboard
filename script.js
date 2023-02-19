
let homeMonitor, awayMonitor, homeScore, awayScore, homeState, awayState;


homeMonitor = document.querySelector('.home-screen');
awayMonitor= document.querySelector('.away-screen');
// homeScore = homeMonitor.innerText;
// awayScore = awayMonitor.innerText;

const init = () => {
    homeMonitor.innerText = 0;
    awayMonitor.innerText = 0;
    homeMonitor.classList.remove('losing');
    homeMonitor.classList.remove('leading');
    homeMonitor.classList.add('normal');
    awayMonitor.classList.remove('losing');
    awayMonitor.classList.remove('leading');
    awayMonitor.classList.add('normal');
}
init();

// highlighting the lead
// highlightTheLead();
const highlightTheLead = () => {

    let homeIntScore = parseInt(homeMonitor.innerText);
    let awayIntScore = parseInt(awayMonitor.innerText);

    homeMonitor.classList.remove('leading');
    homeMonitor.classList.remove('losing');
    homeMonitor.classList.remove('normal');
    awayMonitor.classList.remove('leading');
    awayMonitor.classList.remove('losing');
    awayMonitor.classList.remove('normal');


    if (homeIntScore > awayIntScore) {
        homeState = 'leading';
        awayState = 'losing';
    } else if (homeIntScore < awayIntScore) {
        homeState = 'losing';
        awayState = 'leading';

    } else if (homeIntScore === awayIntScore) {
        homeState = 'normal';
        awayState = 'normal';
    }



    if (homeState === 'leading') {

        // homeMonitor.classList.remove('losing')
        // homeMonitor.classList.remove('normal');
        homeMonitor.classList.add('leading');
        // awayMonitor.classList.remove('leading');
        // awayMonitor.classList.remove('normal');
        awayMonitor.classList.add('losing');

       
        
    } else if (awayState === 'leading') {
        
        // homeMonitor.classList.remove('leading');
        // homeMonitor.classList.remove('normal');
        homeMonitor.classList.add('losing');
        // awayMonitor.classList.remove('losing');
        // awayMonitor.classList.remove('normal');
        awayMonitor.classList.add('leading');
        
    } else if (awayState === homeState) {
        
        // homeMonitor.classList.remove('losing');
        // homeMonitor.classList.remove('leading');
        homeMonitor.classList.add('normal');
        // awayMonitor.classList.remove('losing');
        // awayMonitor.classList.remove('leading');
        awayMonitor.classList.add('normal');
    }
}


//reset 
document.querySelector('.reset-btn').addEventListener('click', () => {
    init();
    const resetIcon = document.querySelector('.reset-icon');
    resetIcon.classList.remove('spin')
    resetIcon.offsetWidth;
    resetIcon.classList.add('spin')
    
})
// document.querySelector('.reset-icon').classList.remove('spin')


// Home add score
document.querySelector('.home-plus-one').addEventListener('click', () => {

    homeScore = homeMonitor.innerText;
    homeScore = parseInt(homeScore);
    homeMonitor.innerText = homeScore + 1
    highlightTheLead();
    
})

document.querySelector('.home-plus-two').addEventListener('click', () => {

    homeScore = homeMonitor.innerText;
    homeScore = parseInt(homeScore);
    homeMonitor.innerText = homeScore + 2;
    highlightTheLead();

    
})

document.querySelector('.home-plus-three').addEventListener('click', () => {

    homeScore = homeMonitor.innerText;
    homeScore = parseInt(homeScore);
    homeMonitor.innerText = homeScore + 3;
    highlightTheLead();

    
})

document.querySelector('.home-minus-one').addEventListener('click', () => {

    homeScore = homeMonitor.innerText;
    homeScore = parseInt(homeScore);
    if (homeMonitor.innerText != 0) {
        homeMonitor.innerText = homeScore - 1;
    }
    highlightTheLead();


})

// Away add score

document.querySelector('.away-plus-one').addEventListener('click', () => {

    awayScore = awayMonitor.innerText;
    awayScore = parseInt(awayScore);
    awayMonitor.innerText = awayScore + 1

    highlightTheLead();

    
})

document.querySelector('.away-plus-two').addEventListener('click', () => {

    awayScore = awayMonitor.innerText;
    awayScore = parseInt(awayScore);
    awayMonitor.innerText = awayScore + 2

    highlightTheLead();

    
})

document.querySelector('.away-plus-three').addEventListener('click', () => {

    awayScore = awayMonitor.innerText;
    awayScore = parseInt(awayScore);
    awayMonitor.innerText = awayScore + 3
    highlightTheLead();

    
})

document.querySelector('.away-minus-one').addEventListener('click', () => {

    awayScore = awayMonitor.innerText;
    awayScore = parseInt(awayScore);
    if (awayMonitor.innerText != 0) {
        awayMonitor.innerText = awayScore - 1
        
    } 
    
    highlightTheLead();

})









