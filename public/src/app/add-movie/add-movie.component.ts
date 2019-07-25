import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  cancel(){
    console.log("Pushing cancel");
    this._router.navigate(['/']);
  }

}
