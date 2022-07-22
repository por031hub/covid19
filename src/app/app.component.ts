import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show_img : any;
  title = 'covid19.2';
  files : any[]= [];
  
  myUploader(event : any) {
    var reader = new FileReader();
    
    reader.onload = (event: any) => {
      this.show_img = event.target.result;
    };
    for(let file of event.files) {
      this.files.push(file);
    }
 
  console.log("GTRH");
  console.log(this.files[0]);
  }

}

