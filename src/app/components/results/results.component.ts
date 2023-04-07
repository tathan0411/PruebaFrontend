import { Component, Inject, OnInit } from '@angular/core';
import { Heroes, Result } from 'src/app/models/response.model';
import { ResultsService } from './service/results.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { UtilitiesService } from 'src/app/utilities/utilities.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;
  color = 'rgba(236,29,36,0.2)';

  search: string = '';

  heroes!: Result[];

  constructor(private _resultsService: ResultsService,
    private _utilitiesService: UtilitiesService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this._utilitiesService.getSearch().subscribe({
      next: (response) => {
        this.search = response.toString();
        this.getHeroes(response.toString())
      },
      error: (response) => console.log('error')
    });
  }

  ngOnInit(): void {

  }

  getHeroes(search: string) {
    this._resultsService.getHeroes(search).subscribe({
      next: (response: Heroes) => this.heroes = response.data.results,
      error: (error) => console.log('error')
    });
  }

  viewDetail(id: number) {
    const dialogRef = this.dialog.open(DetailComponent, {
      height: 'auto',
      width: '350px',
      autoFocus: true,
      disableClose: true,
      data:
      {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
