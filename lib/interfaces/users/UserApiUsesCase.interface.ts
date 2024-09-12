import { APIResponse } from "@playwright/test";
import { IUser } from "./User.interface";

export interface IUserApiUsesCase {

    /**
     * Metodo que lista los usuario
     * @return Promise APIResponse
     */
    list(): Promise<APIResponse>;

    /**
     * Metodo para leer un usuario
     * @param id string
     * @return Promise APIResponse
     */
    read(id: string): Promise<APIResponse>;

    /**
     * Metodo para crear un usuario
     * @param user IUser
     * @return Promise APIResponse
     */
    create(user: IUser): Promise<APIResponse>;

    /**
     * Metodo para actualizar el usuario con el PUT
     * @param user IUser
     * @return Promise APIResponse
     */
    update(user: IUser): Promise<APIResponse>;

    /**
     * Metodo para actualizar el usuario con el PATCH
     * @param user IUser
     * @return Promise APIResponse
     */
    updatePatch(user: IUser): Promise<APIResponse>;

    /**
     * Metodo para eliminar el usuario
     * @param id 
     * @return Promise APIResponse
     */
    delete(id: string): Promise<APIResponse>;
}