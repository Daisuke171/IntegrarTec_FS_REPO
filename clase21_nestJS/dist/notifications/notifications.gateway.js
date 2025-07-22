"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const notifications_service_1 = require("./notifications.service");
let NotificationsGateway = class NotificationsGateway {
    notificationsService;
    server;
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    handleConnection(client) {
        const user = {
            socketId: client.id,
            userId: this.notificationsService.getRandomUserId(),
        };
        const id = this.notificationsService.createUser(user);
        console.log(`id: ${id} connected! \nuserId: ${user.userId} \nsocketId: ${user.socketId}\n`);
        client.emit('register_user', { id, ...user });
    }
    handleDisconnect(client) {
        console.log(`Goodbye ${client.id}!`);
        this.notificationsService.deleteUser(client.id);
    }
    registerUser(client) {
        const data = this.notificationsService.getUserBySocketId(client.id);
        return data;
    }
    sendNotification(data) {
        const notification = this.notificationsService.createNotification(data);
        const socketId = this.notificationsService.getUserById(data.userId)?.socketId;
        if (!socketId)
            return;
        this.server.to(socketId).emit('new_notification', notification);
    }
    getNotificationsByUser(userId, client) {
        const notifications = this.notificationsService.getNotificationsByUser(userId);
        client.emit('requested_notifications', notifications);
    }
    readNotification(data, client) {
        const success = this.notificationsService.markNotificationAsRead(data.userId, data.notificationId);
        if (!success) {
            console.log({
                type: 'read_notification',
                message: 'Notification not found or already read',
            });
            return;
        }
        client.emit('notification_read', data.notificationId);
    }
};
exports.NotificationsGateway = NotificationsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], NotificationsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('register_user'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "registerUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send_notification'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "sendNotification", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get_notifications'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "getNotificationsByUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('read_notification'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "readNotification", null);
exports.NotificationsGateway = NotificationsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: '*' }),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsGateway);
//# sourceMappingURL=notifications.gateway.js.map