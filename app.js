const verbInput = document.getElementById('verb');
const verbSpan = document.getElementById('verb-id');

const btn = document.getElementById('wapify-btn');

const nounInput = document.getElementById('noun');
const nounSpan = document.getElementById('noun1-id');
const noun2Input = document.getElementById('noun2');
const noun2Span = document.getElementById('noun2-id');
const noun3Input = document.getElementById('noun3');
const noun3Span = document.getElementById('noun3-id');
const noun4Input = document.getElementById('noun4');
const noun4Span = document.getElementById('noun4-id');
const noun5Input = document.getElementById('noun5');
const noun5Span = document.getElementById('noun5-id');
const noun6Input = document.getElementById('noun6');
const noun6Span = document.getElementById('noun6-id');
const pluralNounInput = document.getElementById('plural-noun');
const pluralNounSpan = document.getElementById('pluralnoun-id');
const adjectiveInput = document.getElementById('adjective');
const adjectiveSpan = document.getElementById('adjective-id');
const lyricsBox = document.getElementById('lyrics-box');

const songPlay = document.getElementById('song');

// Simon added this variable on Sunday <<<<<<<---------------------------------------
const musicOff = document.getElementById('music-pause');

btn.addEventListener('click', ()=> {

    verbInput.classList.add('hidden');
    nounInput.classList.add('hidden');
    adjectiveInput.classList.add('hidden');
    pluralNounInput.classList.add('hidden');
    noun6Input.classList.add('hidden');
    noun5Input.classList.add('hidden');
    noun4Input.classList.add('hidden');
    noun3Input.classList.add('hidden');
    noun2Input.classList.add('hidden');
    //lyricsBox.classList.displayContent('lyrics-box');
    //lyricsBox.style.display = lyricsBox.value;



    
    verbSpan.textContent = verbInput.value;
    nounSpan.textContent = nounInput.value;
    noun2Span.textContent = noun2Input.value;
    noun3Span.textContent = noun3Input.value;
    noun4Span.textContent = noun4Input.value;
    adjectiveSpan.textContent = adjectiveInput.value;
    pluralNounSpan.textContent = pluralNounInput.value;
    noun5Span.textContent = noun5Input.value;
    noun6Span.textContent = noun6Input.value;

    songPlay.play();

    
    musicOff.classList.remove('hidden');

    // if (songPlay.play()) {
    //   songPlay.classList.toggle('hidden');
    
    //   setTimeout(()=>{
    //       songPlay.classList.toggle('hidden');
    //   }, 2000);
  
});

musicOff.addEventListener('click', ()=> {

    songPlay.pause();

    
});