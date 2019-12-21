import { Component, OnInit } from '@angular/core';
import { AuthService, BaseHttpService } from 'src/app/services';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private httpService: BaseHttpService, 
    ) { }
  ngOnInit() {

    
  }
 
}
