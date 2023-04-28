import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DisneyModel } from 'src/app/models/disney-model';
import { DisneyAPIService } from 'src/app/services/disney-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  detailDisney:any
  ruta: string | undefined;
  constructor(private disneyDetail:DisneyAPIService, private location:Location,  private router: Router) { 
    this.ruta = this.router.url.split('/').pop();   
  }

  ngOnInit(): void {

    this.disneyDetail.getOneCharacter(this.ruta).subscribe((res)=>{
      this.detailDisney = res;
      console.log(this.detailDisney);
      
    })

  }

  onGoBack():void{
    this.location.back();
  }
}
