import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { MyNavbarComponent } from './components/my-navbar/my-navbar.component';
import { MyToolbarComponent } from './components/my-toolbar/my-toolbar.component';
import { MyContentComponent } from './components/my-content/my-content.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyFormLoginComponent } from './components/my-formLogin/my-formLogin.component';
import { MyErrorHelperComponent } from './shared/my-errorHelper/my-errorHelper.component';

@NgModule({
  declarations: [
    AppComponent,
    MyToolbarComponent,
    MyNavbarComponent,
    MyContentComponent,
    MyFooterComponent,
    MyFormLoginComponent,
    MyErrorHelperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
