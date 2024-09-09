import { test, expect, APIRequestContext, request } from '@playwright/test';
import { UserApiHelper } from '../../lib/helpers';
import { ILoginResponse, IResponseHttp } from '../../interfaces';

test.describe('Login API Tests', () => {
    let apiContext: APIRequestContext;
    let userApi: UserApiHelper;

    test.beforeAll(async () => {
        apiContext = await request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                'Content-Type': 'application/json',
            },
        });
        userApi = new UserApiHelper(apiContext);
    });

    test.afterAll(async () => {
        await apiContext.dispose();
    });

    test('Should login with valid credentials', async () => {
        const response = await userApi.login('eve.holt@reqres.in', 'cityslicka');
        const respHttp: ILoginResponse = await response.json();

        // Verifica si el código de estado es 200 OK
        expect(response.status()).toBe(200);
        expect(respHttp.token).toBeDefined();
    });
});
