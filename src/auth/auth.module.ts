import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { UserModule } from 'src/user/user.module';
import { SessionSerializer } from './session.serializer';
import { NaverStrategy } from './naver.strategy';
import { KakaoStrategy } from './kakao.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'google', session: true }),
    PassportModule.register({ defaultStrategy: 'kakao', session: true }),
  ],
  providers: [
    AuthService,
    SessionSerializer,
    GoogleStrategy,
    NaverStrategy,
    KakaoStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
