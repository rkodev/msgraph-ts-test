import { AccessToken, GetTokenOptions, TokenCredential } from "@azure/identity";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createGraphServiceClient } from "@microsoft/msgraph-sdk";
import "@microsoft/msgraph-sdk-users";


class SimpleCredentials implements TokenCredential {
    tokenValue: string;

    constructor(tokenValue: string) {
        this.tokenValue = tokenValue;
    }
    getToken(scopes: string | string[], options?: GetTokenOptions): Promise<AccessToken | null>{
        return Promise.resolve({ token: this.tokenValue, expiresOnTimestamp: Date.now() + 3600 * 1000, tokenType: "Bearer" });
    }
}

// @azure/identity
const tokenValue = "";

const credential = new SimpleCredentials(tokenValue);

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["https://graph.microsoft.com/.default"]);

export const requestAdapter = new FetchRequestAdapter(authProvider);
export const graphServiceClient = createGraphServiceClient(requestAdapter);