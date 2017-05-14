import { Pipe, PipeTransform } from '@angular/core';
const MAX_LENGTH = 100;

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {
  transform(input: string, length: number) {
    length = this._calculateLength(length);

    if (this._inputExceedsLimit(input, length)) {
      return this._truncate(input, length);
    } else {
      return input;
    }
  }

  _inputExceedsLimit(input, length) {
    return input.length > length;
  }

  _truncate(input, length) {
    return input.substring(0, length) + '...';
  }

  _calculateLength(length) {
    return length || MAX_LENGTH;
  }
}
