import Unprocessed from './Unprocessed';

export default class Validation extends Unprocessed {
  constructor(data) {
    super('Request validation failed');
    this.fields = data;
  }
}
