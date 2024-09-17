/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// src/firebase/firebase.service.ts
import { Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";

@Injectable()
export class FirebaseService {
  async createUser(email: string, password: string): Promise<admin.auth.UserRecord> {
    return admin.auth().createUser({
      email,
      password,
    });
  }

  async getUser(uid: string): Promise<admin.auth.UserRecord> {
    return admin.auth().getUser(uid);
  }

  async deleteUser(uid: string): Promise<void> {
    return admin.auth().deleteUser(uid);
  }
}
