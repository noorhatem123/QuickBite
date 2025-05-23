import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class ProxyService {
  async forwardGet(url: string): Promise<AxiosResponse> {
    return await axios.get(url);
  }

  async forwardPost(url: string, data: any): Promise<AxiosResponse> {
    return await axios.post(url, data);
  }

  async forwardPut(url: string, data: any): Promise<AxiosResponse> {
    return await axios.put(url, data);
  }

  async forwardDelete(url: string): Promise<AxiosResponse> {
    return await axios.delete(url);
  }
}
