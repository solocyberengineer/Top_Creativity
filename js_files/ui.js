// This is for loading screen
document.onreadystatechange = () => {
	let state = document.readyState;
	console.log( state )
	// interactive
	// complete
	if(state == 'interactive'){
		document.innerHTML += '<p style="position: absolute;top:50%;left:50%;">LOADING</p>'
	}
	if(state == 'complete'){
		console.log('done loading')
	}
}
alert('dont forget about me ui.js')
