const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', async () => {
    let formInputs = document.getElementById('input1').value
    await fetch('https://api.duckduckgo.com/?q='+formInputs+'&format=json').then(res => {
        console.log(resp.status)
        console.log(resp.statusText)
        console.log(res)
        let resResult = JSON.parse(res)
        let duckResult = document.getElementById('duck__result')
        duckResult.style.display = 'flex'
        duckResult.innerHTML = `
        <h2>${resResult.Abstract}</h2>
        `
    }).catch(err => console.error('err'))
})