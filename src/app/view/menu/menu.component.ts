import { Component, OnInit } from '@angular/core';
import {MenuHandlerService} from '../../service/menu-handler.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: string[] = [
    'Main', 'Schedule', 'Rates', 'Messages', 'LK',
  ];

  private currentCategory: string;

  constructor(private menuHandler: MenuHandlerService) {
  }

  ngOnInit(): void {
    this.currentCategory = this.categories[0];
  }

  // tslint:disable-next-line:typedef
  showContent(category: string) {
    this.currentCategory = category;
    this.menuHandler.fillContent(category);
  }
}
