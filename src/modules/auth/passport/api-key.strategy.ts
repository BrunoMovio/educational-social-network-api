import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAuthService } from '../application/auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'api-key'
) {
  constructor() {
    super({ header: 'x-api-key', prefix: '' }, true, (apiKey, done) =>
      this.validate(apiKey, done)
    );
  }

  validate(apiKey, done): boolean {
    const checkKey = UserAuthService.validateApiKey(apiKey);
    if (!checkKey) {
      return done(new UnauthorizedException(), null);
    }

    return done(null, true);
  }
}
