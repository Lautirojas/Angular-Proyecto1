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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//CUSTOM PIPES
import { PipesPipe } from './custom/pipesStudent.pipe';
// CUSTOM DIRECTIVES
import { DirectivesDirective } from './custom/directives/directives.directive';
// CUSTOM MODULES
import { PagesModule } from './pages/pages.module';
import { CarsModule } from './shared/modules/cars/cars.module';
import { MyMaterialModule } from './shared/modules/my-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MyToolbarComponent,
    MyNavbarComponent,
    MyContentComponent,
    MyFooterComponent,
    MyFormLoginComponent,
    MyErrorHelperComponent,
    PipesPipe,
    DirectivesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    CarsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
