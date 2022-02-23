import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private modal:ModalController) { }

  // async editpost(id:any)
  // {
  //   const modal= await this.modelctrol.create(
  //    {
  //     component:Tab3Page,
  //     componentProps:{
  //       // 'status':this.status=2,
  //       // 'header':this.header="ແກ້ໄຂໂຄສະນາ"
  //       'action':"edit",
  //       'data':this.productlist
  //     }
  //    }
  //   )
  //   await modal.present();
  // }
  
  ngOnInit() {
  }

}
