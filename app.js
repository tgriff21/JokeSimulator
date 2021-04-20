const jokes = document.querySelector('#jokes');
const jokeButton = document.querySelector('#jokeButton');
const share = document.querySelector('#share');



const getDadJoke = async () =>{
    const config = await fetch('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'} })
    const jokeObj = await config.json();
    jokes.innerHTML = jokeObj.joke;
}











// Tweet a Quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${jokes.textContent}`;
    window.open(twitterUrl, '_blank');

}




jokeButton.addEventListener('click', getDadJoke);
share.addEventListener('click', tweetQuote);


