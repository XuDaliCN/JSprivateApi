/*
* @Author: XuDaLi
* @Date:   2018-03-05 11:43:58
* @Last Modified by:   XuDali
* @Last Modified time: 2018-03-18 23:07:13
*/
//添加事件
function addEvent(elem, type, handle) {
	if(elem.addEventListener) {
		elem.addEventListener(type, handle, false);
	}else if(elem.attachEvent){
		elem.attachEvent('on' + type, function () {
			handle.call(elem);
		});
	}else{
		elem['on' + type] = handle;
	}
}

//取消冒泡
function stopBuble(event) {
	if(event.stopPropagation){
		event.stopPropagation();
	}else{
		event.cancelBubble = true;
	}
}

//取消默认
function cancelDefault(event) {
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;
	}
}

//实现继承
function inherit(Target, Origin){
	function F(){};
	F.prototype = Origin.prototype;
	Target.prototype = new F();
	Target.prototype.constructor = Target;
	Target.prototype.uber = Origin.prototype;
}

//深度克隆(有误)！
function deepClone(origin, target) {
	var target = target||{},
		toStr = Object.prototype.toString,
		arrStr = '[object Array]';

	for(var prop in origin){
		if(origin.hasOwnProperty(prop)){
			if(origin[prop] !== null && typeof(origin[prop]) == 'object'){

				if(toStr.call(origin[prop]) == arrStr){
					target[prop] = [];
				}else{
					target[prop] = {};
				}
				deeClone(origin[prop],targen[prop]);

			}else{
				target[prop] = origin[origin];
			}
		}
	}
	return target;
}

//获得滚动条大小
function getScollOffset() {
	if(window.pageXOffset){
		return {
			x:window.pageXOffset,
			y:window.pageYOffset
		}
	}else{
		return {
			x:document.body.scrollLeft + document.documentElement.scrollLeft,
			y:document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}

//获得元素样式
function getStyle(elem, prop) {
		if(window.getComputedStyle){
			return window.getComputedStyle(elem, null)[prop];
		}else{
			return elem.currentStyle[prop];
		}
	}
