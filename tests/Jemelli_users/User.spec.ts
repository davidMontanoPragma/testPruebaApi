import { test, expect, APIRequestContext, request } from '@playwright/test';
import { UserApiUsesCase } from '../../lib/UsesCases';
import { IResponseHttp, IUser, IUserApiUsesCase, IUserList } from '../../lib/interfaces';

test.describe('User API Tests', () => {
    let apiContext: APIRequestContext;
    let userApi: IUserApiUsesCase;

    test.beforeAll(async () => {
        apiContext = await request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                'Content-Type': 'application/json',
            },
        });
        userApi = new UserApiUsesCase(apiContext);
    });

    test.afterAll(async () => {
        await apiContext.dispose();
    });

    test('Validado la lista de usuarios', async () => {
        const response = await userApi.list();
        const respHttp: IResponseHttp<IUserList[]> = await response.json();

        console.log('Lista de usuarios', respHttp);

        expect(response.status()).toBe(200);
        expect(respHttp.data.length > 0).toBeDefined();
    });

    test('Validado la creación de usuario', async () => {

        const response = await userApi.create({ name: 'Cristhian', job: 'Pragma' });
        const respHttp: IUser = await response.json();

        console.log('Respuesta de creación del usuario', respHttp);

        expect(response.status()).toBe(201);
        expect(respHttp.id).toBeDefined();
    });
});
