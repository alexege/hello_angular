import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.getTasksFromService();
  }

  tasks = [];
  one_task: any;
  title = 'public';
  
  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      console.log(data);
      this.tasks = data.tasks;
    }
    )};
  
  getTaskFromService(id){
    this._httpService.getTask(id).subscribe(data => {
      console.log(data);
      this.one_task = data.tasks;
    }
    )};
  
}