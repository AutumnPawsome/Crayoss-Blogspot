/*vv SCRIPT FOR ADDING AUTOMATIC HYPERLINKS vv*/	
const targetElement = document.querySelector('.article-content'); 
const originalText = targetElement.innerHTML;
const keywordsObj = {
	Looey: {link: 'https://crayoss.blogspot.com/p/looey.html'},
	Yatta: {link: 'https://crayoss.blogspot.com/p/yatta.html'},
	Blot: {link: 'https://crayoss.blogspot.com/p/blot.html'},
	"Mr. Mousey": {link: 'https://crayoss.blogspot.com/p/mr-mousey.html'},
	Cooper: {link: 'https://crayoss.blogspot.com/p/cooper-computer_16.html'},
	Sprout: {link: 'https://crayoss.blogspot.com/p/sprout.html'},
     	Stump: {link: 'https://crayoss.blogspot.com/p/stump-log-cat.html'},
	Yoko: {link: 'https://crayoss.blogspot.com/p/yoko.html'},
   	Vivian: {link: 'https://crayoss.blogspot.com/p/vivian.html'} 	
};
const keywords = Object.keys(keywordsObj);
  
for (let i = 0; i < keywords.length; i++) {
	// console.log(`${keyword}: ${linkURL}`);
    	const keyword = keywords[i];
    	const linkURL = keywordsObj[keywords[i]].link;
    	const link = document.createElement('a');
    	link.href = linkURL;
    	link.textContent = keyword; // Set the link text to the keyword
    	if (targetElement.textContent.includes(`${keyword}`) && linkURL !== window.location.href) {
   		targetElement.innerHTML = targetElement.innerHTML.replaceAll(`${keyword}`, link.outerHTML);
    	}
  }
  /*^^ SCRIPT FOR ADDING AUTOMATIC HYPERLINKS ^^*/
