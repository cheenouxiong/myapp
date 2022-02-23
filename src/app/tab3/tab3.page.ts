import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private alert:AlertController,
    private modal:ModalController
  ) {}

  ngOnInit(): void {
      if(this.action=="add")
      {
        this.header="ສ້າງໂຄສະນາ"
      }
      else{
        console.log(this.data)
        this.header="ແກ້ໄຂໂຄສະນາ"
        this.name=this.data[0].member
        this.titlename=this.data[0].titlename
        this.product=this.data[0].prod
        this.Estimatproduct=this.data[0].Estimate
        this.Price=this.data[0].price                        
      }
          //  console.log(this.data[0].titlename)
          //  console.log(this.titlename);
           
  }
  public titlename:string=""
  public name:string=""
  public product:string=""
  public Estimatproduct:string=""
  public Price:string=""
  public header:string="" 
  productlist:any=[
    {member:'fa',titlename:'', prod:'fa', Estimate:34,price:32}
  ]
  radio:any=[
    {name:'name1'},{name:'name2'},{name:'name3'}
  ]


// ຮັບຂໍ້ມູນຈາກ tab 1
  @Input() action:string=""
  @Input() data:any=[]

  onclick(){
    if(this.action=="add")
    {

      console.log("addnew")
      if(!this.name || !this.product || !this.Estimatproduct || !this.Price )
      {
        this.error()
      }
      else{
        this.productlist.member=this.name
        this.productlist.titlename=this.titlename
        this.productlist.prod=this.product
        this.productlist.Estimate=this.Estimatproduct
        this.productlist.price=this.Price
        console.log(this.productlist);

      }
      
    }
   else{
     console.log("editpost")
    if(!this.name || !this.product || !this.Estimatproduct || !this.Price )
    {
      this.error()
    }
    else{

    }
   }
   
  }

  closemodal(){
    this.modal.dismiss({
      'close':true
    })
  }

  async error(){
   
      const alert= await this.alert.create({                
        cssClass:'my-custom-class',
        header:'ແຈ້ງເຕືອນ',
        message:'ກາລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບກ່ອນ',
        buttons:[
          
          {
            text:"ok",
            role:'cancel'
          }
        ]        
    })
    await alert.present();          
  }
}
