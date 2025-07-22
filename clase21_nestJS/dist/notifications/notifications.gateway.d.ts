import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/createNotification.dto';
export declare class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly notificationsService;
    server: Server;
    constructor(notificationsService: NotificationsService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    registerUser(client: Socket): import("./interfaces/notifications.interface").User | undefined;
    sendNotification(data: Omit<CreateNotificationDto, 'id' | 'read' | 'timestamp'>): void;
    getNotificationsByUser(userId: Pick<CreateNotificationDto, 'userId'>, client: Socket): void;
    readNotification(data: {
        userId: string;
        notificationId: string;
    }, client: Socket): void;
}
