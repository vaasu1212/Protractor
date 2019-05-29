exports.config = {
   // seleniumAddress: 'http://localhost:4444/wd/hub',
   
   chromeDriver: 'C:/Users/vaasu/Desktop/Database/VasuDrive/Education/Edu/Selenium Drivers/chromedriver_74.0.3729.6.exe',
    seleniumServerJar: 'C:/Users/vaasu/Desktop/Database/VasuDrive/Education/Edu/Selenium Drivers/selenium-server-standalone-3.141.59.jar',
    //specs: ['C:\\Users\\vaasu\\Desktop\\Database\\VasuDrive\\Education\\Edu\\Protractor\\specs\\test.js'],
    capabilities: {
        browserName: 'chrome',
        'shardTestFiles': true,
      'maxInstances': 2
      
      },
      specs: [
        'JSFilesLocation\\test.js',
        
       // 'C:\\Users\\vaasu\\Desktop\\Database\\VasuDrive\\Education\\Edu\\Protractor\\specs\\test1.js'
    ],
     framework: 'jasmine2' ,
    onPrepare: function() {
        var jasmineReporters = require('C:/Users/vaasu/Desktop/Database/VasuDrive/Education/Edu/Protractor/node_modules/jasmine-reporters');
        console.log(jasmineReporters)
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );
   }
 };