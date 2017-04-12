/**
 * Created by Administrator on 2017/3/3.
 */
var win=document.getElementsByTagName('html')[0];
var w=document.documentElement.clientWidth;
var h=document.documentElement.clientHeight;
win.style.fontSize=w*0.0234+"px";
win.style.fontSize=h*0.0391+"px";
window.onresize=function(){
    var w=document.documentElement.clientWidth;
    win.style.fontSize=w*0.0234+"px";
}
window.onresize=function(){
    var h=document.documentElement.clientHeight;
    win.style.fontSize=h*0.0391+"px";
}