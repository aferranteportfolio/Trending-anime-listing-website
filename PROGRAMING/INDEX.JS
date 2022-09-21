const button = document.getElementById('button');
const footer = document.getElementById('footer')

let showList = ['test']


const test = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kitsu.io/api/edge/trending/anime')


    xhr.onload = () => {

        const result = JSON.parse(xhr.response)
        // console.log(result.data[0])
        // console.log(result.data[0].attributes.slug)
        // console.log(result.data[0].attributes.synopsis)
        footer.textContent = result.data[0].attributes.slug
       

    }
    xhr.send()

};

button.addEventListener('click', test);



