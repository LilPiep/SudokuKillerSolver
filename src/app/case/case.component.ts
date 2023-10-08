import { Component } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent {
  value!: number;

  constructor() {
    this.value = 0;
  }
}
