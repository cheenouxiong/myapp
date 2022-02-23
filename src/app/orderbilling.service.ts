import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../Downloads/New folder (2)/service/api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderbildingService extends ApiService{
  public url: string = this.getBaseUrl_orderbilding();

  new_comment(param:any):Observable<any> {
    const header = this.headerBase().set('owneruuid',param.productUuid);
    return this.http.post(this.url + 'comment/new',param,{headers:header});
  }
  edit_comment(param:any,id:string,postID:string):Observable<any> {
    const header = this.headerBase().set('owneruuid',postID);
    return this.http.post(this.url + 'comment/edit/'+id,param,{headers:header});
  }
  del_comment(id:string,postID:string):Observable<any> {
    const header = this.headerBase().set('owneruuid',postID);
    return this.http.post(this.url + 'comment/del/'+id,{},{headers:header});
  }
  delAll_comment(postID:string):Observable<any> {
    const header = this.headerBase().set('owneruuid',postID);
    return this.http.post(this.url + 'comment/delAll/',{},{headers:header});
  }
  GetCommentByPostUuid(param:any):Observable<any> {
    const header = this.headerBase().set('owneruuid',param.productUuid);
    return this.http.get(this.url + 'comment/selmany',{headers:header});
  }
  LoadCountCommentByOwnerUuid(param:any):Observable<any> {
    const header = this.headerBase().set('owneruuid',param.uuid);
    return this.http.post(this.url + 'comment/loadcountcommentbyowneruuid',param,{headers:header});
  }
  // selectOne_gstore(id:string):Observable<any> {
  //   const header = this.headerBase();
  //   return this.http.get(this.url + 'gstore/selone/'+id,{headers:header});
  // }
 
}
