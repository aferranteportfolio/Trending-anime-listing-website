const button = document.getElementById('button');
const footer = document.getElementById('footer')
let showList = []

const newClassGroup = document.createElement("div")
newClassGroup.classList.add("card-group")
newClassGroup.classList.add("row")


document.getElementsByTagName('body')[0].appendChild(newClassGroup);






const test = () => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kitsu.io/api/edge/trending/anime')


    xhr.onload = () => {
        const result = JSON.parse(xhr.response)
       

        


        for (let i=0; i < result.data.length-1; i++) {
            const card1 = document.createElement("div");
            card1.classList.add('col-sm-4')

            newClassGroup.appendChild(card1)

            const card = document.createElement("div");
            card.classList.add('card')

            card1.appendChild(card)
            
            const newImg = document.createElement("img");
            newImg.classList.add('card-img-top')
            card.appendChild(newImg);
            newImg.src = `${result.data[i].attributes.coverImage.large}`

            const cardBody = document.createElement("div");
            cardBody.classList.add('card-body')
            card.appendChild(cardBody)

            const mainTitle = document.createElement('h5')
            mainTitle.classList.add('card-title')
            cardBody.appendChild(mainTitle);
            mainTitle.innerHTML +=`${result.data[i].attributes.slug}`
            
            
            const synapsis = document.createElement('p')
            synapsis.classList.add('card-text')
            cardBody.appendChild(synapsis);
            synapsis.innerHTML += `${result.data[i].attributes.synopsis}`

            

            const rating = document.createElement('footer')
            rating.classList.add('card-text')
            cardBody.appendChild(rating)
            rating.innerHTML += `Rating ${result.data[i].attributes.averageRating}`
            


      

            button.style.display = "none"
        }

    }
    xhr.send()

};



button.addEventListener('click', test);



