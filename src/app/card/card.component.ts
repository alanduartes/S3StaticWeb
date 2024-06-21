import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() public pathSvcIcon: string = "";
  @Input() public svcName: string = "";
  @Input() public content: string = "";
  @Input() public detailsRoute: string = "";
  @Input() public svcClassColor: string = "";
}
