import { TestBed, inject } from '@angular/core/testing';

import { Hero } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hero]
    });
  });

  it('should be created', inject([Hero], (service: Hero) => {
    expect(service).toBeTruthy();
  }));
});
