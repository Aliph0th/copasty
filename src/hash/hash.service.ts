import { Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid';
import { ALPHABET, HASH_LENGTH } from '../common/constants';

@Injectable()
export class HashService {
   private readonly generator = customAlphabet(ALPHABET, HASH_LENGTH);
   generate() {
      return this.generator();
   }
}
