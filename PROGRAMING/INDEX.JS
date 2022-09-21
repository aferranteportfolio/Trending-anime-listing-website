const button = document.getElementById('button');
const footer = document.getElementById('footer')
let showList = []


const test = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kitsu.io/api/edge/trending/anime')


    xhr.onload = () => {
        const result = JSON.parse(xhr.response)

        for (let i=0; i < result.data.length-1; i++) {
            const newDiv = document.createElement("div");
            const newImg = document.createElement("img");
            newImg.src = `${result.data[i].attributes.coverImage.large}`
            const synapsis = document.createElement('span')
            synapsis.innerHTML += `${result.data[i].attributes.synopsis}`
            const rating = document.createElement('footer')
            rating.innerHTML += `Rating ${result.data[i].attributes.averageRating}`
            const mainTitle = document.createElement('header')
            mainTitle.innerHTML +=`${result.data[i].attributes.slug}`
            newDiv.appendChild(newImg);
            newDiv.appendChild(mainTitle);
            newDiv.appendChild(synapsis);
            newDiv.appendChild(rating);   
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);

            button.style.display = "none"
        }

    }
    xhr.send()

};



button.addEventListener('click', test);



