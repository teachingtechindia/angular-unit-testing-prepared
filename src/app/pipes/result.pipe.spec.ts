import { ResultPipe } from './result.pipe';

describe('ResultPipe', () => {
  it('create an instance', () => {
    const pipe = new ResultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should say invalid value', () => {
    const pipe = new ResultPipe();
    expect(pipe.transform(-1)).toBe('invalid value');
  });

  it('should declare the result as fail', () => {
    const pipe = new ResultPipe();
    expect(pipe.transform(39)).toBe('fail');
  });

  it('should declare the result as pass', () => {
    const pipe = new ResultPipe();
    expect(pipe.transform(100)).toBe('pass');
  });
});
