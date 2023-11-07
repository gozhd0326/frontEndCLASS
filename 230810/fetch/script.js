// const data fetch()
// .then(response => response.json())
// .then(json => console.log(json))
// console.log(fetchData)

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
            // const li = document.createElement('li')
            // const img = document.createElement('img')
            // li.textContent = element.title
            // img.src = element.thumbnailUrl
            // li.append(img)
            // listContainer.append(li)

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

fetchData()
