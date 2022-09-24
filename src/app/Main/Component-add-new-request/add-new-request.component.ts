import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoMsgboxComponent } from 'src/app/1.Essential-components/yes-no-msgbox/yes-no-msgbox.component';

@Component({
  selector: 'app-add-new-request',
  templateUrl: './add-new-request.component.html',
  styleUrls: ['./add-new-request.component.scss']
})
export class AddNewRequestComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddNewRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private renderer: Renderer2) {
  }

  //elements from html file
  @ViewChild('name', { static: true }) Name: ElementRef
  @ViewChild('uniID', { static: true }) UniID: ElementRef
  @ViewChild('SID', { static: true }) SID: ElementRef
  @ViewChild('done', { static: true }) done: ElementRef
  @ViewChild('edit', { static: true }) edit: ElementRef

  public editForm = []

  //on intialization
  ngOnInit(): void {
    this.editForm = [
      this.Name.nativeElement,
      this.UniID.nativeElement,
      this.SID.nativeElement,
    ]

    this.enableEdit()
    this.editApearance()
  }

  
  yesNo(): boolean {
    let result!: boolean;
    const dialogRef = this.dialog.open(YesNoMsgboxComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
      result = res;
    });

    return result;
  }

  save() {
    this.yesNo()
    this.formValidarion()
  }

  formValidarion() {
    let nameBool: boolean = this.Name.nativeElement.innerHTML.length === 0
    let uniBool: boolean = this.UniID.nativeElement.innerHTML.length === 0
    let sinBool: boolean = this.SID.nativeElement.innerHTML.length === 0

    if (nameBool) {
      // this.Name.nativeElement
    }
  }

  enableEdit() {
    this.editForm.forEach(element => {
      this.renderer.removeAttribute(element, "disabled");
    });
  }

  editApearance() {
    this.editForm.forEach(element => {
      element.classList.add('input-isnew');
    });
  }

}
