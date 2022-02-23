import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiserviceService } from '../apiservice.service';
import { ChatmessagePage } from '../chatmessage/chatmessage.page';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public aaaa;
  constructor(
    private modelctrol:ModalController,   
    
   
  ) {}
 data:any=[]
ngOnInit(): void {
 
 
}

  productlist:any=[
    {member:'member3',titlename:'titlename' ,prod:'faf', Estimate:34,price:32},
   
  ]
  public status:number
  public header:string=""
  async newpost()
  {
    const modal= await this.modelctrol.create(
     {
      component:Tab3Page,
      componentProps:{       
        'action':"add"
        // 'header':this.header="ສ້າງໂຄສະນາ"
      }
     }
    )
    await modal.present();
  }
  async editpost(id:any)
  {
    const modal= await this.modelctrol.create(
     {
      component:Tab3Page,
      componentProps:{
        // 'status':this.status=2,
        // 'header':this.header="ແກ້ໄຂໂຄສະນາ"
        'action':"edit",
        'data':this.productlist
      }
     }
    )
    await modal.present();
  }
}
