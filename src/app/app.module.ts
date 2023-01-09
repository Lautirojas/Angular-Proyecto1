import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//CUSTOM PIPES
import { PipesPipe } from './custom/pipes/pipesStudent.pipe';
// CUSTOM DIRECTIVES
import { DirectivesDirective } from './custom/directives/directives.directive';
// CUSTOM MODULES
import { PagesModule } from './pages/pages.module';
import { CarsModule } from './shared/modules/cars/cars.module';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { LayoutModule } from './Layouts/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, PipesPipe, DirectivesDirective],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    CarsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
  ],
  exports: [PipesPipe, DirectivesDirective],
})
export class AppModule {}
