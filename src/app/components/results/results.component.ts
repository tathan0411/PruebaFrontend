import { Component, OnInit } from '@angular/core';
import { Heroes, Result } from 'src/app/models/response.model';
import { ResultsService } from './service/results.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  heroes!: Result[];

  constructor(public _resultsService: ResultsService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this._resultsService.getHeroes().subscribe({
      next: (response: Heroes) => this.heroes = response.data.results,
      error: (error) => console.log('error')
    });
  }

}
