
import EnvHelper from '../../helpers/common/env.helper';
import { HTTPtHelper } from '../../helpers';
import { IHttpHelper, ILoginRequest, IAuthApiUseCase } from '../../interfaces';
import { APIRequestContext, APIResponse } from '@playwright/test';


export class AuthApiUseCase implements IAuthApiUseCase {
    private httpHelper: IHttpHelper;

    constructor(request: APIRequestContext) {
        this.httpHelper = new HTTPtHelper(request);
    }

    async login(email: string, password: string): Promise<APIResponse> {
        const credentials: ILoginRequest = { email, password };
        return this.httpHelper.httpPost(credentials, EnvHelper.BASE_URL!, 'login');
    }
    
    async register(email: string, password: string): Promise<APIResponse> {
        const credentials: ILoginRequest = { email, password };
        return this.httpHelper.httpPost(credentials, EnvHelper.BASE_URL!, 'register');
    }
}
