/**
 * Created by robin on 2017/10/13.
 */

var leftPos = (typeof window.screenLeft == 'number')?window.screenLeft:window.screenX;
var rightPos = (typeof window.screenTop == 'number')?window.screenTop:window.screenY;
console.log(leftPos)
console.log(rightPos)

var height = window.outerHeight;
var width = window.outerWidth;
console.log(height)
console.log(width)

console.log(window.screen)


//navigator的17个属性 【chrome浏览器】
// console.log(window.navigator.appCodeName)
// console.log(window.navigator.appMinorVersion)
// console.log(window.navigator.appName)
// console.log(window.navigator.appVersion)
// console.log(window.navigator.buildID)
// console.log(window.navigator.cookieEnabled)
// console.log(window.navigator.cpuClass)
// console.log(window.navigator.javaEnabled())
// console.log(window.navigator.language)
// console.log(window.navigator.mimeTypes)
// console.log(window.navigator.Platform)
// console.log(window.navigator.oscpu)
// console.log(window.navigator.product)
// console.log(window.navigator.userAgent)
// console.log(window.navigator.userLanguage)
// console.log(window.navigator.vendor)
// console.log(window.navigator.plugins)


// window.open('http://www.baidu.com')
//window.location.assign('http://www.baidu.com')
//window.location.href='http://www.baidu.com'
// window.location = 'http://www.baidu.com'
// setTimeout(function () {
//     window.location.replace('http://www.baidu.com');
//     console.log('===assign===')
// },2000)


// alert(window.location.host)
// alert(window.location.search)

// alert('robin')
//
// if (confirm('are you ok')) {
//     console.log('confirm false')
// }else {
//     console.log('confirm false')
// }

// var res = prompt("you name","default value")
// console.log(window.location === document.location)



// open('http://www.baidu.com',
//     'another',
//     'height=140,width=140,top=40,left=40.resizable=yes')



// //设置超时调用
// var timeoutId = setTimeout(function () {
//     console.log('hello,robin')
// });
// //取消超时调用
// clearTimeout(timeoutId);
//
// //设置间歇调用
// var intervalId = setInterval(function () {
//     console.log('hello,robin')
// },1000);
// //取消间歇调用
// clearInterval(intervalId);
//
//
//
// //最佳体验：超时调用模拟间歇调用(嵌套)
// function incrementNumber() {
//     console.log('hello.increment');
//     setTimeout(incrementNumber,1000);
// }
// setTimeout(incrementNumber,1000);