const wrapper = document.querySelector('.wrapper')

// console.log(bokeh)
// console.log(wrapper)
const addbokeh = () => {
    const size = randomNumber(120, 50)
    const bokeh = document.createElement('span')
    bokeh.classList.add('bokeh')
    wrapper.append(bokeh)
    const random = Math.floor(Math.random() * (100 - 1) + 1) + '%'
    bokeh.style.width = size + 'px'
    bokeh.style.height = size + 'px'
    bokeh.style.opacity = Math.random()
    bokeh.style.left = `${randomNumber(100, 1)}%`
    bokeh.style.top = `${randomNumber(100, 1)}%`
    bokeh.style.opacity = `${randomNumber(35, 1)}%`
    bokeh.style.backgroundColor = `hsl(${randomNumber(360, 0)}, ${randomNumber(360, 0)}%,50%)`
    

}

const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min)
}

for (let i = 0; i < 70; i++) {
    addbokeh()
}