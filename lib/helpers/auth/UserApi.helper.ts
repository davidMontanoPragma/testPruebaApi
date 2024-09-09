import { HTTPtHelper } from '../common/Http.helper';
import { IHttpHelper, ILoginRequest } from '../../../interfaces';
import { APIRequestContext, APIResponse } from '@playwright/test';
import EnvHelper from '../common/env.helper';

export class UserApiHelper {
    private httpHelper: IHttpHelper;

    constructor(request: APIRequestContext) {
        this.httpHelper = new HTTPtHelper(request);
    }

    async login(email: string, password: string): Promise<APIResponse> {
        const credentials: ILoginRequest = { email, password };
        return this.httpHelper.httpPost(credentials, EnvHelper.BASE_URL!, 'login');
    }

    // async getUser(): Promise<APIResponse> {

    //     return this.httpHelper.httpGet();
    // }
}
