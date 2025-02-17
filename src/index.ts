import "@microsoft/msgraph-sdk-users";
import { graphServiceClient } from "./auth";

async function main() {
    console.log("Getting me");
    const result = await graphServiceClient.me.get();
    console.log(result?.displayName);
}

main().catch(console.error);
