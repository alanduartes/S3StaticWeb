import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsTimelineComponent } from './aws-timeline/aws-timeline.component';
import { CloudformationComponent } from './details/1/cloudformation/cloudformation.component';
import { CloudfrontComponent } from './details/2/cloudfront/cloudfront.component';
import { HomeComponent } from './home/home.component';
import { MyResumeComponent } from './my-resume/my-resume.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aws', component: AwsTimelineComponent },
    { path: 'firststep', component: CloudformationComponent },
    { path: 'secondstep', component: CloudfrontComponent },
    { path: 'my-resume', component: MyResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
