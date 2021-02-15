import _ from 'lodash'
import printMe from './print'

function component() {
    var element = document.createElement('div')
    const btn = document.createElement('button')
    element.innerHTML= _.join(['hello', 'world'], ' ')
    btn.innerHTML= 'Click me and check the console'
    btn.onclick = printMe
    element.appendChild(btn)
    return element
}

document.body.appendChild(component())