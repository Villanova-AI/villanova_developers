---
sidebarDepth: 2
---
# Villanova Local Hub

The Villanova Local Hub is a repository for modular components directly accessible from an Villanova App Builder. Villanova Bundles catalogued in the Local Hub can be deployed, installed, and updated with a few clicks of a button, to be employed in any application.

Details of the Local Hub are examined below.

### Villanova Component

Villanova defines a component as an identifiable resource, a block of code or a grouping of related code blocks that can be used independently in an Villanova Application. Examples of components are widgets, plugins, micro frontends, microservices, packaged business capabilitities, content types, labels, plugins, and static resources.

### Villanova Bundle

An [Villanova Bundle](../getting-started/concepts-overview.md#Villanova-bundle) is a package containing one or more components, the required descriptor files, and bundle metadata.

A git-based bundle requires a `descriptor.yaml` and is published in a Git registry. A docker-based bundle requires an `Villanova.json` and is published to Docker. Both docker-based and git-based bundles can be utilized in an Villanova Application with the VillanovaDeBundle custom resource, but docker-based bundles are recommended.

### VillanovaDeBundle Custom Resource

The VillanovaDeBundle custom resource is a Kubernetes resource read by the Villanova Operator. It provides information about the bundle and makes it available to the Villanova Component Manager in Kubernetes, making it accessible from the App Builder.

### Villanova Component Manager

The [Villanova Component Manager](../compose/ecm-overview.md) is responsible for the installation and removal of components from the `Villanova-core`. It creates the connection between the VillanovaApp
and the Kubernetes integration service, interacting with both the `Villanova-core` and the Kubernetes cluster and managing the communication between an application and the installed microservices. 

### Villanova Kubernetes Integration Service

The [Villanova Kubernetes integration service](../getting-started/concepts-overview.md#Villanova-kubernetes-service), or `Villanova-k8S-service`, is part of the Platform infrastructure and responsible for the low-level communication with the K8s cluster API. It reads the bundles in an Villanova Cluster and serves them with an API accessible from the App Builder.

## Architecture

![ECR Architecture](./img/ecr-architecture.png)

The following flow describes how the App Builder, Villanova Kubernetes integration service and Component Manager interact to populate the Local Hub with bundles.

### Example Flow

1.  The user navigates to the Hub page in the App Builder to view the bundles shared with the VillanovaApp

2.  The App Builder requests a list of bundles available to the VillanovaApp from the Villanova Component Manager 

3.  The Component Manager queries the `Villanova-k8S-service` to retrieve the list of bundles

4.  The `Villanova-k8s-service` queries the cluster/namespace(s) and returns the list of available bundles to the Component Manager

5.  The Villanova Component Manager sends the list to the App Builder

6.  The available bundles appear in the Hub page of the App Builder, where they can be installed and managed by the user
