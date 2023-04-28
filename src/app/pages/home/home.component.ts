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
  paginatorDisney: any;
  constructor(private disneyService: DisneyAPIService) {}
  ngOnInit(): void {
    this.getAllCharacter();

  }

  getAllCharacter() {
    this.disneyService.getAllCharacters().subscribe((res: DisneyModel) => {
      this.listDisney = res;
    });
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
