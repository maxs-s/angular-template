import { Component } from '@angular/core';
import { TestService } from '../../../services/test.service';
import { BaseDictionary } from './../../../models/base-dictionary';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private testService: TestService) {
      
    this.testService.getFoods().subscribe(res => {
      console.log(res);
    });

  } 

}