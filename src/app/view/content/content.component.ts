import { Component, OnInit } from '@angular/core';
import {MenuHandlerService} from '../../service/menu-handler.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
   content: any;

   currentCategory: string;

  constructor(private menuHandler: MenuHandlerService) { }

  ngOnInit(): void {
    this.menuHandler.category.subscribe(category => this.currentCategory = category);
    this.menuHandler.content.subscribe(content => this.content = content);
  }

}
