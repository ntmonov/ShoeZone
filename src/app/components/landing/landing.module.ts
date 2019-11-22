import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent } from './home-page/home-page.component'
import { AppRoutingModule } from 'src/app/app-routing.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HomePageComponent]
})
export class LandingModule { }
