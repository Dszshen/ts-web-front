import { AppAuthModule } from './app-auth.module';

describe('AppAuthModule', () => {
  let appAuthModule: AppAuthModule;

  beforeEach(() => {
    appAuthModule = new AppAuthModule();
  });

  it('should create an instance', () => {
    expect(appAuthModule).toBeTruthy();
  });
});
