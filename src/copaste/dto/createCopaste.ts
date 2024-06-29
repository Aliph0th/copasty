import { IsOptional, Length } from 'class-validator';
import { VALIDATION_RULES } from '../../common/constants';

export class CreateCopasteDTO {
   @IsOptional()
   @Length(1, VALIDATION_RULES.MAX_TITLE_LENGTH)
   title?: string;

   @IsOptional()
   @Length(1, VALIDATION_RULES.MAX_DESCRIPTION_LENGTH)
   description?: string;

   @Length(1, VALIDATION_RULES.MAX_CONTENT_LENGTH)
   content: string;
}
