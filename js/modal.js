import { Component } from '@angular/core';

import { ModalService } from '@myServices/modal.service';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent  {


  constructor() { }

  public close() {
    this.modalService.destroy();
  }

}
