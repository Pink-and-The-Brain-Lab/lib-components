import { TestBed } from '@angular/core/testing';
import { FileConversor } from './convert-file';

describe('FileConversor', () => {
  let service: FileConversor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileConversor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a file string', (done) => {
    const file = new File(['foo'], 'foo.txt', { type: 'text/plain' });
    service.convertoToBlobURL(file).then(
      (response: string) => {
        const wasFileConverted = response.includes('blob:http://localhost:9876/');
        expect(wasFileConverted).toBeTruthy();
        done();
      }
    );
  });
});
