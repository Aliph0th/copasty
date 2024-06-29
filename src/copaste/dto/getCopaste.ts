import { Length } from 'class-validator';
import { HASH_LENGTH } from '../../common/constants';

export class GetCopasteDTO {
   @Length(HASH_LENGTH, HASH_LENGTH, {
      message: `hash must be equal to ${HASH_LENGTH} characters`
   })
   hash: string;
}
