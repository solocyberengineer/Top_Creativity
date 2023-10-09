// This is for loading screen
document.onreadystatechange = async () => {
	let state = document.readyState;
	console.log( state )
	// interactive
	// complete
	if(state == 'interactive'){
		document.innerHTML += '<p style="position: absolute;top:50%;left:50%;">LOADING</p>'
	}
	if(state == 'complete'){
		console.log('done loading')
		await loadPage('./page/home.html')
	}
}
// alert('dont forget about me ui.js')


async function getPage(page){
	var _page = await fetch(page);
	return await _page.text();
}

async function loadPage(page){
	var _page = await getPage(page);
	var page_layout = document.getElementById('page');
	page_layout.innerHTML = _page
}