$(function(){
    Dots4.generate({speed: 20000});
 });

 var burger = $('.menu-trigger');

burger.each(function (index) {
var $this = $(this);

$this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    
})
});


function copyToClipboard(val) {
const t = document.createElement("textarea");
document.body.appendChild(t);
t.value = val;
t.select();
document.execCommand('copy');
document.body.removeChild(t);
}
function copy() {
copyToClipboard('010-2432-3876');
alert('010-2432-3876 연락주시면 감사하겠습니다 ♥');
}

function copyToClipboard2(val2) {
const t2 = document.createElement("textarea");
document.body.appendChild(t2);
t2.value = val2;
t2.select();
document.execCommand('copy');
document.body.removeChild(t2);
}
function copy2() {
copyToClipboard('cdn06079@naver.com');
alert('cdn06079@naver.com 메일주시면 감사하겠습니다 ♥');
}

function copyToClipboard3(val3) {
const t3 = document.createElement("textarea");
document.body.appendChild(t3);
t3.value = val3;
t3.select();
document.execCommand('copy');
document.body.removeChild(t3);
}
function copy3() {
copyToClipboard('https://blog.naver.com/cdn06079');
alert('제 블로그 주소에요 꾸준히 공부해왔습니다 ♥');
}

function copyToClipboard3(val4) {
const t4 = document.createElement("textarea");
document.body.appendChild(t4);
t4.value = val4;
t4.select();
document.execCommand('copy');
document.body.removeChild(t4);
}
function copy4() {
copyToClipboard('https://github.com/chaechaez/chaechaez');
alert('기본적인 사용방법은 익혀놨습니다 이제는 실무에서 경험해보고 싶습니다!');
}