import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private url = 'https://api.github.com/users'
  res :any;

  constructor(private http: HttpClient) {
  }

ngOnInit(): void {

  this.http.get(this.url).subscribe(data => {
      this.res = data;
      console.log(data);
  },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });

}
}