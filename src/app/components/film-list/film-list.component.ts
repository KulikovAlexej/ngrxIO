import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../models/film';
import { PlaceholdersService } from '../../services/placeholders.service';
import { COMPONENT_FACTORY_RESOLVER } from '@angular/core/src/render3/ng_module_ref';

@Component({
  selector: 'app-film-list',
  template: `
  <div class="list">
    <h2>{{label}}</h2>
    <app-film-item  *ngFor="let film of films"
     [film]="film"
     (select)="select.emit($event)">
    </app-film-item>
  </div>
  `,
  styles: [`
  .list {
    display:flex;
    flex-direction:column;
  }
  `]
})
export class FilmListComponent implements OnInit {

  @Input() films: Film[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor(
    private placeholderService: PlaceholdersService
  ) { }

  ngOnInit() {
    // this.placeholderService.getUsers().subscribe(
    //   data => console.log(data)
    // );
  }

}
