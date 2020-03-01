import { GenericControls } from './generic-controls';
import { Btn } from './generic-btn';

export interface GenericForm {
  row1: GenericControls[];
  row2?: GenericControls[];
  row3?: GenericControls[];
  btn: Btn;
}
