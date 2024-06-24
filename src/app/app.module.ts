import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwsTimelineComponent } from './aws-timeline/aws-timeline.component';
import { CardComponent } from './card/card.component';
import { CloudformationComponent } from './details/1/cloudformation/cloudformation.component';
import { CloudfrontComponent } from './details/2/cloudfront/cloudfront.component';
import { HomeComponent } from './home/home.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CodepipelineComponent } from './details/3/codepipeline/codepipeline.component';

@NgModule({
  declarations: [
    AppComponent,
    AwsTimelineComponent,
    CardComponent,
    CloudformationComponent,
    CloudfrontComponent,
    HomeComponent,
    MyResumeComponent,
    CodepipelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
