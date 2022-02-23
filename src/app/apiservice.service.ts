import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public http: HttpClient) { }

  protected getBaseUrl_orderbilding(): string {
  
     return 'http://localhost:21000/api/v1/';
  
  }
  protected getBaseUrl_inventory(): string {
  
     return 'http://192.168.1.122:24000/api/v1/';
  
  }
  protected getBaseUrl_onlinestore(): string {
  
     return 'http://192.168.1.122:22000/api/v1/';
  
  }
  

dataas(){
    return this.http.get<any>('http://192.168.1.122:22000/api/v1/').pipe(map((res:any)=>{
    return res;
    }))

}
  protected getBaseUrl_auth(): string {
  
     return 'http://localhost:4500/';
    //  return 'http://laotracking.com:4500/';
  
  }
  protected getBaseUrl_vdp(): string {
  
      //  return 'http://192.168.1.122:8080/inventory-management/sign-in';
      // return 'http://localhost:9599/inventory/';
      // return 'http://192.168.1.122:22000/api/v1/';

  
      //  return 'http://laotracking.com:23000/';
      return location.protocol + '//' + location.host+'/api/';
  
  }

  protected headerBase(): any {
    const token = localStorage.getItem('token');
    let skip=localStorage.getItem('skip')
    let skip_store=localStorage.getItem('skip_store')
    let skip_tag=localStorage.getItem('skip_tag')
    
    if(skip==null){
      skip='0'
    }
    if(skip_tag==null){
      skip_tag='0'
    }
    if(skip_store==null){
      //hsdhskdh
      skip_store='0'
    }
    
    // const authorization='dba123456';
    // .set('authorization',authorization+'');  fdfgdgdfgd
      
    const myheader = new HttpHeaders({ 'Content-Type': 'application/json'})
    .set('token', token+'').set('skip',skip+'').set('skip_store',skip_store+'').set('skip_tag',skip_tag+'');
    return myheader;
  }



  public url: string = this.getBaseUrl_onlinestore();
  public token ='';
  GetPostBy(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/GetPostBy',param,{headers:header});
  }
  selectOne_post(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/getMyPost/',param,{headers:header});
  }
  selmany():Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + 'lfn_post/selmany',{headers:header});
  }

  
}
