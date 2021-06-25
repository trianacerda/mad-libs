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

btn.addEventListener('click', ()=> {
    const verb = (verbInput.value);
    verbSpan.textContent = verbInput.value;
});