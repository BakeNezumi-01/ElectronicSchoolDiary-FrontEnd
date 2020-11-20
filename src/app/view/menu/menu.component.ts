import { Component, OnInit } from '@angular/core';
import {MenuHandlerService} from '../../service/menu-handler.service';
import {Data} from '../../Data/Data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: string[] = [
    'Main', 'Schedule', 'Rates', 'Messages', 'LK',
  ];

  constructor(private menuHandler: MenuHandlerService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showContent(category: string) {
    this.menuHandler.fillContent(category);
  }
}
