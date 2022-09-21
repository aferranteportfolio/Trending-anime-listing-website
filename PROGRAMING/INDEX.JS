const button = document.getElementById('button');



const test = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kitsu.io/api/edge/trending/anime')

    xhr.onload = () => {
        console.log(xhr.response)
    }

    xhr.send()


};



button.addEventListener('click', test);




