# datadog-api-client.v1.DashboardsApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                      | HTTP request                                | Description                |
| ----------------------------------------------------------- | ------------------------------------------- | -------------------------- |
| [**createDashboard**](DashboardsApi.md#createDashboard)     | **POST** /api/v1/dashboard                  | Create a new dashboard     |
| [**deleteDashboard**](DashboardsApi.md#deleteDashboard)     | **DELETE** /api/v1/dashboard/{dashboard_id} | Delete a dashboard         |
| [**deleteDashboards**](DashboardsApi.md#deleteDashboards)   | **DELETE** /api/v1/dashboard                | Delete dashboards          |
| [**getDashboard**](DashboardsApi.md#getDashboard)           | **GET** /api/v1/dashboard/{dashboard_id}    | Get a dashboard            |
| [**listDashboards**](DashboardsApi.md#listDashboards)       | **GET** /api/v1/dashboard                   | Get all dashboards         |
| [**restoreDashboards**](DashboardsApi.md#restoreDashboards) | **PATCH** /api/v1/dashboard                 | Restore deleted dashboards |
| [**updateDashboard**](DashboardsApi.md#updateDashboard)     | **PUT** /api/v1/dashboard/{dashboard_id}    | Update a dashboard         |

## **createDashboard**

> Dashboard createDashboard(body)

Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended.
Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  // Dashboard | Create a dashboard request body.
  body: {
    description: "description_example",
    isReadOnly: false,
    layoutType: "ordered",
    notifyList: ["notifyList_example"],
    reflowType: "auto",
    restrictedRoles: ["restrictedRoles_example"],
    templateVariablePresets: [
      {
        name: "name_example",
        templateVariables: [
          {
            name: "name_example",
            value: "value_example",
          },
        ],
      },
    ],
    templateVariables: [
      {
        availableValues: ["my-host", "host1", "host2"],
        _default: "my-host",
        name: "host1",
        prefix: "host",
      },
    ],
    title: "",
    widgets: [
      {
        definition: {
          alertId: "",
          time: {
            liveSpan: "5m",
          },
          title: "title_example",
          titleAlign: "center",
          titleSize: "titleSize_example",
          type: "alert_graph",
          vizType: "timeseries",
        },
        id: 1,
        layout: {
          height: 0,
          isColumnBreak: true,
          width: 0,
          x: 0,
          y: 0,
        },
      },
    ],
  },
};

apiInstance
  .createDashboard(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type          | Description                      | Notes |
| -------- | ------------- | -------------------------------- | ----- |
| **body** | **Dashboard** | Create a dashboard request body. |

### Return type

**Dashboard**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteDashboard**

> DashboardDeleteResponse deleteDashboard()

Delete a dashboard using the specified ID.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiDeleteDashboardRequest = {
  // string | The ID of the dashboard.
  dashboardId: "dashboard_id_example",
};

apiInstance
  .deleteDashboard(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description              | Notes                 |
| --------------- | ------------ | ------------------------ | --------------------- |
| **dashboardId** | [**string**] | The ID of the dashboard. | defaults to undefined |

### Return type

**DashboardDeleteResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication Error | -                |
| **404**     | Dashboards Not Found | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteDashboards**

> void deleteDashboards(body)

Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiDeleteDashboardsRequest = {
  // DashboardBulkDeleteRequest | Delete dashboards request body.
  body: {
    data: [
      {
        id: "123-abc-456",
        type: "dashboard",
      },
    ],
  },
};

apiInstance
  .deleteDashboards(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                           | Description                     | Notes |
| -------- | ------------------------------ | ------------------------------- | ----- |
| **body** | **DashboardBulkDeleteRequest** | Delete dashboards request body. |

### Return type

**void**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **204**     | No Content           | -                |
| **400**     | Bad Request          | -                |
| **403**     | Forbidden            | -                |
| **404**     | Dashboards Not Found | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getDashboard**

> Dashboard getDashboard()

Get a dashboard using the specified ID.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiGetDashboardRequest = {
  // string | The ID of the dashboard.
  dashboardId: "dashboard_id_example",
};

apiInstance
  .getDashboard(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description              | Notes                 |
| --------------- | ------------ | ------------------------ | --------------------- |
| **dashboardId** | [**string**] | The ID of the dashboard. | defaults to undefined |

### Return type

**Dashboard**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication Error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listDashboards**

> DashboardSummary listDashboards()

Get all dashboards.

**Note**: This query will only return custom created or cloned dashboards.
This query will not return preset dashboards.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiListDashboardsRequest = {
  // boolean | When `true`, this query only returns shared custom created or cloned dashboards. (optional)
  filterShared: true,
};

apiInstance
  .listDashboards(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type          | Description                                                                                | Notes                            |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------ | -------------------------------- |
| **filterShared** | [**boolean**] | When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards. | (optional) defaults to undefined |

### Return type

**DashboardSummary**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication Error | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **restoreDashboards**

> void restoreDashboards(body)

Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiRestoreDashboardsRequest = {
  // DashboardRestoreRequest | Restore dashboards request body.
  body: {
    data: [
      {
        id: "123-abc-456",
        type: "dashboard",
      },
    ],
  },
};

apiInstance
  .restoreDashboards(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                        | Description                      | Notes |
| -------- | --------------------------- | -------------------------------- | ----- |
| **body** | **DashboardRestoreRequest** | Restore dashboards request body. |

### Return type

**void**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **204**     | No Content           | -                |
| **400**     | Bad Request          | -                |
| **403**     | Forbidden            | -                |
| **404**     | Dashboards Not Found | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateDashboard**

> Dashboard updateDashboard(body)

Update a dashboard using the specified ID.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiUpdateDashboardRequest = {
  // string | The ID of the dashboard.
  dashboardId: "dashboard_id_example",
  // Dashboard | Update Dashboard request body.
  body: {
    description: "description_example",
    isReadOnly: false,
    layoutType: "ordered",
    notifyList: ["notifyList_example"],
    reflowType: "auto",
    restrictedRoles: ["restrictedRoles_example"],
    templateVariablePresets: [
      {
        name: "name_example",
        templateVariables: [
          {
            name: "name_example",
            value: "value_example",
          },
        ],
      },
    ],
    templateVariables: [
      {
        availableValues: ["my-host", "host1", "host2"],
        _default: "my-host",
        name: "host1",
        prefix: "host",
      },
    ],
    title: "",
    widgets: [
      {
        definition: {
          alertId: "",
          time: {
            liveSpan: "5m",
          },
          title: "title_example",
          titleAlign: "center",
          titleSize: "titleSize_example",
          type: "alert_graph",
          vizType: "timeseries",
        },
        id: 1,
        layout: {
          height: 0,
          isColumnBreak: true,
          width: 0,
          x: 0,
          y: 0,
        },
      },
    ],
  },
};

apiInstance
  .updateDashboard(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type          | Description                    | Notes                 |
| --------------- | ------------- | ------------------------------ | --------------------- |
| **body**        | **Dashboard** | Update Dashboard request body. |
| **dashboardId** | [**string**]  | The ID of the dashboard.       | defaults to undefined |

### Return type

**Dashboard**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
