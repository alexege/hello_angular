import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router){}

  ngOnInit() {
  }

  cancel(){
    console.log("Pushing cancel");
    this._router.navigate(['/']);
  }

}
