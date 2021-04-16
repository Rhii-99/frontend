import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CartComponent} from './components/cart/cart.component';

import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from './components/product/product.component';
import {ThankyouComponent} from './components/thankyou/thankyou.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from 'ngx-toastr';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { ProfileComponent } from './components/profile/profile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('770580170108-ehi6nbvaog3t0ra0geo6i5vtat38ajeb.apps.googleusercontent.com')
  }

]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    ThankyouComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    SocialLoginModule

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  // providers: [
  //   {
  //     provide: 'SocialAuthServiceConfig',
  //     useValue: {
  //       autoLogin: false,
  //       providers: [
  //         {
  //           id: GoogleLoginProvider.PROVIDER_ID,
  //           provider: new GoogleLoginProvider(
  //             '770580170108-ehi6nbvaog3t0ra0geo6i5vtat38ajeb.apps.googleusercontent.com'
  //           )
  //         }
  //       ]
  //     } as SocialAuthServiceConfig,
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
