Sure! Here's a GitHub Actions workflow YAML file to build and deploy an Angular application from the `main` branch to an Azure App Service. This example also includes steps to use Azure CDN for caching static assets.

### Steps to Set Up

1. **Azure Credentials**: Store your Azure credentials in GitHub Secrets. You can generate these credentials using the Azure CLI:

   ```sh
   az ad sp create-for-rbac --name "myApp" --role contributor --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} --sdk-auth
   ```

   Copy the output JSON and add it to your GitHub repository secrets as `AZURE_CREDENTIALS`.
2. **App Service and CDN**: Ensure you have an Azure App Service and Azure CDN set up. Replace `your-app-service-name`, `your-resource-group-name`, `your-cdn-endpoint-name`, `your-cdn-profile-name`, and `dist/your-angular-app` with your actual values.

This workflow will build your Angular application, deploy it to Azure App Service, and purge the Azure CDN cache to ensure the latest version is served.

Make sure you have a staging slot created in your Azure App Service via the Azure portal or CLI.

To save sensitive information like `subscription-id`, `resource-group`, and other configuration entries, you can use GitHub Secrets. This keeps your sensitive data secure and allows you to reference them in your workflow YAML file.

### Steps to Save Configuration Entries in GitHub Secrets

1. **Navigate to Your Repository Settings** :

* Go to your GitHub repository.
* Click on `Settings`.
* In the left sidebar, click on `Secrets and variables` > `Actions`.

1. **Add New Repository Secrets** :

* Click on `New repository secret`.
* Add secrets for each configuration entry, such as `AZURE_SUBSCRIPTION_ID`, `AZURE_RESOURCE_GROUP`, `AZURE_CDN_PROFILE_NAME`, etc.

### Example Secrets to Add

* `AZURE_SUBSCRIPTION_ID`
* `AZURE_RESOURCE_GROUP`
* `AZURE_CDN_PROFILE_NAME`
* `AZURE_CDN_ENDPOINT_NAME`
* `AZURE_APP_SERVICE_NAME`
