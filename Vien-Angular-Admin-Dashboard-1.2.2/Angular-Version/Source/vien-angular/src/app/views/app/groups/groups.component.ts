import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  modalRef: BsModalRef;
  basicTime = new Date();
  secondsTime = new Date();
  stepsTime = new Date();
  mouseTime = new Date();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>):void {
    this.modalRef = this.modalService.show(template);
  }

}
