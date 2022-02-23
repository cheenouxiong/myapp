import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../../Downloads/New folder (2)/service/api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  public url: string = this.getBaseUrl_auth();
  public token = '';


  // login(param:any):Observable<any> {
  //   console.log(param);
    
  //   return this.http.post(this.url + 'Login', param);
  // }
  register(param:any):Observable<any> {

      return this.http.post(this.url, param);
  }
  login(param:any):Observable<any> {

    return this.http.post(this.url, param);
}
  

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
