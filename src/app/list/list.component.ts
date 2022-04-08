import { Component, OnInit } from '@angular/core';
import {List} from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:List[] = [
    new List (1,'list my gorcery','work',new Date(2022,3,19)),
    new List (2, 'visit the park','work',new Date(2022,2,31)),
    new List (3,'clean the laundry','work',new Date(2022,3,8)),
    new List (4,'lawn the garden','work',new Date(2022,3,9)),
  ] 
  
  addNewList(list:List){
    let listLength = this.items.length;
    list.id = listLength+1;
    list.completion_date = new Date(list.completion_date)
    this.items.push(list)
  }
  
  toggleDetails(index:number){
    this.items[index].showDescription = !this.items[index].showDescription;
  }

  deleteItem(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.items[index].activity}?`)

      if (toDelete){
        this.items.splice(index,1)
      }
    }
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
