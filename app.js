const verbInput = document.getElementById('verb');
const verbSpan = document.getElementById('verb-id');
const btn = document.getElementById('wapify-btn');
const nounInput = document.getElementById('noun');
const nounSpan = document.getElementById('noun-id');
const noun2Input = document.getElementById('noun2');
const noun2Span = document.getElementById('noun2-id');
const noun3Input = document.getElementById('noun3');
const noun3Span = document.getElementById('noun3-id');
const noun4Input = document.getElementById('noun4');
const noun4Span = document.getElementById('noun4-id');
const pluralNounInput = document.getElementById('plural-noun');
const pluralNounSpan = document.getElementById('pluralnoun-id');
const adjectiveInput = document.getElementById('adjective');
const adjectiveSpan = document.getElementById('adjective-id');
const songPlay = document.getElementById('song');


btn.addEventListener('click', ()=> {
    
    verbSpan.textContent = verbInput.value;
    nounSpan.textContent = nounInput.value;
    noun2Span.textContent = noun2Input.value;
    noun3Span.textContent = noun3Input.value;
    noun4Span.textContent = noun4Input.value;
    adjectiveSpan.textContent = adjectiveInput.value;
    pluralNounSpan.textContent = pluralNounInput.value;


    songPlay.play();

    // if (songPlay.play()) {
    //   songPlay.classList.toggle('hidden');
    
    //   setTimeout(()=>{
    //       songPlay.classList.toggle('hidden');
    //   }, 2000);
  
});

