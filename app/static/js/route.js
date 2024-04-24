function extractViewContent(html) {
	const tempElement = document.createElement('div');
	tempElement.innerHTML = html;
	const viewContent = tempElement.querySelector('#content').innerHTML;
	return viewContent;
}

function loadView(url, addHistory) {
    // Récupération du contenu des vues à partir du serveur Django
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Mise à jour de l'URL et de l'historique de navigation si nécessaire
            if (addHistory) {
                history.pushState(null, null, url);
            }

            // Mise à jour du contenu de la page avec le contenu de la vue récupéré
            document.querySelector('#content').innerHTML = extractViewContent(html);

            // Attachement des écouteurs d'événements spécifiques à la vue chargée
            attachEventListeners();

            // Optionnel : Mise en place des actions spécifiques en fonction de l'URL chargée
            setupActionsForURL(url);
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la vue:', error);
        });
}

