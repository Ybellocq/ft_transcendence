function extractViewContent(html) {
	const tempElement = document.createElement('div');
	tempElement.innerHTML = html;
	const viewContent = tempElement.querySelector('#content').innerHTML;
	return viewContent;
}

function loadView(url, addHistory) {
	let actual = location.pathname;
	var isAuthenticated = document.getElementById('auth-data').getAttribute('data-authenticated') === 'True';
	if ((!isAuthenticated && (url == '/login/' || url == '/register/' || url == '/')) || isAuthenticated) {
		fetch(url)
		.then(response => response.text())
		.then(html => {
			if (addHistory == true && actual != url) {
				if (url.startsWith('/profile/')) {
					let queryParams = url.substring(url.indexOf('?'));
					history.pushState({id: queryParams}, null, url);
				}
				else
					history.pushState(null, null, url);
			}
		document.querySelector('#content').innerHTML = extractViewContent(html);
		if (url == '/index/')
			setupIndex();
		else if (url == '/friends/')
			setupFriends();
		else if (url == '/gamepage/')
			setupGamepage();
		else if (url == '/ia/')
			setupIa();
		else if (url == '/register/')
			setupRegister();
		else if (url == '/profile/')
			setupProfile();
		else if (url == '/tournaments/')
			SetupTournaments();
        else if (url == '/tournaments_overview/')
			setupTournaments_overview();
        else if (url == '/welcome/')
			setupWelcome();
        else if (url == '/settings/')
			setupSettings();
		attachEventListeners(); // fonction pas creer, a creer par chatgpt
		})
		.catch(error => {
			console.error('Erreur lors du chargement de la vue:', error);
		});
	}
	else {
		if (actual != '/login/')
			loadView('/login/', true);
	}
}

