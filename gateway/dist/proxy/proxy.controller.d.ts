import { ProxyService } from './proxy.service';
import { Response } from 'express';
export declare class ProxyController {
    private readonly proxyService;
    constructor(proxyService: ProxyService);
    login(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    register(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getMenu(res: Response): Promise<Response<any, Record<string, any>>>;
    addMenuItem(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    updateMenuItem(id: string, body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteMenuItem(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getOrders(res: Response): Promise<Response<any, Record<string, any>>>;
    createOrder(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getFeedback(res: Response): Promise<Response<any, Record<string, any>>>;
    postFeedback(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
