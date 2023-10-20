import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, all: boolean): string {
    // console.log("Value: " + value);
    // console.log("Arguments: " + args);
    // return "Hola Mundo";
    value = value.toLowerCase();
    let names = value.split(' ');
    console.log(names);

    if (all) {
      names = names.map(name =>
        name[0].toUpperCase() + name.substr(1)
      );
    }

    let firstName = names[0];
    firstName = firstName[0].toUpperCase() + firstName.substr(1);
    names[0] = firstName;
    return names.join(' ');
  }

}
