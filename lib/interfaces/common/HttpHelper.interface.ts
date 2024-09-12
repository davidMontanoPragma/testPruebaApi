import { APIResponse } from "@playwright/test";

export interface IHttpHelper {
    /**
     * Method by which the post request is made
     * @param data T
     * @param baseUrl string
     * @param paht string
     * @return Promise APIResponse
     */
    httpPost<T>(data: T,  baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the get request is made
     * @param query string
     * @param baseUrl string
     * @param paht string
     * @return Promise APIResponse
     */
    httpGet(query: string, baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the patch request is made
     * @param data T
     * @param baseUrl string
     * @param paht string
     * @return Promise APIResponse
     */
    httpPatch<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the delete request is made
     * @param data T
     * @param baseUrl string
     * @param paht string
     * @return Promise APIResponse
     */
    httpDelete<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse>;

    /**
     * Method by which the put request is made
     * @param data T
     * @param baseUrl string
     * @param paht string
     * @return Promise APIResponse
     */
    httpPut<T>(data: T, baseUrl: string, paht: string): Promise<APIResponse>;
}
