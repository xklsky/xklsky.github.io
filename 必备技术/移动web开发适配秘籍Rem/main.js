//��ȡ��Ļ���(viewport)
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

console.log(htmlWidth);

//��ȡhtml��dom
let htmlDom = document.getElementsByTagName('html')[0];

//����html��fontSize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize',(e)=>{
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});
