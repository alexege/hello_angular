import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router){}
  
  ngOnInit(){
    this.getTasksFromService();
  }

  tasks = [];
  one_task: any;
  title = 'public';
  
  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      console.log(data);
      // this.tasks = data.tasks;
    }
    )};
  
  getTaskFromService(id){
    this._httpService.getTask(id).subscribe(data => {
      console.log(data);
      // this.one_task = data.tasks;
    }
    )};
  
  cancel(){
    console.log("Pushing cancel");
    this._router.navigate(['/']);
  }
}