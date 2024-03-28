# Getting Started with shop

This project was configured with Azure for [Containerized microservices](https://learn.microsoft.com/en-us/azure/container-apps/get-started?tabs=bash)

## Prerequisites

Node.js: Ensure you have Node.js installed on your machine.
NestJS CLI: Install the NestJS CLI globally with npm: `npm i -g @nestjs/cli`.
Docker: Docker needs to be installed and running on your machine for containerization.
Azure CLI: Install Azure CLI for interacting with Azure from your local machine.
kubectl: The Kubernetes command-line tool, `kubectl`, allows you to run commands against Kubernetes clusters. [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/).
VSCode Extensions: Install the Docker extension for VSCode, and optionally, the Azure Account and Azure CLI Tools extensions for easier interaction with Azure resources.


## Step 1: Setting Up Your NestJS Project

### Open the Project in VSCode
Open the newly created project directory in VSCode.

`cd shop`
`code .`

### Run the Project Locally
Before containerizing, ensure your application runs locally. 
Use the integrated terminal in VSCode to start your NestJS application.

`npx nest start`

Visit http://localhost:3000/shop  in your browser to see your application running.

### Test the project Locally:
Generated project comes with base code you can immediately test using `npx yarn test` command in the root directory.

## Step 2: Containerizing Your NestJS Application

A basic Dockerfile has been created for you - saved as a yaml file.
You can add more contents to specify and customize how you would like the application to be containerized.

### Build Your Docker Image
Using the terminal in VSCode, run the following command to build your Docker image. 
Don't forget to replace your-image-name with a name for your image.

`docker build -t your-image-name` 

### Run Your Container 
Once the image is built, you can run it locally to test:

`docker run -p 3000:3000 your-image-name`  - port number does not have to be 3000, this is chosen as a default

Your NestJS application is now running inside a Docker container and is accessible via http://localhost:3000/shop.

## Step 3: Pushing to Azure Container Registry 

### Create an Azure Container Registry (ACR) 
You can create an ACR using the Azure CLI or the Azure portal. 
Here's how you might do it with the Azure CLI:

`az acr create --resource-group yourResourceGroup --name yourRegistryName --sku Basic`

### Authenticate Docker with ACR 
Ensure Docker can push images to your ACR.

`az acr login --name yourRegistryName`

### Tag Your Docker Image
Before pushing, tag your image with the login server name of your ACR.

`docker tag your-image-name yourRegistryName.azurecr.io/your-image-name:v1`

### Push the Image to ACR

`docker push yourRegistryName.azurecr.io/your-image-name:v1`

Your NestJS application image is now hosted in Azure Container Registry and ready for deployment to Azure Kubernetes Service (AKS).

## Step 4: Deploying to Azure Kubernetes Service (AKS):

Deploy your containerized application to AKS using `kubectl` after configuring your AKS cluster to pull images from your ACR.

## Resources:

Always refer to the official Azure documentation for the most current information and best practices.