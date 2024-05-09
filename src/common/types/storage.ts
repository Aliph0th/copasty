import { ModuleMetadata } from '@nestjs/common';
import { AppOptions } from 'firebase-admin/app';
import { WithRequired } from '.';

export type StorageModuleOptions = WithRequired<
   AppOptions,
   'projectId' | 'storageBucket'
> & {
   clientEmail: string;
   privateKey: string;
};

export type StorageModuleAsyncOptions = {
   isGlobal: boolean;
   useFactory?: (...args: any[]) => Promise<StorageModuleOptions> | StorageModuleOptions;
   inject?: any[];
} & Pick<ModuleMetadata, 'imports'>;
