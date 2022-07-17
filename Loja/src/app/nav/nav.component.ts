import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getIsLogged(): boolean{
    let logingInfo = sessionStorage.getItem("login");

    if(logingInfo){
      return true;
    }
    return false;
  }

}
