import { IStorageClient } from '../interfaces/storage';
import { initializeApp, App, AppOptions } from 'firebase-admin/app';

export class StorageClient implements IStorageClient {
   private readonly client: App;
   constructor(options: AppOptions) {
      this.client = initializeApp(options);
   }
}
