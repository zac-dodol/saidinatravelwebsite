$(document).ready(function(){
	$('.slider .item').click(function(){
		elem = this;
		$('.slider .opened').removeClass('opened').addClass('closed');
		$(elem).removeClass('closed').addClass('opened');
		$('.sliderimage').attr('src', $(elem).find('img').attr('src'));
		return false;
	});
	
});

function getNextElement(field) {
    var form = field.form;
    for ( var e = 0; e < form.elements.length; e++) {
        if (field == form.elements[e]) {
            break;
        }
    }
    return form.elements[++e % form.elements.length];
	}

	function tabOnEnter(field, evt) {
		if (evt.keyCode === 13) {
			if (evt.preventDefault) 
				evt.preventDefault();
			else if (evt.stopPropagation) 
				evt.stopPropagation();
			else 
				evt.returnValue = false;
				
			getNextElement(field).focus();
			return false;
		} 
		else {
			return true;
		}
	}
