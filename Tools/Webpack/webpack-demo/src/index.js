import _ from 'lodash';
import './style.css';
import printMe from './print'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash imported by script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'click here and check console!'
  btn.onclick = printMe;

  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());
