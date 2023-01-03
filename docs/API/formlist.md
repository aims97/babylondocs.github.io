---
id: formlist
---

# Get - Form List
Get a list of Form that is associated with the **Basic_Auth** token. This API returns every form along with the **Form Id, name,** and **label**.

## Header Parameters

| Parameter     | Data Type | Description                                 |
|---------------|-----------|---------------------------------------------|
| Authorization | string    | The API key for the authorization process. |
## Response Parameters

| Parameter | Data Type | Description                           |
|-----------|-----------|---------------------------------------|
| xuid      | string    | The identifier of the form.           |
| name      | string    | The name of the form.                 |
| labels    | object    | The labels to which the form belongs. |
## Sample Response
An example response returned by the Form List endpoint is shown below:
```jsx title="200 Ok"
[
    {
        "xuid": "RraJNpWlQyKUY-YRLtvSOA",
        "name": "form-1",
        "labels": []
    },
    {
        "xuid": "SgLpCktkTVq40fLtNDU2Zg",
        "name": "contact",
        "labels": []
    }
]
```