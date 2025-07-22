import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/notifications.interface';
import { CreateNotificationDto } from './dto/createNotification.dto';
import { Notification } from './interfaces/notifications.interface';
import { v4 as uuidv4 } from 'uuid';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

@Injectable()
export class NotificationsService {
  private users = new Map<string, User>();
  private notifications = new Map<string, Notification[]>();
  private unreadNotificationsCnt: number = 0;

  getRandomUserId(): string {
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    }); // example: big_red_donkey
    return randomName;
  }

  createUser(data: Omit<CreateUserDto, 'id'>): string {
    const newUser = {
      id: uuidv4(),
      socketId: data.socketId,
    };

    this.users.set(newUser.socketId, { ...newUser, ...data });

    return newUser.id;
  }

  deleteUser(socketId: string) {
    this.users.delete(socketId);
  }

  getUserById(userId: string): User | undefined {
    for (const user of this.users.values()) {
      if (user.userId === userId) {
        return user;
      }
    }
    return undefined;
  }

  getUserBySocketId(socketId: string): User | undefined {
    for (const user of this.users.values()) {
      if (user.socketId === socketId) {
        return user;
      }
    }
    return undefined;
  }

  createNotification(
    data: Omit<CreateNotificationDto, 'id' | 'read' | 'timestamp'>,
  ): Notification {
    const notification: CreateNotificationDto = {
      ...data,
      id: uuidv4(),
      read: false,
      timestamp: new Date(),
    };

    if (!this.notifications.has(notification.userId)) {
      this.notifications.set(notification.userId, []);
    }

    this.notifications.get(notification.userId)!.push(notification);

    this.unreadNotificationsCnt++;

    // console.log('Saving notification for:', notification.userId);
    // console.log(`message: ${notification.message}`);
    // console.log(this.notifications.get(notification.userId));

    return notification;
  }

  getNotificationsByUser(
    userId: Pick<CreateNotificationDto, 'userId'>,
  ): Notification[] | undefined {
    console.log('Looking up notifications for:', userId.userId);
    if (this.notifications.has(userId.userId) === null) {
      console.log('No notifications found for:', userId.userId);
      return undefined;
    }
    console.log('Available userIds:', [...this.notifications.keys()]);
    return this.notifications.get(userId.userId);
  }

  markNotificationAsRead(userId: string, notificationId: string): boolean {
    const userNotifications = this.notifications.get(userId);
    if (!userNotifications) return false;

    const notification = userNotifications.find((n) => n.id === notificationId);
    if (!notification || notification.read) return false;

    notification.read = true;
    this.unreadNotificationsCnt--;
    return true;
  }

  getUnreadNotificationsCount(): number {
    return this.unreadNotificationsCnt;
  }
}
