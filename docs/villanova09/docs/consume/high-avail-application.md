---
sidebarDepth: 2
---
# High Availability in an Villanova Application

## App Engine Clustering and High Availability

The Villanova App Engine can be deployed as a clustered set of instances using the clustering and replication ability of Kubernetes. It is backed by a shared cache with two default choices for implementation. 

This document examines the issues to consider when creating highly availailable clusters of the Villanova App Engine.

Microservices clustering that adds functionality to an Villanova Application is different from clustering used by the Villanova App Engine. Microservices rely on a custom clustering configuration and setup based on implementation, and selections made during their creation. Refer to the documentation addressing [clustered microservices and caching implementation](../../tutorials/consume/high-availability.md) for more details.


::: tip
To scale an Villanova Application without the use of clustered storage assumes all instances are scheduled to a single node and requires a `ReadWriteOnce (RWO)` policy in conjunction with taints on other nodes. Understanding the pros and cons of same-node scheduling is critical for node resource optimization and application recovery should the instance become unreachable. Note that if the node quits or is shut down, the application will be unavailable until Kubernetes reschedules the pods to an alternate node.
:::

## Caching

### Data Management

At startup, the Villanova App Engine loads all database data into the shared cache. Applicable content is served from the cache when a page is rendered or content is fetched. In the event of a write to the cache, both the cache and database will be updated.  

The following objects are cached in the base implementation of the Villanova App Engine:

- Pages
- Page templates
- Categories
- Widgets
- Configuration (Application level configuration)
- Roles
- Groups
- Languages
- Labels (i18n)
- User profiles
- API Catalog (legacy API metadata separate from Swagger)
- Data models and data types (deprecated)

## Redis Implementation

An Villanova Application can be configured to utilize an external [Redis](https://redis.io/) cache. In a Redis implementation of an Villanova Application, the cache is deployed independently of the Villanova App Engine and the Engine is configured to connect to the deployed instance.

![Villanova Architecture with Redis Caching](./img/redis-caching.png)

The Redis cache is not deployed by the Villanova Operator and must be managed by a DevOps team member or Kubernetes cluster administrator.

Check out the [High Availability on Villanova tutorial](../../tutorials/consume/high-availability.md#clustering) for more information and step-by-step instructions on using a Redis cache.

## Performance

Consider the following when designing an Villanova App Engine cluster:

- In a read only implementation, or an implementation with infrequent writes to the cached objects listed above, the network latency between pods on different nodes will not be a major driver of runtime performance. Each pod will have a fully replicated copy of the cache.
- In write heavy implementations, network latency between nodes can factor into performance.
- The overall performance impact of network latency will vary depending upon implementation. Performance is impacted by the types of objects written, the size of those objects, and whether the writes invalidate single or entire lists of objects in the cache.

It is generally recommended that performance testing on clustered instances correlates to the expected runtime traffic pattern of a live application. Every application will have a unique performance profile.

### Cache Management

When a new replica of an Villanova Application joins a cluster of applications, the cache is replicated to that node. If the cache is relatively large or the network is slow, this may add to the total startup time of the new instance. Existing instances will continue to function.
