import { CommerceModule } from './commerce.module';

describe('CommerceModule', () => {
  let commerceModule: CommerceModule;

  beforeEach(() => {
    commerceModule = new CommerceModule();
  });

  it('should create an instance', () => {
    expect(commerceModule).toBeTruthy();
  });
});
