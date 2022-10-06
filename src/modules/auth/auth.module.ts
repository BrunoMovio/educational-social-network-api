import { Module } from '@nestjs/common';
import { UserAuthService } from './application/auth.service';
import { UserAuthGuard } from './guards/auth.guard';
import { ApiKeyStrategy } from './passport/api-key.strategy';
import { FirebaseAuthStrategy } from './passport/firebase-auth.strategy';
import { UserAuthController } from './presentation/auth.controller';

@Module({
  imports: [],
  providers: [
    UserAuthService,
    UserAuthGuard,
    FirebaseAuthStrategy,
    ApiKeyStrategy,
  ],
  exports: [UserAuthService],
  controllers: [UserAuthController],
})
export class AuthModule {}
