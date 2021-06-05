const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', () => {
    let formInputs = document.getElementById('input1').value
    fetch('https://api.duckduckgo.com/?q='+formInputs+'&format=json').then(res => {
        console.log(res.status)
        console.log(res.statusText)
        console.log(res)
        
        let duckResult = document.getElementById('duck__result')
        duckResult.style.display = 'flex'
        duckResult.innerHTML = `
        <h2>${res.Heading}</h2>
        <img src="${res.Image}" style="width: 20vw;">
        <p>${res.Abstract}</p>
        <h3>${res.AbstractSource}</h3>

        `
    }).catch(err => console.error('err'))
})