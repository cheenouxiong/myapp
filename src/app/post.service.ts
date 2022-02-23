import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {ApiService} from "../../../../../Downloads/New folder (2)/service/api.service";
@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiService{

  public url: string = this.getBaseUrl_onlinestore();
   public token ='';

   public storeMomeny:any = []; 


  GetPostBy(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/GetPostBy',param,{headers:header});
  }
  selectOne_post(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/getMyPost/',param,{headers:header});
  }
  create_post(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/new',param,{headers:header});
  }
  update_post(param:any,id:string):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/edit/'+id,param,{headers:header});
  }
  delete_post(id:string):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/del/'+id,{headers:header});
  }





   search(param:string):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + 'lfn_post/find?q='+param,{headers:header});
  }
  selmany():Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + 'lfn_post/selmany',{headers:header});
  }
  

  
  
  getMyPostActiveTrue(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/getMyPostActiveTrue/',param,{headers:header});
  }
  
  
  GetGstoreNameByProfileUuid(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'lfn_post/GetGstoreNameByProfileUuid/',param,{headers:header});
  }
  GetManyGstoreNameByProfileUuid(param:any):Observable<any> {
    const header = this.headerBase()
    return this.http.post(this.url + 'lfn_post/GetManyGstoreNameByProfileUuid',param,{headers:header});
  }
  GetGstoreAddressByOwnerUuid(param:any):Observable<any> {
    const header = this.headerBase()
    return this.http.post(this.url + 'lfn_post/GetGstoreAddressByOwnerUuid',param,{headers:header});
  }
  
  //======================== Favorite post =================
  LoadPostFavorite(param:any):Observable<any> {
    const header = this.headerBase()
    return this.http.post(this.url + 'post/LoadPostFavorite',param,{headers:header});
  }
  GetPostByPostUuid(param:any):Observable<any> {
    const header = this.headerBase()
    return this.http.post(this.url + 'post/GetPostByPostUuid',param,{headers:header});
  }
  GetonePostByPostUuid(param:any):Observable<any> {
    const header = this.headerBase()
    return this.http.post(this.url + 'post/GetonePostByPostUuid',param,{headers:header});
  }
  InsertPostFavorite(param:any):Observable<any> {
    const header = this.headerBase()
    return this.http.post(this.url + 'post/InsertPostFavorite',param,{headers:header});
  }
  DeletePostFavorite(id:string):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'post/delfavorite/'+id,{},{headers:header});
  }



}
