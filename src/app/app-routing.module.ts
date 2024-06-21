import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsTimelineComponent } from './aws-timeline/aws-timeline.component';
import { CloudformationComponent } from './details/1/cloudformation/cloudformation.component';
import { CloudfrontComponent } from './details/2/cloudfront/cloudfront.component';

const routes: Routes = [
    { path: '', redirectTo: 'timeline', pathMatch: 'full' }, //default route
    { path: 'timeline', component: AwsTimelineComponent },
    { path: 'firststep', component: CloudformationComponent },
    { path: 'secondstep', component: CloudfrontComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
