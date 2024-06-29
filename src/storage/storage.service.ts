import { Inject, Injectable } from '@nestjs/common';
import { STORAGE_CLIENT } from '../common/constants';
import { IStorageClient } from '../common/interfaces';
import { randomUUID } from 'crypto';

@Injectable()
export class StorageService {
   constructor(@Inject(STORAGE_CLIENT) private readonly storageClient: IStorageClient) {}

   async save(text: string) {
      const fileUUID = randomUUID();
      const { expirationDate, url } = await this.storageClient.saveFile(text, fileUUID);
      return {
         uuid: fileUUID,
         url,
         expirationDate
      };
   }

   async signUrl(uuid: string) {
      return this.storageClient.signByUUID(uuid);
   }
}
