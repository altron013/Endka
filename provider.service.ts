import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Authorization } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(http: HttpClient) {}

  authorize(login: any, password: string): Promise<Authorization>{
    console.log(login, password);
    return;
  }

  register(login: any, name: any, phone: any, password: string): Promise<Authorization>{
    console.log(login, name, phone, password);
    return;
  }

  logout(): Promise<any>{
    window.alert('you are logged out');
    return;
  }
}
