import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-modal-ayuda',
  standalone: true,
  imports: [],
  templateUrl: './modal-ayuda.component.html',
  styleUrl: './modal-ayuda.component.scss'
})
export class ModalAyudaComponent {
  constructor(private _matDialogRef: MatDialogRef<ModalAyudaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){}

}
