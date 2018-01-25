import { NgModule } from '@angular/core';

import { DashboardComponent }   from './components/dashboard.component';
import { routing } from './common.routing';

@NgModule({
  imports: [routing],
  declarations: [DashboardComponent]
})
export class CommonModule {}