// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// PIPES
import { PipesPipe } from './pipes/pipesStudent.pipe';
// DIRECTIVES
import { DirectivesDirective } from './directives/directives.directive';

@NgModule({
  declarations: [PipesPipe, DirectivesDirective],
  imports: [CommonModule],
  exports: [PipesPipe, DirectivesDirective],
})
export class CustomPOrDModule {}
