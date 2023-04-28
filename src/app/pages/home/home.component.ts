import { Component, OnInit } from '@angular/core';
import { DisneyModel } from 'src/app/models/disney-model';
import { DisneyAPIService } from 'src/app/services/disney-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listDisney: any;
  paginatorDisney:any
  constructor(private disneyService: DisneyAPIService){
    
  }
  ngOnInit(): void {
    this.getAllCharacter();
  }

  getAllCharacter(){
    this.disneyService.getAllCharacters().subscribe((res:DisneyModel)=>{
      console.log(res);
      this.listDisney = res;
    });
  }

  onNext(){
    this.disneyService.getAllCharacters().subscribe((res:any)=>{
      console.log(res);
      this.paginatorDisney = res.info.nextPage;
    });
  }

}
