import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from 'src/app/models/jugadores.model';
import { Student } from 'src/app/models/student.model';
import { MyFormLoginComponent } from 'src/app/shared/components/my-formLogin/my-formLogin.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css'],
})
export class StudentsPageComponent {
  public players: Player[] = [
    new Player(true, 'Emiliano Martínez', 30),
    new Player(false, 'Franco Armani', 36),
    new Player(false, 'Gerónimo Rulli ', 30),
    new Player(true, 'Nahuel Molina', 24),
    new Player(false, 'Gonzalo Montiel', 25),
    new Player(true, 'Cristian Romero', 24),
    new Player(false, 'Germán Pezzella', 31),
  ];

  public students: Student[] = [
    new Student(1, 'Emiliano', 'Martínez', true),
    new Student(2, 'Franco', 'Armani', false),
    new Student(3, 'Gerónimo', 'Rulli ', true),
    new Student(4, 'Nahuel', 'Molina', false),
    new Student(5, 'Gonzalo', ' Montiel', true),
    new Student(6, 'Cristian', ' Romero', false),
    new Student(7, 'Germán', ' Pezzella', false),
  ];

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'isActive',
    'edit',
    'delete',
  ];

  constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(MyFormLoginComponent);

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [
          ...this.students,
          new Student(lastId + 1, value.firstName, value.lastName, true),
        ];
      }
    });
  }

  removeStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(MyFormLoginComponent, {
      data: student,
    });

    dialog.afterClosed().subscribe((data: any) => {
      if (data) {
        this.students = this.students.map((stu) =>
          stu.id === student.id ? { ...stu, ...data } : stu
        );
      }
    });
  }
}
