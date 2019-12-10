import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingModule } from './components/landing/landing.module'
import { SharedModule } from './components/shared/shared.module'
import { AuthModule } from './components/auth/auth.module'
import { AdminModule } from './components/admin/admin.module'
import { ShoeModule } from './components/shoe/shoe.module'
import { CartModule } from './components/cart/cart.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    SharedModule,
    AuthModule,
    AdminModule,
    ShoeModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
