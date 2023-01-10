// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// CUSTOM MODULES
import { PagesModule } from './pages/pages.module';
import { CarsModule } from './shared/components/cars/cars.module';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { LayoutModule } from './Layouts/layout.module';
import { SharedModule } from './shared/shared.module';
import { CustomPOrDModule } from './custom/custom-p-or-d.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    CustomPOrDModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    MyMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
  ],
  exports: [],
})
export class AppModule {}
