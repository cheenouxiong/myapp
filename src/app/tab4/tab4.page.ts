import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';
import { ChatmessagePage } from '../chatmessage/chatmessage.page';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private menu:MenuController, private modalctrl:ModalController) {}
  
  openFirst(){
    this.menu.enable(true,'first');
    this.menu.open('first');
    console.log("faa");
    
  }
  openEnd(){
    this.menu.open('end');
  }
  openCustom(){
    this.menu.enable(true,'custom');
    this.menu.open('custom');
  }
  
  async newpost()
  {
    const modal= await this.modalctrl.create(
     {
      component:ChatmessagePage,
      componentProps:{       
        'action':"add"
        // 'header':this.header="ສ້າງໂຄສະນາ"
      }
     }
    )
    await modal.present();
  }
  customPopoverOptions: any = {
    header: 'Select your language',
   // subHeader: 'note: the app interface in other languages is translated by Pi community members and may contain soe inaccuracies. for full accuracy, always refer to the English app interface.',
    message: 'note: the app interface in other languages is translated by Pi community members and may contain soe inaccuracies. for full accuracy, always refer to the English app interface.'
  };
  ngOnInit() {
    
  }
 
}
