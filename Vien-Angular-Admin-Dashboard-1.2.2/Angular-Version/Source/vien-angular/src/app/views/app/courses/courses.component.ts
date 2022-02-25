import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  modalRef: BsModalRef;
  levels;
  companies: any[] = [];

  constructor(private modalService: BsModalService, private fb:FormBuilder) { }

  ngOnInit(): void
  {

  }

  openModal(template: TemplateRef<any>):void
  {
    this.modalRef = this.modalService.show(template);
  }

  addTagFn(addedName): {name: any; tag: true}
  {
    return {name: addedName, tag: true};
  }

  guardar()
  {
    console.log(this.levels);

  }

}
