import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// src/app.module.ts
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [AuthModule],
})
@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
