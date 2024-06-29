import { Bucket, File } from '@google-cloud/storage';
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
      return await this.signUrl(file);
   }
   async signByUUID(uuid: string) {
      const files = await this.bucket.getFiles({ prefix: uuid });
      return await this.signUrl(files[0][0]);
   }

   private async signUrl(file: File) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + EXPIRATION_DAYS);
      const url = await file.getSignedUrl({
         action: 'read',
         expires: expirationDate
      });
      return { expirationDate, url: url[0] };
   }
}
