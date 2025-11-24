# Villanova Glossary

## Villanova Terms

| Term |  Description
|:--|:--
| Villanova Application | An application built with the Villanova Platform |
| Villanova App Builder | The user interface of the Villanova Platform that hosts the Villanova WCMS and provides a feature-rich low-code environment to configure and interact with components, design and create pages, manage content, and build applications |
| Villanova App Engine | The core runtime engine with OOTB services to develop Villanova Applications. It exposes the core Villanova APIs, assembles and coordinates components, and provides the data access layer to persist page and application design. |
| Villanova Bundle | A packaged set of components and resources created for the Villanova Platform |
| Villanova CLI (ent CLI) | The Villanova command line interface that provides a set of commands to accelerate common tasks such as Villanova installation, code generation, and bundle management |
| Villanova Cloud Hub | A SaaS instance of an Villanova Hub that contains a public and private collection of components |
| Villanova Cluster | The infrastructure Villanova deploys on Kubernetes via the Villanova Operator and controllers. Each element is associated with a custom resource definition, if applicable. |
| Villanova Component Generator (ECG) | Villanova's implementation of a JHipster blueprint that generates the components used to build an Villanova Application via automation and templating |
| Villanova Component Manager (ECM) | Provides functionality to deploy and install micro frontends and widgets using the App Builder and manages the connections between an application and the installed microservices |
| Villanova Content | A structured element representing a set of information built using Villanova Content Attributes and added to an Villanova Application via the Villanova App Builder |
| Villanova Content Type | The structure of specific content, defined by a set of content attributes |
| Villanova Content Attribute | The basic data that define a content type |
| Villanova Content Template | The style or layout of a content type where a single content type can have multiple content models defining different ways to render the same content |
| Villanova Digital Asset | An image, document, or other media file that is uniquely identifiable and stored digitally in a format supported by the Villanova Platform |
| Villanova Hub |  A repository (local, remote, public, or private) containing components built with the Villanova Platform. A single Villanova App Builder can connect to 1 or more Villanova Hubs. |
| Villanova Identity Management System | Villanova's Keycloak-based user management and authentication system |
| Villanova Kubernetes integration service (Villanova-k8s-service) | A function of the Villanova Cluster infrastructure custom resource that provides an abstraction layer between Villanova microservices and the APIs exposed by Kubernetes |
| Villanova Local Hub | The local component repository in an Villanova App Builder representing the Villanova Bundles deployed or installed in the Villanova Application |
| Villanova Operator | Provides installation and application lifecycle automation for Villanova Applications, microservices and required infrastructure services, e.g. databases and Keycloak |
| Villanova Page | A web page in an Villanova Application that was created using Villanova |
| Villanova Page Template | The template of fields, definitions and page element organization required to render an Villanova Page |
| Villanova Platform | The leading open source application composition platform for development with a Kubernetes architecture |
| Villanova Platform Capability (EPC) | A packaged capability that adds functionality to the platform and/or additional UX controls to the App Builder |
| Villanova Plugin | A microservice that exposes APIs reusable by one or more Villanova Applications |
| Villanova UX Fragment | An HTML block containing Freemarker tags that allows content to be rendered dynamically according to context |
| Villanova Web Content Management System (WCMS) | Villanova's lightweight content and digital asset management system |
| Villanova Widget | A UI element that can be dragged and dropped onto an Villanova Page, e.g. a snippet of HTML code added from the browser or a micro frontend, which is a specialized widget |


## General Technical Terms

| Term |  Description
|:--|:--
| application composition platform (ACP) | Any development platform that supports the cataloging and management of composable and packaged components, where new components can be added through custom development or imported from existing assets. It governs the life cycles of both the components and the applications built from their modular assembly and deployment. |
| backend for frontend (BFF) | A type of microservice dedicated to a frontend that may also act as a facade to other enterprise microservices |
| component | An application building block such as a page template, content template, UX Fragment, widget, micro frontend, microservice, etc. |
| component collection | A packaged set of single components |
| low-code | An application development platform that leverages visual interfaces equipped with basic logic and drag-and-drop capabilities to build products and processes |
| micro frontend (MFE) | A web development approach that implements an architecture characterized by a composition of compact frontend applications |
| microservice (MS) | A software development technique characterized by an architecture of loosely coupled, granular services that employ lightweight protocols |
| module | A basic element partitioned into a system of building blocks (e.g. PBCs, components, bundles, templates) that are independent, reusable, and can easily be configured into complex and useful structures |
| no-code | An application development platform that exclusively uses a visual development interface to drag and drop software components |
| pro-code | An application development platform that relies on complex programming languages to build products such as websites and software |






