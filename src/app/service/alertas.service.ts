import { AlertasComponent } from './../alertas/alertas.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(messsage: String, type: String){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = messsage
  }

  showAlertDanger(messsage: String) {
    this.showAlert(messsage, 'danger')
  }

  showAlertSuccess(messsage: String) {
    this.showAlert(messsage, 'success')
  }

  showAlertInfo(messsage: String) {
    this.showAlert(messsage, 'info')
  }

}
