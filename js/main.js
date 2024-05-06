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
            // if(document.querySelectorAll('.flip').length > 1){
                
            //     if(document.querySelectorAll('.flip')[0].innerHTML == document.querySelectorAll('.flip')[1].innerHTML){

            //         document.querySelectorAll('.flip')[0].classList.add('match');

            //         document.querySelectorAll('.flip')[1].classList.add('match');

            //         document.querySelectorAll('.flip')[0].classList.remove('flip');    
                    
            //         document.querySelectorAll('.flip')[1].classList.remove('flip');

            //         if(document.querySelectorAll('.match').length == legends.length){
            //             alert('You Win!');
            //         }
            //     }else{
            //         document.querySelectorAll('.flip')[0].classList.remove('flip');    
                    
            //         document.querySelectorAll('.flip')[1].classList.remove('flip');
            //     }
            // }
            
            if(document.querySelectorAll('.flip')[0].innerHTML == document.querySelectorAll('.flip')[1].innerHTML){
                document.querySelectorAll('.flip')[0].classList.add('match');
                document.querySelectorAll('.flip')[1].classList.add('match');
            }
            
            document.querySelectorAll('.flip')[0].classList.remove('flip');    
            
            document.querySelectorAll('.flip')[1].classList.remove('flip');
            
            if(document.querySelectorAll('.match').length == legends.length){
                alert('You Win!');
            }
            
            Array.from(document.querySelectorAll('.card')).forEach(card => {
                card.onclick = arguments.callee;
            });
        },500);
    };

    document.querySelector('.game').appendChild(card);
}

