import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends ApiserviceService{

  public url: string = this.getBaseUrl_vdp();

  
  listAllprovince():Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + 'listAllprovince',{headers:header});
  }

  //=============== District ==============

  getDistrict_by_provinceID(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'getDistrict_by_provinceID', param,{headers:header});
  }

  //============== Village ===============

  getVillage_by_districtID(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + 'getVillage_by_districtID', param,{headers:header});
  }
}
