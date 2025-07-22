"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const unique_names_generator_1 = require("unique-names-generator");
let NotificationsService = class NotificationsService {
    users = new Map();
    notifications = new Map();
    unreadNotificationsCnt = 0;
    getRandomUserId() {
        const randomName = (0, unique_names_generator_1.uniqueNamesGenerator)({
            dictionaries: [unique_names_generator_1.adjectives, unique_names_generator_1.colors, unique_names_generator_1.animals],
        });
        return randomName;
    }
    createUser(data) {
        const newUser = {
            id: (0, uuid_1.v4)(),
            socketId: data.socketId,
        };
        this.users.set(newUser.socketId, { ...newUser, ...data });
        return newUser.id;
    }
    deleteUser(socketId) {
        this.users.delete(socketId);
    }
    getUserById(userId) {
        for (const user of this.users.values()) {
            if (user.userId === userId) {
                return user;
            }
        }
        return undefined;
    }
    getUserBySocketId(socketId) {
        for (const user of this.users.values()) {
            if (user.socketId === socketId) {
                return user;
            }
        }
        return undefined;
    }
    createNotification(data) {
        const notification = {
            ...data,
            id: (0, uuid_1.v4)(),
            read: false,
            timestamp: new Date(),
        };
        if (!this.notifications.has(notification.userId)) {
            this.notifications.set(notification.userId, []);
        }
        this.notifications.get(notification.userId).push(notification);
        this.unreadNotificationsCnt++;
        return notification;
    }
    getNotificationsByUser(userId) {
        console.log('Looking up notifications for:', userId.userId);
        if (this.notifications.has(userId.userId) === null) {
            console.log('No notifications found for:', userId.userId);
            return undefined;
        }
        console.log('Available userIds:', [...this.notifications.keys()]);
        return this.notifications.get(userId.userId);
    }
    markNotificationAsRead(userId, notificationId) {
        const userNotifications = this.notifications.get(userId);
        if (!userNotifications)
            return false;
        const notification = userNotifications.find((n) => n.id === notificationId);
        if (!notification || notification.read)
            return false;
        notification.read = true;
        this.unreadNotificationsCnt--;
        return true;
    }
    getUnreadNotificationsCount() {
        return this.unreadNotificationsCnt;
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map