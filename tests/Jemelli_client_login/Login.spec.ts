import { test, expect, APIRequestContext, request, APIResponse } from '@playwright/test';
import { AuthApiUseCase } from '../../lib/UsesCases';
import { ILoginResponse, IAuthApiUseCase } from '../../lib/interfaces';

test.describe('Login API Tests', () => {
    let apiContext: APIRequestContext;
    let userApi: IAuthApiUseCase;
    let response: APIResponse;
    let header: { [key: string]: string; };
    let status: number;

    test.beforeAll(async () => {
        apiContext = await request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                'Content-Type': 'application/json',
            },
        });
        userApi = new AuthApiUseCase(apiContext);
    });

    test.afterAll(async () => {
        await apiContext.dispose();
    });

    test('Should login with valid credentials', async () => {

        await test.step('Crear usuario', async () => {
            response = await userApi.register('eve.holt@reqres.in', 'cityslicka');
            const respHttp: ILoginResponse = await response.json();

            header = response.headers();
            status = response.status();

            console.log('Registro', respHttp);

            // Verifica si el código de estado es 200 OK
            expect(response.status()).toBe(200);
            expect(respHttp.token).toBeDefined();
        });

        await test.step('Logueo', async () => {
            const response = await userApi.login('eve.holt@reqres.in', 'cityslicka');
            const respHttp: ILoginResponse = await response.json();

            console.log('Inicio de sesión', respHttp);

            // Verifica si el código de estado es 200 OK
            expect(response.status()).toBe(200);
            expect(respHttp.token).toBeDefined();
        });
    });
});
