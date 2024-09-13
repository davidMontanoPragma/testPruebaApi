export interface IReportTestHelper {
    
    /**
     * Metodo para mostrar el reporte del envío de la información
     * @param headerRequest  [key: string]: string; 
     * @param bodyRequest T
     */
    printInformationRequest<T>(headerRequest: { [key: string]: string; }, bodyRequest: T): void;

    /**
     * Metodo para mostrar en el reporte la respuesta de la petición
     * @param statusResponse number
     * @param headerResponse  [key: string]: string; 
     * @param bodyResponse T
     */
    printInformationResponse<T>(statusResponse: number, headerResponse: { [key: string]: string; }, bodyResponse: T): void;
}
