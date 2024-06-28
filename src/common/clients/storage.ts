import { Bucket } from '@google-cloud/storage';
import { App, AppOptions, initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { IStorageClient } from '../interfaces/storage';
import { EXPIRATION_DAYS } from '../constants';

export class StorageClient implements IStorageClient {
   private readonly app: App;
   private readonly bucket: Bucket;
   constructor(options: AppOptions) {
      this.app = initializeApp(options);
      this.bucket = getStorage(this.app).bucket();
   }
   async saveFile(content: string, fileName: string) {
      const file = this.bucket.file(`${fileName}.txt`);
      await file.save(content);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + EXPIRATION_DAYS);
      const url = await file.getSignedUrl({
         action: 'read',
         expires: expirationDate
      });
      console.log(url);
      return {
         expirationDate,
         url: url[0]
      };
   }
}
