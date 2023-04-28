import { Component, OnInit } from '@angular/core';
import { DisneyModel } from 'src/app/models/disney-model';
import { DisneyAPIService } from 'src/app/services/disney-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputSearch: string = '';
  search: boolean = false;
  listDisney: any;
  page:number = 1;
  pageSize:number = 32;
  constructor(private disneyService: DisneyAPIService) {}
  ngOnInit(): void {
    this.loadData(this.page);
    this.page += 1;
  }
  loadData(page:number) {
    this.disneyService.getAllCharacters(page, this.pageSize).subscribe((data: DisneyModel) => {
      this.listDisney = data
      this.listDisney = this.listDisney.concat(data);
    })
    window.scroll(0,0);
  }

  filterCharacters(name: string): void {
    this.disneyService.getfilterCharacter(name).subscribe((characters) => {
      this.listDisney = characters.filter(
        (character: any) => character.name === name
      );
      console.log(this.listDisney);
    });
  }

  mostrar() {
    this.search = true;
    this.filterCharacters(this.inputSearch);
    console.log(this.inputSearch);
    if(this.inputSearch == ''){
      window.location.reload();
    }
  }
}
