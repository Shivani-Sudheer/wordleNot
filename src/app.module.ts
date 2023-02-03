import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { WordsModule } from './words/words.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidWordsModule } from './valid-words/validWords.module';

@Module({
  imports: [
    UserModule,
    AuthenticationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'postgres',
      // database: '!wordle',
      autoLoadEntities: true,
      synchronize: true,
      url: 'postgresql://postgres:m0UNu3uDY5iez5vXOe9t@containers-us-west-106.railway.app:6580/railway'
    }),
    WordsModule,
    ValidWordsModule,
  ],
})
export class AppModule {}
