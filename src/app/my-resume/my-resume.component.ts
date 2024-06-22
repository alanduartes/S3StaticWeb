import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.scss'
})
export class MyResumeComponent {
  public resumeLanguage: string = "br";

  constructor() {}
}
