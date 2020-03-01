import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GenericForm } from './generics/models/generic-form';
import { GenericControlsType } from './generics/models/generic-controls-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  otherFields: GenericForm = {
    row1: [
      { name: 'one', type: GenericControlsType.check, nameCtrl: 'one', control: [Validators.required, Validators.minLength(3)] },
      { name: 'two', type: GenericControlsType.check, nameCtrl: 'two', control: [Validators.required] },
      { name: 'three', type: GenericControlsType.check, nameCtrl: 'three' },
    ],
    row2: [
      { name: 'four', type: GenericControlsType.input, nameCtrl: 'four' },
    ],
    row3: [
      { name: 'five', type: GenericControlsType.input, nameCtrl: 'five' },
      { name: 'six', type: GenericControlsType.input, nameCtrl: 'six' },
    ],
    btn: {
      row: 4,
      reset: true
    }
  };

  searchFields: GenericForm = {
    row1: [
      { name: 'one', type: GenericControlsType.input, nameCtrl: 'one', control: [Validators.required] },
      { name: 'two', type: GenericControlsType.input, nameCtrl: 'two' },
      { name: 'three', type: GenericControlsType.input, nameCtrl: 'three' },
    ],
    btn: {
      row: 1,
      text: 'Buscar'
    }
  };

  handlerSubmit(data: any): void {
    console.log(data);
  }

}
