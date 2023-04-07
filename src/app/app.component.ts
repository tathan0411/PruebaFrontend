import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from './utilities/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private _utilitiesService: UtilitiesService) { }

  return() {
    this._utilitiesService.setSearch('');
  }
}
