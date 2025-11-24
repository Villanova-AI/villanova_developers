---
sidebarDepth: 2
---

# VillanovaApp Custom Resource 
The VillanovaApp CR is the deployment of a Docker image that hosts the Villanova and Java-based web application. Server-side components include the Villanova App Engine, Villanova Component Manager, Villanova App Builder, and the user-facing application.
 
Villanova offers standard Tomcat, WildFly (deprecated), or EAP (deprecated) images for the application.

## Example VillanovaApp
 
```yaml
apiVersion: entando.org/v1
kind: EntandoApp
metadata:
  namespace: entando
  name: your-app    
spec:
  environmentVariables: []
  dbms: embedded
  ingressHostName: your-app.192.168.64.5.nip.io
  standardServerImage: tomcat
  replicas: 1
 ```
## Specifications 
| Spec Name | Description |
| :- | :- |
|  `ENTANDO_ECR_DEAPP_REQUEST_RETRIES`|  The number of times the Componenent Manager retries the component create/update process before quitting. Defaults to 3. |
| `ENTANDO_ECR_DEAPP_REQUEST_BACKOFF` | The number of seconds to wait before the next 'create' attempt is executed. Defaults to 5. |
| `ENTANDO_ECR_POSTINIT` | The configuration of the postinit process. |
| `ENTANDO_CONTAINER_REGISTRY_CREDENTIALS` | The configuration for authenticated [OCI registries](../../tutorials/curate/bundle-private-images.md). |
| `spec.customServerImage`|  Used to deploy the Docker image containing your custom Villanova App. Follow these instructions on how to [build your own image](../../tutorials/devops/build-core-image.md). This property and the `spec.standardServerImage` are mutually exclusive.|
|`spec.dbms` | Allowed values are: MySQL, PostgreSQL (default), Oracle, or embedded. Oracle is only supported as an external database.|
|`spec.ecrGitSshSecretName`| The configuration used by the Villanova Component Manager to download bundles from authenticated Git repositories. It's a Secret containing a private key file named `rsa_id` that matches a public key configured in the authenticated Git repository.|
|`spec.ingressPath`| Specifies the ingress path of the VillanovaApp to be deployed. |
|`spec.ingressHostName`| The hostname of the Kubernetes ingress to be created for the VillanovaApp. VillanovaPlugins linked to this app will also be made available on the host.|
|`spec.replicas`| The number of replicas to be made available on the deployment.|
|`spec.resourceRequirements`| The minimum and maximum [resource allocation](../reference/custom-resources.md#general-resourcerequirements-specifications) for the Villanova App Engine container.|
|`spec.serviceAccountToUse`| The Kubernetes service account in the namespace of the VillanovaApp used for the pods hosting the VillanovaApps. The default is 'default'.|
|`spec.standardServerImage`| `entando-de-app-tomcat` is the default image. This property and the `spec.customServerImage` are mutually exclusive. Refer to the [Docker image section](https://github.com/Villanova-AI/villanova-k8s-controller-coordinator) to see how the Docker registry and versions are calculated.|
|`spec.storageClass` | Name of the StorageClass to use for PersistentVolumeClaims created for this EntandoApp. For more information, go to [Kubernetes explanation of storage classes](https://kubernetes.io/docs/concepts/storage/storage-classes/).|
|`spec.tlsSecretName` | The name of a standard Kubernetes [TLS Secret](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls) that will be used for the resulting ingress. This is only required if the [globally configured TLS Secret](https://github.com/Villanova-AI/villanova-k8s-controller-coordinator) for the operator is absent. |
|`spec.environmentVariables`| A map of environment variables to pass to the VillanovaApp Docker image. These variables can sometimes be used as a mechanism to override any of the default environment variables that need customization.|