import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "ring-of-fire-66811",
      "appId": "1:624656755483:web:54e4dcf835a05161f301be",
      "storageBucket": "ring-of-fire-66811.firebasestorage.app",
      "apiKey": "AIzaSyAckQV1jIlDUDeQF_kZnrV2NS2_pRX7MhE",
      "authDomain": "ring-of-fire-66811.firebaseapp.com",
      "messagingSenderId": "624656755483"
    })),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ]
};
