import _ from 'lodash'
import './style.scss'
import Img from './img.png'
import Data from './data.xml'
import Notes from './data.csv'

function component() {
    var element = document.createElement('div')
    element.innerHTML= _.join(['hello', 'world'], ' ')
    element.classList.add('hello')
    const myImg = new Image();
    myImg.src = Img;
    element.appendChild(myImg)
    console.log(Data);
    console.log(Notes);
    return element
}

document.body.appendChild(component())