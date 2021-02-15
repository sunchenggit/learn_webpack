import _ from 'lodash'
import './style.scss'
import Img from './img.png'

function component() {
    var element = document.createElement('div')
    element.innerHTML= _.join(['hello', 'world'], ' ')
    element.classList.add('hello')
    const myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg)
    return element
}

document.body.appendChild(component())