chrome.tabs.onUpdated.addListener( function ( tabId, changeInfo, tab ) {
	const sites = {
		0: { "domain": "globo.com",			"selector": "#boxComentarios" },
		1: { "domain": "noticias.band",		"selector": "#disqus_thread" },
		2: { "domain": "abril.com.br",		"selector": ".comments" },
		3: { "domain": "otempo.com.br",		"selector": "#comments" },
		4: { "domain": "redetv.uol.com.br",	"selector": ".comentarios" },
		5: { "domain": "uol.com.br",		"selector": "#comentarios, .comments" },
		6: { "domain": "folha.uol",			"selector": "#article-comments" },
		7: { "domain": "bbc.com",			"selector": "#story-footer" },
		8: { "domain": "terra.com.br",		"selector": "#fb-social-comments" },
		9: { "domain": "estadao.com.br",	"selector": ".comentarios" }
	}

	const quotes = {
		0: { 
			"quote": "Meu pai sempre dizia: não levante a sua voz, melhore os seus argumentos.", 
			"author" : "Desmond Tutu"
		}, 1: { 
			"quote": "O silêncio é um dos argumentos mais difíceis de se rebater.", 
			"author" : "Josh Billings"
		}, 2: { 
			"quote": "As injúrias são os argumentos daqueles que não têm razão.", 
			"author" : "François Fénelon"
		}, 3: { 
			"quote": "Quem está disposto a crer numa coisa, deixa-se convencer com os argumentos mais fáceis.", 
			"author" : "Gregório Marañón"
		}, 4: { 
			"quote": "Responder à ofensa com ofensa, é como lavar a alma com lama. O silêncio é um dos argumentos mais difíceis de se rebater.", 
			"author" : "Dalai Lama"
		}, 5: { 
			"quote": "A vida é uma aprendizagem diária. Afasto-me do caos e sigo um simples pensamento: Quanto mais simples, melhor!", 
			"author" : "José Saramago"
		}, 6: { 
			"quote": "É melhor calar-se e deixar que as pessoas pensem que você é um idiota do que falar e acabar com a dúvida.", 
			"author" : "Maurice Switzer"
		}, 7: { 
			"quote": "Da árvore do silêncio pende seu fruto, a paz.", 
			"author" : "Arthur Schopenhauer"
		}, 8: { 
			"quote": "Perante a cólera nada é mais conveniente do que o silêncio.", 
			"author" : "Safo"
		}, 9: { 
			"quote": "O silêncio é a mais perfeita expressão do desprezo.", 
			"author" : "George Bernard Shaw"
		}, 10: {
			"quote": "Há algo de ameaçador num silêncio muito prolongado.", 
			"author" : "Sófocles"
		}, 11: {
			"quote": "As sociedades modernas vivem tempos insanos. A serenidade é um artigo de luxo", 
			"author" : "Augusto Cury"
		}, 12: {
			"quote": "Paz na terra aos homens de boa vontade. Isto é, paz para muito poucos.", 
			"author" : "Millôr Fernandes"
		}, 13: {
			"quote": "Diz-se da melhor companhia: a sua conversa é instrutiva, o seu silêncio, formativo.", 
			"author" : "Johann Goethe"
		}, 14: {
			"quote": "Os homens a quem se fala não são aqueles com quem se conversa.", 
			"author" : "Jean-Jacques Rousseau"
		}, 15: {
			"quote": "A leitura traz ao homem plenitude, o discurso segurança e a escrita precisão.", 
			"author" : "Francis Bacon"
		}, 16: {
			"quote": "Não há fatos eternos como não há verdades absolutas.", 
			"author" : "Friedrich Nietzsche"
		}, 17: {
			"quote": "As pessoas que falam muito, mentem sempre, porque acabam esgotando seu estoque de verdades.", 
			"author" : "Millôr Fernandes"
		}, 18: {
			"quote": "Se você odeia alguém, é porque odeia alguma coisa nele que faz parte de você. O que não faz parte de nós não nos perturba.", 
			"author" : "Hermann Hesse"
		}, 19: {
			"quote": "Um pouco de desprezo economiza bastante ódio.", 
			"author" : "Jules Renard"
		}, 20: {
			"quote": "Não tenho verdades, apenas convicções.", 
			"author" : "Jean Rostand" 
		}
	}

	const generateQuote = () => {
		const i = Math.floor(Math.random() * 21);
		const quote = '"' + quotes[i]["quote"] + '" – ' + quotes[i]["author"];

		return quote
	}

	const hideComments = selector => {
		const quote = generateQuote();

		let script = "var select = document.querySelector('" + selector + "');var quote = document.createElement('div');quote.innerHTML = '<div class=\"sereno sr-container-quote\"><style scoped>.sr-container-quote{margin:20px 0;color:black}.sr-element-paragraph-quote{font-size:20px;width:600px;font-family:Georgia;line-height:25px;overflow:hidden;display:inline-block;padding-left:20px;border-left:5px solid black}.sr-element-footer{display:block;font-size:12px;font-family:Arial;margin-left:27px}a{color:black}</style><span class=\"sr-element-paragraph-quote\">" + quote + "</span><span class=\"sr-element-footer\">Apresentado por <a href=\"http://sereno.news\" target=\"_blank\">Sereno</a></span></div>';select.parentNode.replaceChild(quote, select);";
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
