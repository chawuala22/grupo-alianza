import { Component } from '@angular/core';
import { DisneyModel } from 'src/app/models/disney-model';
import { DisneyAPIService } from 'src/app/services/disney-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listDisney: any;

  constructor(private disneyService: DisneyAPIService){
    this.getAllCharacter();
  }

  getAllCharacter(){
    this.disneyService.getAllCharacters().subscribe((res:DisneyModel[])=>{
      console.log(res);
      this.listDisney = res;
    });
  }

}
