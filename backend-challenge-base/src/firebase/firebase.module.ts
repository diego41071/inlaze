/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// src/firebase/firebase.module.ts
import { Module } from "@nestjs/common";
import { FirebaseService } from "./firebase.service";
import * as admin from "firebase-admin";
import { firebaseConfig } from "../firebase-config";

@Module({
  providers: [FirebaseService],
  exports: [FirebaseService],
})
export class FirebaseModule {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    });
  }
}
