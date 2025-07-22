import { IsBoolean, IsString, IsDate } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  id: string;

  @IsString()
  userId: string;

  @IsString()
  message: string;

  @IsString()
  type: 'info' | 'warning' | 'error' | 'success';

  @IsBoolean()
  read: boolean;

  @IsDate()
  timestamp: Date;
}
