import { Module } from '@nestjs/common';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProfileController } from './api/profile/profile.controller';
import { PostsModule } from './api/posts/posts.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'blog',
      models: [],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [ProfileController],
  providers: [],
  exports: [],
})
export class AppModule {}
