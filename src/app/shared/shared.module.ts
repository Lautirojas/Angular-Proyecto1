import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsModule } from './modules/cars/cars.module';
import { MyMaterialModule } from './modules/my-material.module';
import { MyNavbarComponent } from './components/my-navbar/my-navbar.component';
import { MyToolbarComponent } from './components/my-toolbar/my-toolbar.component';
import { MyContentComponent } from './components/my-content/my-content.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyFormLoginComponent } from './components/my-formLogin/my-formLogin.component';
import { MyErrorHelperComponent } from './my-errorHelper/my-errorHelper.component';
import { PipesPipe } from '../custom/pipes/pipesStudent.pipe';
import { DirectivesDirective } from '../custom/directives/directives.directive';

@NgModule({
  declarations: [
    MyContentComponent,
    MyNavbarComponent,
    MyToolbarComponent,
    MyFooterComponent,
    MyFormLoginComponent,
    MyErrorHelperComponent,
  ],
  imports: [
    DirectivesDirective,
    PipesPipe,
    CommonModule,
    MyMaterialModule,
    CarsModule,
  ],
  exports: [
    MyContentComponent,
    MyNavbarComponent,
    MyToolbarComponent,
    MyFooterComponent,
    MyFormLoginComponent,
    MyErrorHelperComponent,
  ],
})
export class SharedModule {}
