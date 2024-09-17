/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// src/auth/auth.controller.ts
import { Body, Controller, Post } from "@nestjs/common";
import { FirebaseService } from "../firebase/firebase.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post("register")
  async register(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    try {
      const userRecord = await this.firebaseService.createUser(email, password);
      return { uid: userRecord.uid, email: userRecord.email };
    } catch (error) {
      throw new Error(`Error registering user:`);
    }
  }
}
