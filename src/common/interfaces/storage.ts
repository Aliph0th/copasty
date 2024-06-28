export interface IStorageClient {
   saveFile(
      content: string,
      fileName: string
   ): Promise<{ expirationDate: Date; url: string }>;
}
