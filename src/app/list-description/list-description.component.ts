import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {List} from '../list';

@Component({
  selector: 'app-list-description',
  templateUrl: './list-description.component.html',
  styleUrls: ['./list-description.component.css']
})
export class ListDescriptionComponent implements OnInit {


  
  @Input()list:List;
  @Output() isComplete = new EventEmitter<boolean>();

  itemComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  itemDelete(complete:boolean){
    this.isComplete.emit(complete);
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
