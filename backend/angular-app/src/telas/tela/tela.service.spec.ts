import { Test, TestingModule } from '@nestjs/testing';
import { TelaService } from './tela.service';

describe('TelaService', () => {
  let service: TelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelaService],
    }).compile();

    service = module.get<TelaService>(TelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
