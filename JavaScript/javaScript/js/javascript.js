let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let inpName = document.getElementById('name');

btn1.addEventListener('click', function(){
    let para1 = document.getElementById('para1');
    if(para1.classList.contains('show')) {
        para1.classList.remove('show');
        para1.classList.add('hide');
    } else if (para1.classList.contains('hide')) {
        para1.classList.remove('hide');
        para1.classList.add('show');
    }
});

btn2.addEventListener('click', function(){
    alert('Button Click')
});

inpName.addEventListener('focus', function(){
    inpName.style.background = 'pink';
});     
inpName.addEventListener('blur', function(){
    inpName.style.background = 'white';
});     