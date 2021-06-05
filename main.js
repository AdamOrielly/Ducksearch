const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', () => {
    let formInputs = document.getElementById('input1').value
    fetch('https://api.duckduckgo.com/?q='+formInputs+'&format=json').then(res => {
        console.log(res.status)
        console.log(res.statusText)
        console.log(res)
        let resResult = JSON.stringify(res)
        let duckResult = document.getElementById('duck__result')
        duckResult.style.display = 'flex'
        duckResult.innerHTML = `
        <h2>${resResult.Heading}</h2>
        <img src="https://api.duckduckgo.com${resResult.Image}" style="width: 30vw;">
        <p>${resResult.Abstract}</p>
        <h3>${resResult.AbstractSource}</h3>

        `
    }).catch(err => console.error('err'))
})