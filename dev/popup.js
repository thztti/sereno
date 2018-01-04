

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	sites = {
		0:
		{
			"domain": "globo.com",
			"selector": "#boxComentarios"
		},
		1:
		{
			"domain": "abril.com.br",
			"selector": "#comments"
		},
		2:
		{
			"domain": "otempo.com.br",
			"selector": "#comments"
		},
		4:
		{
			"domain": "uol.com.br",
			"selector": "#comentarios"
		},
		3:
		{
			"domain": "folha.uol",
			"selector": "#article-comments"
		},
		5:
		{
			"domain": "bbc.com",
			"selector": "#story-footer"
		},
		5:
		{
			"domain": "terra.com.br",
			"selector": "#fb-social-comments"
		}
	}
  console.log(sites);
  

  	// const hideComments = y =>
  		
  		//switch to arrow functions :/
	    function hideComments(y){
	    	var x = "document.querySelector('"+y+"').style.display = 'none'";
	  		chrome.tabs.executeScript({
		      code: x
		    });
	    }

  	const urlValidator = (i, tab, sites) =>
  		// console.log(tab);
  		tab.url.includes(sites[i]["domain"]) ? hideComments(sites[i]["selector"]) : console.log(19494)

  for (var i = 0; i < Object.keys(sites).length; i++) {
  	console.log(i);
  	console.log(sites[i]["domain"]);
  	// if (tab.url.includes(sites[i]["domain"])) {
  	// 	console.log("navegando em " + sites[i]["domain"]);
  	// } else {
  	// 	console.log("oops");
  	// }
  	urlValidator(i, tab, sites);
  }
});
