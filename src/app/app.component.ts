import { Component, VERSION } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css', './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


	// I initialize the app component.
	constructor() {



	}

 
}
