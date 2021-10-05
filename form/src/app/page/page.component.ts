import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule} from '@angular/common/http';
import {countries} from '../shared/data';
import { Countries } from '../shared/country';
import { Country } from '@angular-material-extensions/select-country';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
  
})
export class PageComponent implements OnInit {
  public countries:any = countries

  textchange(){
    document.getElementById('login').innerHTML='text changed succesfully';
  }
      
  
      
  constructor() { }
  
  username:any="";

  ngOnInit(): void {

   this.username= localStorage.getItem("username");


  
}
  }
  

