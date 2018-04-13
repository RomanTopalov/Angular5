import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Roman';
 /* public myId = 'testId';
  public isDisabled = false;
  public hasError = true;
  public successClass = 'text-success';
  public isSpecial = true;
  public hightLightColor = 'orange';
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
*/

public  greeting = '';


  constructor() { }

  ngOnInit() {
  }

  greetingUser() {
    return 'Hello ' + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'hi Pipa';
  }

  logMessage(myInput) {
    console.log(myInput);
  }
}
