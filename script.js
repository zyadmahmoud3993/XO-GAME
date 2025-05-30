let player = 'x';
let element = document.getElementsByClassName('box');
let title = document.querySelector('.title');
let reset = document.getElementById('reset');
let ok = document.querySelector('.alert');
let btn_ok = document.querySelector('.btn-ok');
let audio_1 = new Audio('music/1.mp3');
let audio_2 = new Audio('music/2.mp3');
let audio_3 = new Audio('music/3.mp3');
let effect = document.querySelector('.effect');
let play_music = false;


audio_2.loop = true;

if (!localStorage.getItem('continue')) {
        ok.style.display = 'block';
        audio_2.pause();
}



btn_ok.addEventListener('click', Continue);
reset.addEventListener('click', resett)

Array.from(element).forEach((el) => {
    el.addEventListener('click', changePlayer);
})

function changePlayer(thisElement) {
    if(!play_music) {
        audio_2.play();
        play_music = true;
    }
    audio_1.pause();
    audio_1.play();
    thisElement.target.removeEventListener('click', changePlayer);
    thisElement.target.innerText = player;
    thisElement.target.classList.add(player == 'o' ? 'o' : "x");
    player = player === 'x' ? 'o' : 'x';
    title.innerText = player;
    win();
}

function win() {
    if (element[0].innerText === element[1].innerText && element[1].innerText === element[2].innerText && element[0].innerText !== '') {
        title.innerText = `${element[0].innerText}  winner!`;
        element[0].classList.add('done');
        removeEventListener();
        done([element[0], element[1], element[2]]);
    }

    else if (element[3].innerText === element[4].innerText && element[4].innerText === element[5].innerText && element[3].innerText !== '') {
        title.innerText = `${element[3].innerText}  winner!`;
        element[3].classList.add('done');
        removeEventListener();
        done([element[3], element[4], element[5]]);

    }
    else if (element[6].innerText === element[7].innerText && element[7].innerText === element[8].innerText && element[6].innerText !== '') {
        title.innerText = `${element[6].innerText}  winner!`;
        element[6].classList.add('done');
        removeEventListener();
        done([element[6], element[7], element[8]]);

    }
    else if (element[0].innerText === element[3].innerText && element[3].innerText === element[6].innerText && element[0].innerText !== '') {
        title.innerText = `${element[0].innerText}  winner!`;
        element[0].classList.add('donecol');
        removeEventListener();
        done([element[0], element[3], element[6]]);

    }
    else if (element[1].innerText === element[4].innerText && element[4].innerText === element[7].innerText && element[1].innerText !== '') {
        title.innerText = `${element[1].innerText}  winner!`;
        element[1].classList.add('donecol');
        removeEventListener();
        done([element[1], element[4], element[7]]);

    }
    else if (element[2].innerText === element[5].innerText && element[5].innerText === element[8].innerText && element[2].innerText !== '') {
        title.innerText = `${element[2].innerText}  winner!`;
        element[2].classList.add('donecol');
        removeEventListener();
        done([element[2], element[5], element[8]]);
    }
    else if (element[0].innerText === element[4].innerText && element[4].innerText === element[8].innerText && element[0].innerText !== '') {
        title.innerText = `${element[0].innerText}  winner!`;
        element[0].classList.add('doneXR');
        removeEventListener();
        done([element[0], element[4], element[8]]);
    }
    else if (element[2].innerText === element[4].innerText && element[4].innerText === element[6].innerText && element[2].innerText !== '') {
        title.innerText = `${element[2].innerText}  winner!`;
        element[0].classList.add('doneXL');
        removeEventListener();
        done([element[2], element[4], element[6]]);
    }
}

function done(alldone = [element1, element2, element3]) {
    alldone.forEach((element) => {
        element.classList.add('win');
    });
    effect.style.display = 'block';
    setTimeout(() => {
            audio_3.play();

    }, 1000);
    reset.style.visibility = 'visible';
}

function removeEventListener() {
    Array.from(element).forEach((el) => {
        el.removeEventListener('click', changePlayer);
    })
}



function resett() {
    Array.from(element).forEach((el) => {
        el.innerText = '';
        el.classList.remove('done', 'donecol', 'doneXR', 'doneXL', 'win', 'x', 'o');
        el.addEventListener('click', changePlayer);
    })

    player = 'x';
    title.innerText = 'GAME X-O';
    reset.style.visibility = 'hidden';
    effect.style.display = 'none';

}


function Continue() {
    audio_2.pause();
    audio_2.play();
    localStorage.setItem('continue', 'false');
    ok.style.display = 'none';
}


