## Setup and Test a TypeScript Project

### Prerequisites
- Node.js installed
- npm or yarn installed

### Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/rkodev/msgraph-ts-test.git
    cd msgraph-ts-test
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

3. **Compile TypeScript:**
    ```sh
    npm run build
    ```
    or
    ```sh
    yarn build
    ```

### Setup Microsoft Graph SDK

1. **Install Microsoft Graph SDK:**
    ```sh
    npm install @microsoft/microsoft-graph-client
    ```
    or
    ```sh
    yarn add @microsoft/microsoft-graph-client
    ```

2. **Configure Microsoft Graph Client:**
    Create a file `graphClient.ts` and add the following code:
    ```typescript
    import { Client } from "@microsoft/microsoft-graph-client";
    import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
    import { InteractiveBrowserCredential } from "@azure/identity";

    const credential = new InteractiveBrowserCredential({
        clientId: "YOUR_CLIENT_ID",
        tenantId: "YOUR_TENANT_ID"
    });

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
        scopes: ["User.Read"]
    });

    const client = Client.initWithMiddleware({ authProvider });

    export default client;
    ```

3. **Make a call to Microsoft Graph:**
    In your TypeScript file, you can now use the configured client to make calls:
    ```typescript
    import client from "./graphClient";

    async function getUser() {
        const user = await client.api('/me').get();
        console.log(user);
    }

    getUser();
    ```

### Notes
- Ensure you have the correct permissions to clone the repository.
- Adjust the commands as per your package manager (npm or yarn).
- Replace `YOUR_CLIENT_ID` and `YOUR_TENANT_ID` with your actual Azure AD application credentials.
- Ensure you have the necessary permissions and scopes configured in your Azure AD application.
- Follow the [Microsoft Graph SDK documentation](https://docs.microsoft.com/en-us/graph/sdks/sdk-installation) for more details.

