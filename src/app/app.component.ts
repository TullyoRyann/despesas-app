import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'despesas-app';
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Início', routerLink: ['/home'] },
      { label: 'Conta', routerLink: ['/conta'] }
    ];
  }

}
