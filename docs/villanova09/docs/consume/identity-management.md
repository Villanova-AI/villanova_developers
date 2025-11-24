---
sidebarDepth: 2
---
# Villanova Identity Management System

The Villanova Identity Management System is based on the open source Keycloak identity and access management system. Villanova Applications rely on a Keycloak instance that is either [externally installed](../../tutorials/consume/external-id-management.md) or specific to an application. The architecture and requirements to customize your Keycloak instance are described below.

## Logging into your Keycloak Instance

Keycloak is protected by a Secret deployed to your Villanova Kubernetes instance. You can query Kubernetes for the Secret's default admin credentials via the following, modifying this command to use your environment's namespace and Secret name. 

>Note: Use the [ent CLI](../getting-started/entando-cli.md) to send commands to Kubernetes from the host machine.

```
kubectl get secret default-sso-in-namespace-admin-secret -n entando -o go-template="{{println}}Username: {{.data.username | base64decode}}{{println}}Password: {{.data.password | base64decode}}{{println}}{{println}}"
```

To find the Secret name, run the command below and search for the Secret that ends in `namespace-admin-secret`.
```
kubectl get secrets -n entando
```

## Authentication
All authentication is powered by Keycloak on Villanova. This ensures that a micro frontend can call a microservice with a token available to the client.

![Entando cluster & Keycloak architecture diagram with JWT tokens](./img/keycloak-arch-high-level.png)

Villanova implements Keycloak as a central point of authentication to provide a single unified view of identity. This infrastructure increases portability. Keycloak acts as an abstraction layer to the underlying Identity Provider (IDP), allowing Villanova to integrate into other IDPs without modifying the source.

## Authorization

### Role Assignment for Plugins/Microservices
Keycloak authorizes microservices using clients and roles. Authorizations are stored in a JSON Web Token and available to services when invoked.

Below are the steps to grant a user one or more roles for a specific client. This controls permissions when configuring the microservice. Note, when a microservice is installed in Villanova, a corresponding client (and set of roles) is created within its plugin definition.

1. [Log in to Keycloak](#logging-into-your-keycloak-instance) 
>For non-external Keycloak instances, it is the base URL of your running Villanova application followed by `/auth/`, e.g. http://YOUR-HOST-NAME/auth. In a standard Villanova installation, the base URL can be verified with `kubectl get ingress/default-sso-in-namespace-ingress`.
2. Select `Users` from the left menu
3. Use the search box to find the appropriate user, e.g. "admin"
4. Click on the user ID

![Screenshot-AppBuilder Users Lookup for admin](./img/find-admin.png)

5. Click the `Role Mappings` tab
6. Use the `Client Roles` drop-down menu to specify the microservice client
7. Select from the client's `Available Roles`

![Screenshot-Client Roles Dropdown of Available Roles](./img/find-roles.png)

8. Use the `Add Selected` button to move the desired roles to `Assigned Roles`. These will subsequently appear under `Effective Roles`.

![Screenshot-Roles added to Effective Roles](./img/assign-roles.png)
### Core
When a user is authenticated to the `entando-core` via Keycloak, a copy of that user is added to the `entando-core` user management database to enable WCMS functionality. Within the App Builder, WCMS roles and groups can be assigned to a user for access to App Builder functions or `portal-ui` content in the runtime application.

The code that copies the user into the `entando-core` can be customized per implementation to automatically create groups and roles. See the [entando-keycloak-plugin](https://github.com/entando/entando-keycloak-plugin) for details of the code that copies users and data to the WCMS database. The README in that project includes properties that are available to your Villanova Application.

See [KeycloakAuthorizationManager.java](https://github.com/entando/entando-keycloak-plugin/blob/master/src/main/java/org/entando/entando/keycloak/services/KeycloakAuthorizationManager.java) for an example of adding attributes programatically. In particular, refer to the [processNewUser](https://github.com/entando/entando-keycloak-plugin/blob/master/src/main/java/org/entando/entando/keycloak/services/KeycloakAuthorizationManager.java#L43) method.

## Social Login

Keycloak allows Villanova to provide social login as an out-of-the-box capability. [Keycloak Social Identity Providers](https://www.keycloak.org/docs/21.0.2/server_admin/index.html#_identity_broker) documents how to enable and configure social logins in your Villanova Applications.

## One Time Passwords

Keycloak enables One Time Password (OTP) login to Villanova Applications. See [Keycloak OTP Policies](https://www.keycloak.org/docs/21.0.2/server_admin/index.html#one-time-password-otp-policies) to configure and enable it.

## Themes, Look and Feel

Developers can customize the look and feel of the login page, as well as the identity management system that comes with Villanova. The [Keycloak Theme Documentation](https://www.keycloak.org/docs/21.0.2/server_development/index.html#_themes) provides instructions for creating your own theme. Alternatively, you can modify the [Entando Theme](https://github.com/entando/entando-keycloak/tree/master/themes/entando).
