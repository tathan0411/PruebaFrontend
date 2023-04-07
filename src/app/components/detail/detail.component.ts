import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroes, Result } from 'src/app/models/response.model';
import { ResultsService } from '../results/service/results.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  id!: number;
  heroes!: Result[];

  constructor(private _resultsService: ResultsService,
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    data.id != undefined ? this.id = data.id : this.id;

    this._resultsService.getHeroe(this.id).subscribe({
      next: (response: Heroes) => this.heroes = response.data.results,
      error: (error) => console.log('error')
    });
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close(false);
  }
}
