const milClock = document.querySelector('.milClock');
const clock = document.querySelector('.clock');
const greeting = document.querySelector('.greeting');
const start = new Date('Janurary 15 2020 7:30:59');
const today = new Date();
const diff = today.getTime() - start.getTime();
const daysJS = Math.round(diff / 1000 / 60 / 60 / 24);
const timestampJS = document.querySelector('.timestampJS');

// CHANGES THE CLOCK EVERY SECOND
const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    //console.log(hours, minutes, seconds);
    const html = `
        <span>${hours}</span>: 
        <span>${minutes}</span>: 
        <span>${seconds}</span>
    `;

    milClock.innerHTML = html;

    if(hours >= 12 && hours <= 17){
        greeting.innerHTML = `Good Afternoon!`;
        greeting.classList.add('afternoon');
        greeting.classList.remove('morning,evening');
    } else if(hours >= 2 && hours < 12){
        greeting.innerHTML = `Good Morning!`;
        greeting.classList.add('morning');
        greeting.classList.remove('afternoon,evening');
    } else{
        greeting.innerHTML = `Good Evening!`;
        greeting.classList.add('evening');
        greeting.classList.remove('afternoon,morning');
    };

};

setInterval(tick, 1000);  // CALLING THE TICK FUNCTION EVERY SECONDS (1000 MILISECONDS)

// console.log(prepend);

const tickTwo = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let prepend = hours >= 12 ? 'PM' : 'AM';
    //console.log(hours, minutes, seconds);
    const html = `
        <span>${hours}</span>: 
        <span>${minutes}</span>: 
        <span>${seconds}</span>
        <span>${prepend}</span>
    `;

    clock.innerHTML = html;

};

setInterval(tickTwo, 1000);

timestampJS.innerHTML = `${daysJS} days`;