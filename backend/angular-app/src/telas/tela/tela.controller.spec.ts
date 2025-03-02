import { Test, TestingModule } from '@nestjs/testing';
import { TelaController } from './tela.controller';

describe('TelaController', () => {
  let controller: TelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelaController],
    }).compile();

    controller = module.get<TelaController>(TelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
