		var circles = document.getElementsByClassName('circles')[0];

		circles.onclick = function(e) {			
			var target = e.target;
			if (!target.classList.contains('circle')) return;
			var url = getUrl(target);
			this.parentNode.style.backgroundImage = url;
			this.previousElementSibling.innerHTML = getExplanation(target);
			
			
			var neighbour;
			for (var i = 0; i < this.children.length; i++) {
				if (this.children[i].classList.contains('solidCircle')) {
					neighbour = this.children[i];
					break;
				}
			}
			
			neighbour.className = 'circle emptyCircle';
			target.className = 'circle solidCircle';
		};
		var elem = circles.lastElementChild;
		function getUrl(elem) {
			var smallUrl = elem.getAttribute('data-img');
			var fullUrl = 'url(../images/' + smallUrl + ')';
			return fullUrl;
		}
		function getExplanation(elem) {
			return elem.getAttribute('data-expl');
			
		}
		
		function autoClick() {
			var nextCircle;
			var solidCircle;
	
			for (var i = 0; i < circles.children.length; i++) {
				if (circles.children[i].classList.contains('solidCircle')) {
					solidCircle = circles.children[i];
					break;
				}
			}
			 
			if (solidCircle.nextElementSibling) {
				nextCircle = solidCircle.nextElementSibling;
			} else {
				nextCircle = solidCircle.parentNode.firstElementChild;
			}
			var event = new Event('click', {bubbles: true});

			nextCircle.dispatchEvent(event);
			
		}
		
		setInterval(autoClick, 10000);
		
		
