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

1. **Configure Microsoft Graph Client:**
    Modify the file `auth.ts` and replace the auth provider with the appropriate details:
    ```typescript
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
    ```

    **Hint** If you do not have a tenant set up, you can use an access token with graph explorer and use `simple_credentials.ts` to provide a authentication.

        i. Go to GE and obtain a token
        ii. Add it to the value `const tokenValue = "";`
        iii. In index.ts, replace "import { graphServiceClient } from "./auth";" with "import { graphServiceClient } from "./simple_credentials";"

2. **Install Microsoft Graph SDK package**
    ```sh
    npm install @microsoft/msgraph-sdk-users
    ```
    or
    ```sh
    yarn add @microsoft/msgraph-sdk-users
    ```

    **Hint** The required package for the section of graph you want to test should always be installed i.e

    | Section | Package | Install Command | Import Statement |
    |---------|---------|-----------------|------------------|
    | Users   | @microsoft/msgraph-sdk-users | npm install @microsoft/msgraph-sdk-users | import "@microsoft/msgraph-sdk-users"; |
    | Groups  | @microsoft/msgraph-sdk-groups | npm install @microsoft/msgraph-sdk-groups | import "@microsoft/msgraph-sdk-groups"; |
    | Mail    | @microsoft/msgraph-sdk-mail | npm install @microsoft/msgraph-sdk-mail | import "@microsoft/msgraph-sdk-mail"; |
    | Files   | @microsoft/msgraph-sdk-files | npm install @microsoft/msgraph-sdk-files | import "@microsoft/msgraph-sdk-files"; |

3. **Make a call to Microsoft Graph:**
    In your TypeScript file, you can now use the configured client to make calls, ensure that the installed package for the graph subsection is always impoted. 
    ```typescript
    import "@microsoft/msgraph-sdk-users"; // this is necessary to make calls for this section
    import { graphServiceClient } from "./auth";

    async function main() {
        console.log("Getting me");
        const result = await graphServiceClient.me.get();
        console.log(result?.displayName);
    }

    main().catch(console.error);
    ```

### Notes
- Ensure you have the correct permissions to clone the repository.
- Adjust the commands as per your package manager (npm or yarn).
- Replace `YOUR_CLIENT_ID` and `YOUR_TENANT_ID` with your actual Azure AD application credentials.
- Ensure you have the necessary permissions and scopes configured in your Azure AD application.
- Follow the [Microsoft Graph SDK documentation](https://docs.microsoft.com/en-us/graph/sdks/sdk-installation) for more details.

