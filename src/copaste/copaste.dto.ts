import { IsEnum, IsOptional, Length } from 'class-validator';
import { Syntaxes, VALIDATION_RULES } from '../common/constants';

export class CreateCopasteDTO {
   @IsOptional()
   @Length(1, VALIDATION_RULES.MAX_TITLE_LENGTH)
   title?: string;

   @IsOptional()
   @IsEnum(Syntaxes)
   syntax?: Syntaxes;

   @IsOptional()
   @Length(1, VALIDATION_RULES.MAX_DESCRIPTION_LENGTH)
   description?: string;

   @Length(1, VALIDATION_RULES.MAX_CONTENT_LENGTH)
   content: string;
}
