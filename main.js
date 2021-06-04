// function onSubmitt() {
//     let formInputs = document.getElementById('input1').value
//     formInputs.forEach( formInput => {
//         let characters = [...formInput]
//         characters.map( character => {
//             if( character == '<' || character == '>' || character == '%' || character == '=' || character == '+' ||character == '{' || character == '}' || character == ']' || character == '[' || character == '(' ||character == ')' || character == '/' || character == ';' || character == '"' || character == '`' ||character == '|'|| character == '#' || character == '*' || character == ':' ) {
//                 alert('Please do not include special characters')
//                 event.preventDefault()
//                 submitted = false
//             } else {
//                 submitted = true
//             }
//         })
//     })
// }

const searchBtn = document.getElementById('form__button')
searchBtn.addEventListener('click', () => {
    let formInputs = document.getElementById('input1').value
    fetch('https://api.duckduckgo.com/?q='+formInputs+'&format=json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res.status)
        console.log(res.statusText)
        let result = JSON.parse(res.body)
    }).then(data => console.log(data)).catch(err => console.error('err'))
})

let home = document.getElementById('home')
home.addEventListener('click', () => { 
fetch('https://api.duckduckgo.com/?q=meow+meow+meow&format=json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        Abstract: 'meow meow meowww',
        AbstractSource: 'Wikipedia',
        AbstractText: 'meow meow meowww',
        AbstractURL: 'https://en.wikipedia.org/wiki/Meow_Meow',
        Answer:'',
        AnswerType:'' ,
        Definition: '',
        DefinitionSource: '',
        DefinitionURL: '',
        Entity: '',
        Heading: 'Meow Meow',
        Image: '',
        ImageHeight: 0,
        ImageIsLogo: 0,
        ImageWidth: 0,
        Infobox: '',
        Redirect: '',
        RelatedTopics: [
            {
                FirstURL: 'https://duckduckgo.com/Melissa_Madden_Gray',
                Icon: {
                    Height: '',
                    URL: '/i/d43f6e86.jpg',
                    Width: ''
                },
                Result: '<a href=\"https://duckduckgo.com/Melissa_Madden_Gray\">Melissa Madden Gray</a> An Australian-born actress, dancer and cabaret performer who tours internationally.',
                Text: 'Melissa Madden Gray An Australian-born actress, dancer and cabaret performer who tours internationally.'
            },
            {
                FirstURL: "https://duckduckgo.com/Mephedrone",
                Icon: {
                    Height: '',
                    URL: '/i/8244503d.png',
                    Width: ''
                },
                Result: '<a href=\"https://duckduckgo.com/Mephedrone\">Mephedrone</a>A synthetic stimulant drug of the amphetamine and cathinone classes.',
                Text: 'Mephedrone A synthetic stimulant drug of the amphetamine and cathinone classes.'
            }
        ],
        Results: [],
        Type: 'D',
        meta: {
            attribution: null,
            blockgroup: null,
            created_date: null,
            description: 'Wikipedia',
            designer: null,
            dev_date: null,
            dev_milestone: 'live',
            developer: [
                {
                    name: 'DDG Team',
                    type: 'ddg',
                    url: 'http://www.duckduckhack.com'
                }
            ],
            example_query: 'nikola tesla',
            id: 'wikipedia_fathead',
            is_stackexchange: null,
            js_callback_name: 'wikipedia',
            live_date: null,
            maintainer: {
                github: 'duckduckgo'
            },
            name: 'Wikipedia',
            perl_module: 'DDG::Fathead::Wikipedia',
            producer: null,
            production_state: 'online',
            repo: 'fathead',
            signal_from: 'wikipedia_fathead',
            src_domain: 'en.wikipedia.org',
            src_id: 1,
            src_name: 'Wikipedia',
            src_options: {
                directory: '',
                is_fanon: 0,
                is_mediawiki: 1,
                is_wikipedia: 1,
                language: 'en',
                min_abstract_length: 20,
                skip_abstract: 0,
                skip_abstract_paren: 0,
                skip_end: 0,
                skip_icon: 0,
                skip_image_name: 0,
                skip_qr: '',
                source_skip: '',
                src_info: ''
            },
            src_url: null,
            status: 'live',
            tab: 'About',
            topic: [
                'productivity'
            ],
            unsafe: 0
        }
    })
}).then(res => {
    console.log(res.status)
    console.log(res.statusText)
    return res.json()
}).then(json => console.log(json)).catch(err => console.error('err'))
})