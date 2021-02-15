import _ from 'lodash'
import './style.scss'
import Img from './img.png'
import Data from './data.xml'
import Notes from './data.csv'
import toml from './data.toml'
import yaml from './data.yaml'
import json from './data.json5'

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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