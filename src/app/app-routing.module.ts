import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsTimelineComponent } from './aws-timeline/aws-timeline.component';
import { CloudformationComponent } from './details/1/cloudformation/cloudformation.component';
import { CloudfrontComponent } from './details/2/cloudfront/cloudfront.component';

const routes: Routes = [
    { path: '', component: AwsTimelineComponent },
    { path: 'firststep', component: CloudformationComponent },
    { path: 'secondstep', component: CloudfrontComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
