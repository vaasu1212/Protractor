"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    it('title verifications', function () {
        protractor_1.browser.get('https://angularjs.org/');
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The title is  : " + title);
            protractor_1.browser.sleep(5000);
        });
    });
    it('title verifications1', function () {
        protractor_1.browser.get('https://angular.io/');
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The title is  : " + title);
            protractor_1.browser.sleep(5000);
        });
    });
    it('should add a Name as vasu', function () {
        protractor_1.browser.get('https://angularjs.org');
        protractor_1.element(protractor_1.by.model('yourName')).sendKeys('vasu');
        var vasu = protractor_1.element(protractor_1.by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        console.log("The title is  : " + vasu);
        //expect(guru.getText()).toEqual('Hello change GURU99!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWNzL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBZ0Q7QUFDaEQsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN4QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDekIsb0JBQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNyQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDJCQUEyQixFQUFFO1FBQy9CLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyx5REFBeUQ7SUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyJ9