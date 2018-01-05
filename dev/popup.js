chrome.tabs.onUpdated.addListener( function ( tabId, changeInfo, tab ) {
	sites = {
		0: {
			"domain": "globo.com",
			"selector": ".comentarios, #boxComentarios"
		},
		1: {
			"domain": "noticias.band",
			"selector": "#disqus_thread"
		},
		2: {
			"domain": "abril.com.br",
			"selector": "#comments"
		},
		3: {
			"domain": "otempo.com.br",
			"selector": "#comments"
		},
		4: {
			"domain": "redetv.uol.com.br",
			"selector": ".comentarios"
		},
		5: {
			"domain": "uol.com.br",
			"selector": "#comentarios, .comments"
		},
		6: {
			"domain": "folha.uol",
			"selector": "#article-comments"
		},
		7: {
			"domain": "bbc.com",
			"selector": "#story-footer"
		},
		8: {
			"domain": "terra.com.br",
			"selector": "#fb-social-comments"
		},
		9: {
			"domain": "estadao.com.br",
			"selector": ".comentarios"
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
