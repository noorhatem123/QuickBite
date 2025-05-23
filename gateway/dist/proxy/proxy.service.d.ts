import { AxiosResponse } from 'axios';
export declare class ProxyService {
    forwardGet(url: string): Promise<AxiosResponse>;
    forwardPost(url: string, data: any): Promise<AxiosResponse>;
    forwardPut(url: string, data: any): Promise<AxiosResponse>;
    forwardDelete(url: string): Promise<AxiosResponse>;
}
