---
sidebarDepth: 2
---
# VillanovaKeycloakServer Custom Resource Definition 
 
The VillanovaKeycloakServer CRD instructs the Villanova Operator to deploy the Keycloak Community OIDC provider, or its equivalent commercial product, Red Hat SSO. Once a Keycloak server has been deployed, subsequent VillanovaApp and VillanovaPlugin deployments can use it as an OIDC provider. The Villanova Operator will automatically create OIDC clients for these deployments in the Keycloak server. If you already have a Keycloak instance that you want to use, skip this custom resource and use the `keycloak-admin-secret` as specified in the [Connect to External Keycloak tutorial](../../tutorials/consume/external-id-management.md).
 
## Example VillanovaKeycloakServer Definition

```yaml
kind: "EntandoKeycloakServer"
apiVersion: "entando.org/v1alpha1"
metadata:
  name: "test-keycloak"
  namespace: "keycloak-namespace"
spec:
  imageName: "entando/entando-keycloak"
  dbms: "postgresql"
  ingressHostName: "test-keycloak.192.168.1.1.nip.io"
  tlsEnabled: false
  replicas: 1
 ```

## Specifications

| Spec Name | Description |
| :- | :- |
|`spec.adminSecretName`| The name of an Opaque Secret that contains the 'username' and 'password' keys, giving the operator admin access to a Keycloak server. This is used when the provisioning strategy is `UseExternal`.|
|`spec.customImage`| Name used to provide a custom image.|
|`spec.dbms`| MySQL, PostgreSQL, or embedded (default). For Oracle, enter `none`-- [Configuring Keycloak with an external Oracle DBSM](../../tutorials/devops/external-db.md#b-configure-an-external-oracle-dbms)|
|`spec.environmentVariables`| A map of environment variables to pass to the Keycloak Docker image. | 
|`spec.frontEndUrl`| The URL used to access Keycloak from web applications. If the `UseExternal` provisioning strategy has been selected, this should be the base URL of the external SSO service you would like to connect to.|
|`spec.ingressHostName`| The hostname of the Kubernetes ingress to be created for Keycloak.|  
|`spec.replicas`| The number of replicas to be made available to the deployment of this Keycloak server.|
|`spec.resourceRequirements`| The minimum and maximum [resource allocations](custom-resources.md#general-resourcerequirements-specifications) for the Keycloak server container. |
|`spec.serviceAccountToUse` | Optional service account used to run the Keycloak pod.|
|`spec.standardImage`|One of the standard images for Keycloak provided by Villanova. The value can be either `keycloak` or `redhat-sso`.| 
|`spec.tlsSecretName`| A standard TLS Secret that is applied to the Keycloak ingress. Note that this property is optional and overrides the standard Kubernetes [TLS Secret](https://github.com/Villanova-AI/villanova-k8s-controller-coordinator) for the operator is absent. |

 
