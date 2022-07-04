import { CharacterInterface } from './../models/character.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(list: CharacterInterface[], filter: string = "") {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: CharacterInterface[] = list.filter((element: any) => {
      return element.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList
  }

}
