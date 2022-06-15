// var kichthuoc = document.getElementsByClassName('silde-main')[0].clientWidth
// var slide = document.getElementsByClassName('slide')
// var nexts = document.querySelector('.slide-list')
// var img = nexts.getElementsByTagName('img')
// var dots = document.querySelectorAll(".owl-dot");
// var max = kichthuoc * (img.length - 1)
// let indexs=0
// dots.forEach(item =>item.addEventListener("click",function(e){
//     dots.forEach(el=>el.classList.remove('active'));
//     e.target.classList.add('active')
//     let slideIndex=e.target.dataset.index-"";
//     indexs=slideIndex
//     slide.style.marginLeft =`-${indexs*kichthuoc}px`
// }) );

// setInterval(function () {
//     dots.forEach(el=>el.classList.remove('active'));
//     let newSlide=slide[indexs].cloneNode(true)
//     nexts.appendChild(newSlide)
//     slide = document.getElementsByClassName('slide')
//     slide[indexs++].style.marginLeft =`-${kichthuoc}px`
//     dots[indexs].classList.add('active') 
// }, 3000);
//                     //  back ve 
var kichthuoc = document.getElementsByClassName('silde-main')[0].clientWidth
var slide = document.getElementsByClassName('slide')[0]
var nexts = document.querySelector('.slide-list')
var img = nexts.getElementsByTagName('img')
var dots = document.querySelectorAll(".owl-dot");
var max = kichthuoc * (img.length - 1)
let indexs = 0
dots.forEach(item => item.addEventListener("click", function (e) {
    dots.forEach(el => el.classList.remove('active'));
    e.target.classList.add('active')
    let slideIndex = e.target.dataset.index - "";
    indexs = slideIndex
    slide.style.marginLeft = `-${indexs * kichthuoc}px`
}));
setInterval(function () {
    dots.forEach(el => el.classList.remove('active'));
    if (indexs < dots.length - 1) {
        indexs++
    } else {
        indexs = 0
    }
    slide.style.marginLeft = `-${indexs * kichthuoc}px`
    dots[indexs].classList.add('active')
}, 3000);









// click left and rigght 
var leftdot = document.querySelectorAll('.click-l')
var lengthslide = document.getElementsByClassName('items')[0].clientWidth
var producttype = document.getElementsByClassName('product-type')[0]
var chimuc = document.getElementsByClassName('items')
var rightdot = document.querySelectorAll('.click-r')
var leftindex = 1
var rightindex =0
var bien = 1
var a = (lengthslide + 12)*5
var max = (lengthslide + 12) * (chimuc.length - 1)
leftdot.forEach(left => left.addEventListener("click", function () {
    if (a < max) {
        var t=producttype.style.marginLeft = `-${leftindex * (lengthslide + 12)}px`
        leftindex++
        a+= lengthslide
        ++rightindex
    }
}));
rightdot.forEach(left => left.addEventListener("click", function () {
    if(rightindex>0){
        var b=(lengthslide + 12)
        // var h =producttype.style.marginLeft =`-${parseInt(t)-bien*(lengthslide + 12)}px`
        producttype.style.marginLeft =`-${bien*b}px`
        a-=lengthslide
        leftindex--
        rightindex --
        bien--
        b+=b
        console.log(rightindex)
    }
}));