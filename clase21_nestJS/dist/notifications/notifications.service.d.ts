import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/notifications.interface';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { Notification } from './interfaces/notifications.interface';
export declare class NotificationsService {
    private users;
    private notifications;
    private unreadNotificationsCnt;
    getRandomUserId(): string;
    createUser(data: Omit<CreateUserDto, 'id'>): string;
    deleteUser(socketId: string): void;
    getUserById(userId: string): User | undefined;
    getUserBySocketId(socketId: string): User | undefined;
    createNotification(data: Omit<CreateNotificationDto, 'id' | 'read' | 'timestamp'>): Notification;
    getNotificationsByUser(userId: Pick<CreateNotificationDto, 'userId'>): Notification[] | undefined;
    markNotificationAsRead(userId: string, notificationId: string): boolean;
    getUnreadNotificationsCount(): number;
}
