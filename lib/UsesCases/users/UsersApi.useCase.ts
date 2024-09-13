import { APIRequestContext, APIResponse } from "@playwright/test";
import { IHttpHelper, IUser, IUserApiUsesCase } from "../../interfaces";
import { HTTPtHelper } from "../../helpers";
import EnvHelper from "../../helpers/common/env.helper";

export class UserApiUsesCase implements IUserApiUsesCase {
    private httpHelper: IHttpHelper;

    constructor(request: APIRequestContext) {
        this.httpHelper = new HTTPtHelper(request);
    }

    async list(): Promise<APIResponse> {
        let query: string = '?';
        query += `page=2`
        return this.httpHelper.httpGet(query, EnvHelper.BASE_URL!, 'users')
    }

    async read(id: string): Promise<APIResponse> {
        throw new Error("Method not implemented.");
    }

    async create(user: IUser): Promise<APIResponse> {
        return this.httpHelper.httpPost(user, EnvHelper.BASE_URL!, 'users')
    }

    async update(user: IUser): Promise<APIResponse> {
        throw new Error("Method not implemented.");
    }

    async updatePatch(user: IUser): Promise<APIResponse> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<APIResponse> {
        throw new Error("Method not implemented.");
    }
}
