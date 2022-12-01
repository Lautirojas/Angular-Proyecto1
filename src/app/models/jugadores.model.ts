export class Player {
  fullname: string;
  titular: boolean;
  edad: number;
  constructor(titular: boolean, fullname: string, edad: number) {
    this.titular = titular;
    this.fullname = fullname;
    this.edad = edad;
  }
}
