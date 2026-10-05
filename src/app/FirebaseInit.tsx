"use client";

import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase.config";

if (getApps().length === 0) initializeApp(firebaseConfig);

export default function FirebaseInit() {
  return null;
}
