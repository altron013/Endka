import { Component, OnInit, Input } from '@angular/core';
import { ProviderService } from '../provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public logged = false;
  public registered = false;
  public login: any = '';
  public password: any = '';
  public name: any = '';
  public phone: any = '';
  public reglogin: any = '';
  public regpassword: any = '';


  constructor( private provider: ProviderService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  auth(){
    this.provider.authorize(this.login, this.password).then(res => {
      localStorage.setItem('token', res.token);
      this.logged = true;
    });
  }

  register(){
    this.provider.register(this.reglogin, this.name, this.phone, this.regpassword).then(res => {
      localStorage.setItem('token', res.token);
      this.logged = true;
    });
  }

  logout(){
    this.provider.logout();
    this.logged = false;
  }
}
