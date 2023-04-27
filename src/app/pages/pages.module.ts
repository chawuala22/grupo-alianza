import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from '../shared/search/search.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent, DetailComponent, SearchComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ]
})
export class PagesModule { }
