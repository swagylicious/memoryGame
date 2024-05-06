console.log('Hello World!');

const legends = ["😎","😎","👌","👌","😁","😁","🤡","🤡","👻","👻","👽","👽","🐔","🐔","🥶","🥶"];

var shullfeLegends = legends.sort(() => (Math.random() > 0.5) ? 2 : -1);

console.log(shullfeLegends);

for ( var i = 0; i < legends.length; i++){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = shullfeLegends[i];

    card.onclick = function(){
        this.classList.add('flip');
        setTimeout(function(){
          if(document.querySelectorAll('.flip').length === 2){
            const [firstCard, secondCard] = document.querySelectorAll('.flip');
            if(firstCard.innerHTML !== secondCard.innerHTML){
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }else{
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
            }
          }
        },500);
    }       
}

