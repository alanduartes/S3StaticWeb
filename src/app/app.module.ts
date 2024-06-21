import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwsTimelineComponent } from './aws-timeline/aws-timeline.component';
import { CardComponent } from './card/card.component';
import { CloudformationComponent } from './details/1/cloudformation/cloudformation.component';
import { CloudfrontComponent } from './details/2/cloudfront/cloudfront.component';

@NgModule({
  declarations: [
    AppComponent,
    AwsTimelineComponent,
    CardComponent,
    CloudformationComponent,
    CloudfrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
