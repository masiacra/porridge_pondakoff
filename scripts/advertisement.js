
function setAdv() {
	var advs = ['релама 1', 'тут могла бы быть реклама 2', 'тут могла' +
		' бы быть реклама 3'];
	var place = document.getElementsByClassName('advertisement')[0];
	place.innerHTML = advs[setAdv.count - 1];
	setAdv.count++;
	if (setAdv.count > 3) {
		setAdv.count -= 3;
	}
}
setAdv.count = 1;

setInterval(setAdv, 10000);
