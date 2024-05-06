const legends = ["😎","😎","👌","👌","😁","😁","🤡","🤡","👻","👻","👽","👽","🐔","🐔","🥶","🥶"];

var shullfeLegends = legends.sort(() => (Math.random() > 0.5) ? 2 : -1);

for ( var i = 0; i > legends.length; i++){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML
    card.dataset.name = legends[i];

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(img/${legends[i]}.png)`;

    card.appendChild(front);
    card.appendChild(back);

    document.querySelector('.game-board').appendChild(card);
}