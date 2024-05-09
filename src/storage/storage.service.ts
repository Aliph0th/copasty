import { Inject, Injectable } from '@nestjs/common';
import { STORAGE_CLIENT } from '../common/constants';
import { IStorageClient } from '../common/interfaces';

@Injectable()
export class StorageService {
   constructor(@Inject(STORAGE_CLIENT) private readonly storageClient: IStorageClient) {}
}
