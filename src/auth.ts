import { UsernamePasswordCredential } from "@azure/identity";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createGraphServiceClient } from "@microsoft/msgraph-sdk";

// @azure/identity
const credential = new UsernamePasswordCredential(
    'YOUR_TENANT_ID',
    'YOUR_CLIENT_ID',
    'YOUR_USER_NAME',
    'YOUR_PASSWORD',
  );
  
// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["User.Read"]);

export const requestAdapter = new FetchRequestAdapter(authProvider);
export const graphServiceClient = createGraphServiceClient(requestAdapter);