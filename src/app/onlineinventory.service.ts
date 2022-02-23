import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../Downloads/New folder (2)/service/api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OnlineinventoryService extends ApiService{
  public url: string = this.getBaseUrl_inventory();

  new_tags(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'tag/new',param,{headers:header});
  }
  newMany_tags(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'tag/InsertMany',param,{headers:header});
  }
  
  edit_tags(param:any,id:string):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'tag/edit/'+id,param,{headers:header});
  }
  del_tags(id:string):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'tag/del/'+id,{headers:header});
  }
  selmany():Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + 'tag/selmany/',{headers:header});
  }
  search(param:string):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + 'tag/find?q='+param,{headers:header});
  }






  new_product(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'product/new',param,{headers:header});
  }
  edit_product(param:any,id:string):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'product/edit/'+id,param,{headers:header});
  }
  del_product(id:string):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'product/del/'+id,{},{headers:header});
  }
  getMyProduct(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'product/getMyProduct/',param,{headers:header});
  }
  //========= no limit and no offset ===============
  GetAllMyProduct():Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + 'product/GetAllMyProduct/',{headers:header});
  }
  //=================================================
  LoadProductByOwnerUuid(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'product/LoadProductByOwnerUuid',param,{headers:header});
  }
}
