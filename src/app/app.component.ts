import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show_img : any;
  title = 'covid19.2';
  files : any

  imgPre:string = ''

  constructor(private http:HttpClient){

  }

  
  myUploader(event : any) {
    try {
      this.files = event.files[0]
      this.show_img = event.files[0];
      const reader = new FileReader();
      
      reader.onload = e => this.show_img = reader.result;
      reader.readAsDataURL(this.show_img); 
    } catch (error) {
    }
  }

  public getImage(){
    
    
    const formData: FormData = new FormData();
    formData.append('file',  this.files, this.files.name);
    this.http.post('http://127.0.0.1:5000/upload/image',formData).subscribe(data => {
      console.log(data)
      this.imgPre = 'http://127.0.0.1:5000/image/'+data
    })
  }

}

