/**
 * Get all hosts for your organization returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params: v1.HostsApiListHostsRequest = {
  filter: "env:ci",
};

apiInstance
  .listHosts(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
