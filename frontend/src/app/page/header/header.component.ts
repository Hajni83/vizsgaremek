import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchPipe } from 'src/app/pipe/search.pipe';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText = '';
  @Output() searchTextEmitter = new EventEmitter<string>();

  search($event: string | undefined){
    this.searchTextEmitter.emit($event);
  }

  characters = [
    // 'Ant-Man',
    // 'Aquaman',
    // 'Asterix',
    // 'The Atom',
    // 'The Avengers',
    // 'Batgirl',
    // 'Batman',
    // 'Batwoman',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
