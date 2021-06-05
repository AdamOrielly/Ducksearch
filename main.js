const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', () => {
    let formInputs = document.getElementById('input1').value
    fetch('https://api.duckduckgo.com/?q='+formInputs+'&format=json', {
        method: 'GET'
    }).then(res => {
        console.log(res.status)
        console.log(res.statusText)
        console.log(res)
        console.log(res.body)
        let result = JSON.parse(res.body)
    }).then(data => console.log(data)).catch(err => console.error('err'))
})