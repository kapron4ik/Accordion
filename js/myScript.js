// let listAgrotechnics = `
// <h5>Цели и предполагаемые задачи внедрения:</h5></br>
// <ul>
//     <li>Контроль местоположения и состояния автомобиля в Украине и за ее пределами</li></br>
//     <li>Контроль расхода топлива</li></br>
//     <li>Контроль режимов работы Получаемый результат от предлагаемого решения:</li></br>
// </ul>
// <h5>Получаемый результат от предлагаемого решения:</h5></br>
// <ul>
//     <li>Контроль местоположения автомобиля в реальном времени по всему миру</li></br>
//     <li>Контроль уровня и расхода топлива</li></br>
// </ul>`;

// function target () {
//     let parent = event.target.closest('li');
//     let nodeVS = parent.querySelector('.infoList');
//     // parent.appendChild(listAgrotechnics);
//     nodeVS.innerHTML = listAgrotechnics;
//     console.log ('node', nodeVS)
//     console.log(event.target.closest('li'));
// }

let accordion = document.getElementById('accordion');
let currentElem = null;

accordion.onmouseover = function(event) {
    if(currentElem)return;
    let target = event.target;
    while (target != this) {
        if (target.tagName == 'LI') break;
        target = target.parentNode;
    }
    if (target == this) return;
    currentElem = target;
    let node = target.querySelector('.infoList');
    node.style.display = "block";
    let title = currentElem.querySelector('.title');
    title.style.display = "none";
    // node.innerHTML = listAgrotechnics;
};
  
accordion.onmouseout = function(event) {
    if (!currentElem) return;
    let relatedTarget = event.relatedTarget;
    if (relatedTarget) {
        while (relatedTarget) {
            if (relatedTarget == currentElem) return;
            relatedTarget = relatedTarget.parentNode;
        }
    }   
    let node = currentElem.querySelector('.infoList');
    node.style.display = "none";
    let title = currentElem.querySelector('.title');
    title.style.display = "block";
    // node.innerHTML = '';
    currentElem = null;
};