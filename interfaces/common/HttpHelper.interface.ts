import { APIResponse } from "@playwright/test";

export interface IHttpHelper {
    /**
     * Method by which the post request is made
     * @param data 
     * @param baseUrl 
     * @param paht 
     */
    httpPost<T>(data: T,  baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the get request is made
     * @param headers 
     * @param baseUrl 
     * @param paht 
     */
    httpGet(headers: { [key: string]: string; } | undefined, baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the patch request is made
     * @param data 
     * @param baseUrl 
     * @param paht 
     */
    httpPatch<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the delete request is made
     * @param data 
     * @param baseUrl 
     * @param paht 
     */
    httpDelete<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the put request is made
     * @param data 
     * @param baseUrl 
     * @param paht 
     */
    httpPut<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse>;
}
