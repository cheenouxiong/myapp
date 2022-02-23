import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class  Tab2Page implements OnInit {

  public name:string=""
  public content:string=""
  public postlist:Array<string>=[]
  constructor(
    private post:ApiserviceService, 
    private strict:AddressService   
     ) {}

     sum:number=0;

  ngOnInit(): void {


    // localStorage.setItem('token','9b19b75e-537c-4023-80cf-4645c4c6e638');
    // localStorage.setItem('skip',"1")
    // localStorage.setItem('skip_store',"1")
    // localStorage.setItem('skip_tag',"1")


      this.post.selmany().subscribe(res=>{
        console.log(res);
        this.postlist=res.data.rows
        console.log(res.data.count);
        for(let i=0;i<res.data.rows.length;i++)
        {
          this.sum= this.sum + res.data.rows[i].expectQty;
         console.log(res.data.rows[i].expectQty);
         
          
        }
        console.log(this.sum);
      })

    //  this.post.selectOne_post({id:1}).subscribe(res=>{
    //    console.log(res);
    //    console.log(res.data.count);
       
    //  })
  }
}
