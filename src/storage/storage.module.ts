import { DynamicModule, Module, Provider } from '@nestjs/common';
import { StorageModuleAsyncOptions } from '../common/types';
import { StorageService } from './storage.service';
import { STORAGE_CLIENT } from '../common/constants';
import { StorageClient } from '../common/clients/storage';
import { credential } from 'firebase-admin';

@Module({
   providers: [StorageService],
   exports: [StorageService]
})
export class StorageModule {
   static forRootAsync(options: StorageModuleAsyncOptions): DynamicModule {
      return {
         module: StorageModule,
         global: options.isGlobal,
         imports: options.imports,
         providers: [this.createServiceProvider(options)]
      };
   }

   private static createServiceProvider(options: StorageModuleAsyncOptions): Provider {
      return {
         provide: STORAGE_CLIENT,
         async useFactory(...args: any[]) {
            const opts = await options.useFactory(...args);
            opts.credential = credential.cert({
               clientEmail: opts.clientEmail,
               projectId: opts.projectId,
               privateKey: opts.privateKey
            });
            return new StorageClient(opts);
         },
         inject: options.inject
      };
   }
}
