import { Test, TestingModule } from '@nestjs/testing';
import { ShopService } from '../../src/services/shop.service';

describe('ShopService', () => {
  let service: ShopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopService],
    }).compile();

    service = module.get<ShopService>(ShopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string', () => {
      const result = service.findAll();
      expect(result).toEqual(expect.any(String));
    });

    it('should return a greeting message', () => {
      const result = service.findAll();
      expect(result).toEqual('Hello from shop service');
    });
  });
});
