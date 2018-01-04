chrome.tabs.onUpdated.addListener( function ( tabId, changeInfo, tab ) {
	sites = {
		0: {
			"domain": "globo.com",
			"selector": "#boxComentarios"
		},
		1: {
			"domain": "abril.com.br",
			"selector": "#comments"
		},
		2: {
			"domain": "otempo.com.br",
			"selector": "#comments"
		},
		4: {
			"domain": "uol.com.br",
			"selector": "#comentarios"
		},
		3: {
			"domain": "folha.uol",
			"selector": "#article-comments"
		},
		5: {
			"domain": "bbc.com",
			"selector": "#story-footer"
		},
		6: {
			"domain": "terra.com.br",
			"selector": "#fb-social-comments"
		}
	}

	const hideComments = domain => {
		let script = "document.querySelector('" + domain + "').style.display = 'none'";
		chrome.tabs.executeScript({
			code: script
		});
	}

	const urlValidator = (i, tab, sites) => {
		let site = sites[i]

			tab.url.includes(site["domain"]) 
				? hideComments(site["selector"]) 
				: null
	}

	for (var i = 0; i < Object.keys(sites).length; i++) {
		urlValidator(i, tab, sites);
	}
});
