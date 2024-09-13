import { IReportTestHelper } from "../../interfaces";

export class ReportTestHelper implements IReportTestHelper {
    constructor() { }

    printInformationRequest<T>(headerRequest: { [key: string]: string; }, bodyRequest: T): void {
        console.log("----------   Request Information   ----------\n",);
        console.log("Headers: ", headerRequest, "\n");
        console.log("Body Request: ", bodyRequest), "\n";
    };

    printInformationResponse<T>(statusResponse: number, headerResponse: { [key: string]: string; }, bodyResponse: T): void {
        console.log("\n----------   Response Information   ----------\n",);
        console.log("Headers: ", headerResponse, "\n");
        console.log("Status Response: ", statusResponse, "\n");
        console.log("Body Response:", bodyResponse);
    };
}