import { APIResponse } from "@playwright/test";

export interface IAuthApiUseCase {

    /**
     * Metodo de logueo
     * @param email string
     * @param password string
     * @return Promise APIResponse
     */
    login(email: string, password: string): Promise<APIResponse>;
    
    /**
     * Metodo de registro
     * @param email string
     * @param password string
     * @return Promise APIResponse
     */
    register(email: string, password: string): Promise<APIResponse>
}