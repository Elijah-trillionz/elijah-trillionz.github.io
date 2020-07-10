//All project's htmlcollectionlist and nodelist needed
const projectStoreHouse = document.querySelector('.project-store-house');
const pro = projectStoreHouse.getElementsByTagName('span');
const leftPro = document.querySelector('.left');
const leftBtn = document.querySelector('.left-button');
const para1 = document.querySelector('.p1');
leftBtn.addEventListener('click', project);
projectStoreHouse.style.display = 'none';

//All exercises's htmlcollectionlist and nodelist needed
const exerciseStoreHouse = document.querySelector('.exercise-store-house');
const exe = exerciseStoreHouse.getElementsByTagName('span');
const rightExe = document.querySelector('.right');
const rightBtn = document.querySelector('.right-button');
const para2 = document.querySelector('.p2');
rightBtn.addEventListener('click', exercise)
exerciseStoreHouse.style.display = 'none';
rightExe.innerHTML = exe[0].innerText; //21
leftPro.innerHTML = pro[0].innerText; //40

//function for projects
function project() {
    para1.style.visibility = 'hidden';
    const projectCollection = [...pro]
    for (let i = 0; i < projectCollection.length; i++) {
        projectCollection[i] = projectCollection[i].innerText
    }
    const randomSelection = Math.floor(Math.random() * 20)
    leftPro.innerHTML = projectCollection[randomSelection];
}

//function for exercises
function exercise() {
    para2.style.display = 'none';
    const exerciseCollection = [...exe]
    for (let i = 0; i < exerciseCollection.length; i++) {
        exerciseCollection[i] = exerciseCollection[i].innerText
    }
    const randomSelection = Math.floor(Math.random() * 22)
    rightExe.innerHTML = exerciseCollection[randomSelection];
}
