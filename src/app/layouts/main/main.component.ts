import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.sass']
})
export class MainComponent {
  testId = 10;
  testStatus = 'online';
  allowNewTest = false;
  testMakingStatus = 'No test was made!';
  testName ='';

  constructor() {
    setTimeout(() => {
      this.allowNewTest = true;
    }, 3000);
  }

  onMakeTest() {
    this.testMakingStatus = 'Some new test was made!';
  }

}
