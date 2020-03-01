import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GenericControlsType } from '../models/generic-controls-type';
import { GenericControls } from '../models/generic-controls';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  @Input() fields: any;
  @Output() submitGenericForm = new EventEmitter();
  genericFormGroup: FormGroup;
  box = [];
  genericControlsType = GenericControlsType;

  ngOnInit(): void {
    this.setFormControlInFormGroup();
  }

  onSubmit(): void {
    this.submitGenericForm.emit(this.genericFormGroup.value);
  }

  private setFormControlInFormGroup(): void {
    this.genericFormGroup = new FormGroup({});
    const keys = Object.keys(this.fields);
    keys.forEach((key: any) => {
      if (key !== 'btn') {
        this.box.push(this.fields[key]);
        this.fields[key].forEach((field: GenericControls) => {
          this.genericFormGroup.addControl(field.name, new FormControl(this.setValue(field.type), field.control || []));
        });
      }
    });
    if (!this.box[this.fields.btn.row - 1]) {
      this.box.push([]);
    }
    this.box[this.fields.btn.row - 1].push(this.fields.btn);
  }

  private setValue(field: string): string | boolean {
    let returnValue;
    switch (field) {

      case this.genericControlsType.check:
        returnValue = false;
        break;

      case this.genericControlsType.input:
        returnValue = '';
        break;

      default:
        returnValue = null;
        break;
    }
    return returnValue;
  }

}
