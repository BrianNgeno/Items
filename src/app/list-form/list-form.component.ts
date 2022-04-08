import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { List } from '../list'

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  newList = new List(0,"","",new Date())

  @Output() addList = new EventEmitter<List>();

  submitList(){
  this.addList.emit(this.newList);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
