
// const list = []
// async function fetchData() {
//     try {
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then(response => response.json())
//             .then(json => list.push(json))
//         list.forEach(item => {
//             const li = document.createElement('li')
//             console.log(item)
//             li.textContent = item.title
//             listContainer.append(li)
//         })
//     } catch (e) {
//         console.error(e)
//     }
// }
const listContainer = document.querySelector('#list')
let data;
// const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10'
const url = 'https://randomuser.me/api/?results=25'
const fetchData = async () => {
    try {
        await fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                return data = json.results
            })
        data.forEach(element => {
            console.log(element)
            const li = document.createElement('li')
            li.innerHTML = `
            <figure>
                <img src=${element.picture.medium} alt=${element.name.title}${element.name.first}${element.name.last} />
            </figure>
            <h2>name:${element.name.title} ${element.name.first} ${element.name.last}</h2>`
            listContainer.append(li)
            // const img = document.createElement('img')
            // li.textContent = element.title
            // img.src = element.thumbnailUrl
            // li.append(img)

        });
        // list.forEach(item => {
        //     const li = document.createElement('li')
        //     console.log(item)
        //     li.textContent = item.title
        //     listContainer.append(li)
        // })
    } catch (e) {
        console.error(e)
    }
}
fetchData()
