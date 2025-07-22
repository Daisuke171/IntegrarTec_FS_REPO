export declare class CreateNotificationDto {
    id: string;
    userId: string;
    message: string;
    type: 'info' | 'warning' | 'error' | 'success';
    read: boolean;
    timestamp: Date;
}
