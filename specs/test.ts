import { browser, element, by} from 'protractor'
describe('Protractor Typescript Demo', function() {
	it('title verifications', function() {
	  browser.get('https://angularjs.org/');
	  browser.getTitle().then(function(title){
		console.log("The title is  : "+title)
		browser.sleep(5000);
	  })
	});
	it('title verifications1', function() {
	  browser.get('https://angular.io/');
	  browser.getTitle().then(function(title){
		console.log("The title is  : "+title)
		browser.sleep(5000);
	  })
	});
	
	it('should add a Name as vasu', function() {
		browser.get('https://angularjs.org');
		element(by.model('yourName')).sendKeys('vasu');
		 var vasu= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
		 console.log("The title is  : "+vasu)
	 //expect(guru.getText()).toEqual('Hello change GURU99!');
		 });
});
