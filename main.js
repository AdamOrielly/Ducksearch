const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', () => {
    let formInputs = document.getElementById('input1').value
    fetch('https://api.duckduckgo.com/?q='+formInputs+'&format=json').then(res => {
        console.log(res.status)
        console.log(res.statusText)
        console.log(res)
        return data = res.json()
    }).then( data => {
        let result = JSON.parse(data)
        let duckResult = document.getElementById('duck__result')
        duckResult.innerHTML = `
        <h2>${result.Abstract}</h2>
        `
    }).catch(err => console.error('err'))
})