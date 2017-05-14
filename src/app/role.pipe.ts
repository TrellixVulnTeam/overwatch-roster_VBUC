import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './character.model';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(input: Character[], selectedRole) {
    var output: Character[] = [];
    if (selectedRole === "offense") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "offense") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedRole === "defense") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "defense") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedRole === "tank") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "tank") {
          output.push(input[i]);
        }
      }
      return output;
  }else if (selectedRole === "support") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].role === "support") {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }

}
