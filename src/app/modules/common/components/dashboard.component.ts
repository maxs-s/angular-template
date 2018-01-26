import { Component } from '@angular/core';
import { TestService } from '../../../services/test.service';

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