import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UtilitiesService } from 'src/app/utilities/utilities.service';

export interface data {
  search: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  dataForm!: data;
  form: FormGroup;

  constructor(private _utilitiesService: UtilitiesService,
    private formBuilder: FormBuilder) {

    this.dataForm = {
      search: ''
    }

    this.form = this.formBuilder.group(
      {
        search: new FormControl(''),
      }
    );

    this._utilitiesService.getSearch().subscribe({
      next: (response) => {
        this.form.controls['search'].setValue(response.toString());
      },
      error: (response) => console.log('error')
    });
  }

  ngOnInit(): void { }

  send() {
    this._utilitiesService.setSearch(this.form.controls['search'].value);
  }

}
