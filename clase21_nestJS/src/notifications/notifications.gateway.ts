import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotificationsService } from './notifications.service';
import { CreateUserDto } from './dto/createUser.dto';
import { CreateNotificationDto } from './dto/createNotification.dto';

@WebSocketGateway({ cors: '*' })
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;
  constructor(private readonly notificationsService: NotificationsService) {}

  handleConnection(client: Socket) {
    const user: Omit<CreateUserDto, 'id'> = {
      socketId: client.id,
      userId: this.notificationsService.getRandomUserId(),
    };
    const id = this.notificationsService.createUser(user);

    console.log(
      `id: ${id} connected! \nuserId: ${user.userId} \nsocketId: ${user.socketId}\n`,
    );

    client.emit('register_user', { id, ...user });
  }

  handleDisconnect(client: Socket) {
    console.log(`Goodbye ${client.id}!`);
    this.notificationsService.deleteUser(client.id);
  }

  @SubscribeMessage('register_user')
  registerUser(@ConnectedSocket() client: Socket) {
    const data = this.notificationsService.getUserBySocketId(client.id);
    return data;
  }

  @SubscribeMessage('send_notification')
  sendNotification(
    @MessageBody()
    data: Omit<CreateNotificationDto, 'id' | 'read' | 'timestamp'>,
  ) {
    const notification: CreateNotificationDto =
      this.notificationsService.createNotification(data);

    const socketId: string | undefined = this.notificationsService.getUserById(
      data.userId,
    )?.socketId;

    if (!socketId) return;

    this.server.to(socketId).emit('new_notification', notification);
  }

  @SubscribeMessage('get_notifications')
  getNotificationsByUser(
    @MessageBody() userId: Pick<CreateNotificationDto, 'userId'>,
    @ConnectedSocket() client: Socket,
  ) {
    const notifications =
      this.notificationsService.getNotificationsByUser(userId);
    client.emit('requested_notifications', notifications);
  }

  @SubscribeMessage('read_notification')
  readNotification(
    @MessageBody() data: { userId: string; notificationId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const success = this.notificationsService.markNotificationAsRead(
      data.userId,
      data.notificationId,
    );

    if (!success) {
      console.log({
        type: 'read_notification',
        message: 'Notification not found or already read',
      });
      return;
    }

    client.emit('notification_read', data.notificationId);
  }
}
