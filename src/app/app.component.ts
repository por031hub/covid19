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
  files : any;
  result :string = '';
  imgPre:string = ''
  
  constructor(private http:HttpClient){

  }

  predict(){
    console.log('prdict');
    const formData: FormData = new FormData();
    formData.append('file',  this.files, this.files.name);
    this.http.get('http://203.150.243.147:5000/predict').subscribe(data => {
      console.log(data)
      this.result = data as string;
      this.imgPre = 'http://203.150.243.147:5000/image/'+data
    })
  }
  myUploader(event : any) {
    try {
      this.files = event.files[0]
      this.show_img = event.files[0];
      const reader = new FileReader();
  
      reader.onload = e => this.show_img = reader.result;
      reader.readAsDataURL(this.show_img); 
      this.predict();
    } catch (error) {
    }
  }
  public getImage(){
    
    const formData: FormData = new FormData();
    formData.append('file',  this.files, this.files.name);
    this.http.post('http://203.150.243.147:5000/upload/image',formData).subscribe(data => {
       console.log(data)
       this.result = data as string;
       this.imgPre = 'http://203.150.243.147:5000/image/'+data
    })
  }

}

