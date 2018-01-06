chrome.tabs.onUpdated.addListener( function ( tabId, changeInfo, tab ) {
	const sites = {
		0: {"domain": "globo.com", 			"selector": "#boxComentarios"},
		1: {"domain": "noticias.band", 		"selector": "#disqus_thread"},
		2: {"domain": "abril.com.br", 		"selector": ".comments"},
		3: {"domain": "otempo.com.br", 		"selector": "#comments"},
		4: {"domain": "redetv.uol.com.br", 	"selector": ".comentarios"},
		5: {"domain": "uol.com.br", 		"selector": "#comentarios, .comments"},
		6: {"domain": "folha.uol", 			"selector": "#article-comments"},
		7: {"domain": "bbc.com", 			"selector": "#story-footer"},
		8: {"domain": "terra.com.br", 		"selector": "#fb-social-comments"},
		9: {"domain": "estadao.com.br", 	"selector": ".comentarios"}
	}

	const hideComments = selector => {
		let script = "var select = document.querySelector('" + selector + "');var quote = document.createElement('div');quote.innerHTML = '<div class=\"sereno sr-container-quote\"><style scoped>.sr-container-quote{margin:20px 0;color:black}.sr-element-paragraph-quote{font-size:20px;width:680px;font-family:Georgia;line-height:25px;overflow:hidden;display:inline-block;padding-left:20px;border-left:5px solid black}.sr-element-footer{display:block;font-size:12px;font-family:Arial;margin-left:30px}a{color:black}</style><span class=\"sr-element-paragraph-quote\">\"Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?\" – Roberto Shinyashiki</span><span class=\"sr-element-footer\">Apresentado por <a href=\"http://sereno.news\" target=\"_blank\">Sereno</a></span></div>';select.parentNode.replaceChild(quote, select);";
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
