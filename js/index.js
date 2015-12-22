document.getElementById( 'gallery' ).addEventListener( 'click', function (elem) {

    if (elem.target.tagName === 'IMG') {
        var howMany = this.querySelectorAll( 'li' ).length;
		var parentElement = elem.target.parentNode;
        this.removeChild(parentElement);        
    }

}, false);



