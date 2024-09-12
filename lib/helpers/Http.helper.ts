import { APIRequestContext, APIResponse } from '@playwright/test';
import { IHttpHelper } from '../interfaces';

export class HTTPtHelper implements IHttpHelper {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }
    
    async httpPost<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse> {
        
        const response = await this.request.post(`${baseUrl}/${paht}`, {
            data: data,
        });

        return response;
    }
    
    async httpGet(query: string, baseUrl: string, paht: string): Promise<APIResponse> {
        
        const response = await this.request.get(`${baseUrl}/${paht}${query}`);

        return response;
    }
    
    async httpPatch<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse> {
        
        const response = await this.request.patch(`${baseUrl}/${paht}`, {
            data: data,
        });

        return response;
    }
    
    async httpDelete<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse> {
        
        const response = await this.request.delete(`${baseUrl}/${paht}`, {
            data: data,
        });

        return response;
    }
    
    async httpPut<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse> {
        
        const response = await this.request.put(`${baseUrl}/${paht}`, {
            data: data,
        });

        return response;
    }
}
