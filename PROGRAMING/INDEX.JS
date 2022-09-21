const button = document.getElementById('button');
const footer = document.getElementById('footer')
const mainBox = document.getElementById('title')
const synapsis = document.getElementById('synapsis')
const image = document.getElementById('image')

let showList = ['test']


const test = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kitsu.io/api/edge/trending/anime')


    xhr.onload = () => {
        const result = JSON.parse(xhr.response)
        image.src = `${result.data[0].attributes.coverImage.large}`
        mainBox.innerHTML = `<span style="background-color: lime">${result.data[0].attributes.slug}</span>`
        synapsis.innerHTML = `<span style="background-color: yellow">${result.data[0].attributes.synopsis}</span>`
        
        // console.log(result.data[0])
        // console.log(result.data[0].attributes.slug)
        console.log(result.data[0].attributes.coverImage.large)
    }
    xhr.send()

};

button.addEventListener('click', test);



