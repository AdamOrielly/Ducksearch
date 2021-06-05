const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', () => {
    let formInputs = document.getElementById('input1').value
    Headers.get('https://api.duckduckgo.com/?q='+formInputs+'&format=json')
    console.log(Headers.get('https://api.duckduckgo.com/?q='+formInputs+'&format=json'))
})