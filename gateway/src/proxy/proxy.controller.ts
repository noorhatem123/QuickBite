import { Controller, Get, Post, Put, Delete, Body, Param, Res } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { Response } from 'express';

@Controller('api')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  // AUTH
  @Post('auth/login')
  async login(@Body() body: any, @Res() res: Response) {
    const result = await this.proxyService.forwardPost('http://localhost:5001/auth/login', body);
    return res.status(result.status).json(result.data);
  }

  @Post('auth/register')
  async register(@Body() body: any, @Res() res: Response) {
    const result = await this.proxyService.forwardPost('http://localhost:5001/auth/register', body);
    return res.status(result.status).json(result.data);
  }

  // MENU ROUTES
  @Get('menu')
  async getMenu(@Res() res: Response) {
    const result = await this.proxyService.forwardGet('http://localhost:5002/menu');
    return res.status(result.status).json(result.data);
  }

  @Post('menu')
  async addMenuItem(@Body() body: any, @Res() res: Response) {
    const result = await this.proxyService.forwardPost('http://localhost:5002/menu', body);
    return res.status(result.status).json(result.data);
  }

  @Put('menu/:id')
  async updateMenuItem(@Param('id') id: string, @Body() body: any, @Res() res: Response) {
    const result = await this.proxyService.forwardPut(`http://localhost:5002/menu/${id}`, body);
    return res.status(result.status).json(result.data);
  }

  @Delete('menu/:id')
  async deleteMenuItem(@Param('id') id: string, @Res() res: Response) {
    const result = await this.proxyService.forwardDelete(`http://localhost:5002/menu/${id}`);
    return res.status(result.status).json(result.data);
  }

  // ORDER ROUTES
  @Get('orders')
  async getOrders(@Res() res: Response) {
    const result = await this.proxyService.forwardGet('http://localhost:5003/orders');
    return res.status(result.status).json(result.data);
  }

  @Post('orders')
  async createOrder(@Body() body: any, @Res() res: Response) {
    const result = await this.proxyService.forwardPost('http://localhost:5003/orders', body);
    return res.status(result.status).json(result.data);
  }

  // FEEDBACK ROUTES
  @Get('feedback')
  async getFeedback(@Res() res: Response) {
    const result = await this.proxyService.forwardGet('http://localhost:5004/feedback');
    return res.status(result.status).json(result.data);
  }

  @Post('feedback')
  async postFeedback(@Body() body: any, @Res() res: Response) {
    const result = await this.proxyService.forwardPost('http://localhost:5004/feedback', body);
    return res.status(result.status).json(result.data);
  }
}
