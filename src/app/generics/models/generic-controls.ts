import { GenericControlsType } from './generic-controls-type';
import { AbstractControlOptions } from '@angular/forms';

export interface GenericControls {
  name: string;
  type: GenericControlsType;
  nameCtrl: string;
  control?: AbstractControlOptions | any;
}