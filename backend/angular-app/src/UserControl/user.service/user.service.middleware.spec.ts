import { UserServiceMiddleware } from './user.service.middleware';

describe('UserServiceMiddleware', () => {
  it('should be defined', () => {
    expect(new UserServiceMiddleware()).toBeDefined();
  });
});
