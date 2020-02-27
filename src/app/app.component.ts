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
      { label: 'Início', routerLink: ['/home'] , routerLinkActiveOptions: { exact: true }},
      { label: 'Conta', routerLink: ['/conta'] , routerLinkActiveOptions: { exact: true }},
      { label: 'Lançamento', routerLink: ['/lancamento'] , routerLinkActiveOptions: { exact: true }},
    ];
  }

}
