/*vv SCRIPT FOR ADDING AUTOMATIC HYPERLINKS vv*/	
const targetElement = document.querySelector('.article-content'); 
const originalText = targetElement.innerHTML;
const keywordsObj = {
	Looey: {link: 'https://crayoss.blogspot.com/p/looey.html'},
	Yatta: {link: 'https://crayoss.blogspot.com/p/yatta.html'},
	Blot: {link: 'https://crayoss.blogspot.com/p/blot.html'},
	"Mr. Mousey": {link: 'https://crayoss.blogspot.com/p/mr-mousey.html'},
	Cooper: {link: 'https://crayoss.blogspot.com/p/cooper-computer_16.html'},
	Dandy: {link: 'https://crayoss.blogspot.com/p/dandy.html'},
	Sprout: {link: 'https://crayoss.blogspot.com/p/sprout.html'},
	Shelly: {link: 'https://crayoss.blogspot.com/p/shelly.html'},
	Astro: {link: 'https://crayoss.blogspot.com/p/astro.html'},
	Vee: {link: 'https://crayoss.blogspot.com/p/vee.html'},
	Pebble: {link: 'https://crayoss.blogspot.com/p/pebble.html'},
    Stump: {link: 'https://crayoss.blogspot.com/p/stump-log-cat.html'},
	Yoko: {link: 'https://crayoss.blogspot.com/p/yoko.html'},
	Winston: {link: 'https://crayoss.blogspot.com/p/winston.html'},
	Winny: {link: 'https://crayoss.blogspot.com/p/winston.html'},
	Paul: {link: 'https://crayoss.blogspot.com/p/paul.html'},
	Dyle: {link: 'https://crayoss.blogspot.com/p/dyle.html'},
	Michael: {link: 'https://crayoss.blogspot.com/p/michael.html'},
	Harvest: {link: 'https://crayoss.blogspot.com/p/harvest.html'},
	"Lord Jagger": {link: 'https://crayoss.blogspot.com/p/jagger.html'},
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
   		targetElement.innerHTML = targetElement.innerHTML.replace(`${keyword}`, link.outerHTML);
    	}
  }
  /*^^ SCRIPT FOR ADDING AUTOMATIC HYPERLINKS ^^*/








