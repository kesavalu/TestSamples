import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseHttpService, AuthService } from 'src/app/services';
import { FormBuilder } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { JsonService } from 'src/app/services/Json-Service';





@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  orderList: Order[] = [];
  jsonData: any;
 
  constructor(private router: Router, private jsonService: JsonService, private httpService: BaseHttpService, private authService: AuthService, private formBuilder: FormBuilder) {

   
  }

  ngOnInit() {
debugger
    this.jsonService.getData()
      .subscribe((data: any): void => {
        this.jsonData = data;
        console.log(data);
      });



    // debugger
    // this.httpService.get(AppConfig.Order_List).subscribe(data => {
    //   if (data != null) {
    //     this.orderList = data;
    //   }
    // });
  }


  
  
}
