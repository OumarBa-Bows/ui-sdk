import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  imports: [CommonModule, TranslatePipe],
})
export class ButtonComponent {

}
