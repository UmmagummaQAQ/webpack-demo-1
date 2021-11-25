import x from './x.js'
import jpg from './assets/flzg.jpg'
console.log(jpg)
// console.log(x)
// console.log('hi-hi')
const div = document.getElementById('app')
div.innerHTML = `<img src="${jpg}"> `

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () =>{
    const promise = import('./lazy')
    promise.then((module)=>{
        module.default()
    },()=>{
        console.log("模块加载错误")
    })
}
div.appendChild(button)