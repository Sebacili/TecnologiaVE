import { TestBed } from '@angular/core/testing';

import { PokemoninsiderinfoService } from './pokemoninsiderinfo.service';

describe('PokemoninsiderinfoService', () => {
  let service: PokemoninsiderinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemoninsiderinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
