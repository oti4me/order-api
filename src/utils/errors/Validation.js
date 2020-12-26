import { Unprocessed } from './Unprocessed';

export class Validation extends Unprocessed {
  constructor(data) {
    super('Request validation failed');
    this.fields = data;
  }
}
