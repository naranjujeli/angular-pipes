import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = "Watermelon sugar";
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
  PI: number = Math.PI;
  percentage: number = 0.234;
  salary: number = 1234.5;
  superhero: any = { // Cómo estamos con los superjiros
    name: "Logan",
    alias: "Wolverine",
    edad: 500,
    address: {
      a: "a",
      b: "b",
      c: "c"
    }
  }
  promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Datos recibidos");
    }, 4500)
  });
  date: Date = new Date();
  language = 'es';
}
