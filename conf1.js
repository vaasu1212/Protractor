exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: 'C:/Users/vaasu/Desktop/Database/VasuDrive/Education/Edu/Selenium Drivers/chromedriver_74.0.3729.6.exe',
    seleniumServerJar: 'C:/Users/vaasu/Desktop/Database/VasuDrive/Education/Edu/Selenium Drivers/selenium-server-standalone-3.141.59.jar',
    //specs: ['C:\\Users\\vaasu\\Desktop\\Database\\VasuDrive\\Education\\Edu\\Protractor\\specs\\test.js'],
    capabilities: {
      browserName: 'chrome'
    
    } ,
    specs: [
      'C:\\Users\\vaasu\\Desktop\\Database\\VasuDrive\\Education\\Edu\\Protractor\\specs\\test.js',
      'C:\\Users\\vaasu\\Desktop\\Database\\VasuDrive\\Education\\Edu\\Protractor\\specs\\test1.js'
  ], 
}