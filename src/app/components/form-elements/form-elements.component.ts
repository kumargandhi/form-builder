import { Component } from '@angular/core';
import { FormElement } from './data';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent {
  elements: FormElement[] = [
    {
      name: 'checkbox',
      icon: 'bi-check2-square'
    }
  ];
}
