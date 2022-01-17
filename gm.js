let firstArray = ['Blue', 'Red', 'Green', 'Yellow'];
let secondArray = [];

let selectDivOne = false;
let removedValue;
let firstData = '';
let secondData = '';
var x = document.getElementById('container');
let fd = document.getElementById('firstData');
let sd = document.getElementById('secoundData');

for (let index = 0; index < firstArray.length; index++) {
  const element = firstArray[index];
  firstData += `<div style="background-color:${element};height:30px;width:100%;text-align:center;color:white">${element}</div>`;
  fd.innerHTML = firstData;
}

function data(e) {
  for (let index = 0; index < e.length; index++) {
    const element = e[index];
    firstData += `<div style="background-color:${element};height:30px;width:100%;text-align:center;color:white">${element}</div>`;
    fd.innerHTML = firstData;
  }
}

function clickfdiv() {
  x.style.WebkitAnimation = '';
  if (selectDivOne == false) {
    selectDivOne = true;
  }
}

function clicksdiv() {
  x.style.WebkitAnimation = 'mymove 1s';
  if (selectDivOne == true) {
    removedValue = firstArray.pop();
    setTimeout(() => {
      secondArray.push(removedValue);
      selectDivOne = false;
      startAnimation = true;
      secondData += `<div style="background-color:${removedValue};height:30px;width:100%;text-align:center;color:white">${removedValue}</div>`;
      sd.innerHTML = secondData;
    }, 500);
    var elmts = firstArray.filter(function (i) {
      return this.indexOf(i) < 0;
    }, secondArray);
    //data(elmts);
    fd.innerHTML = elmts;
  }
  // remove();
}
// function remove() {
//   fd.firstChild.remove();
// }
