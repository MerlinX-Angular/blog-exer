import {ReversePipe} from './reverse.pipe';

const pipe = new ReversePipe();
const ascSeq = [1, 2];
const descSeqR = [2, 1];

describe('ReversePipe', () => {

  it('create an instance', () => {
     expect(pipe).toBeTruthy();
   });

  it('should reverse the sequence', () => {
  expect(pipe.transform(ascSeq)).toEqual(descSeqR);
});

it('should return null if no value', () => {
  if (!ascSeq) {
    expect(pipe.transform(ascSeq)).toBe(null)
}
});
});
