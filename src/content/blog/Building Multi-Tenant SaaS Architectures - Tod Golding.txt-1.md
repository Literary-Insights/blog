---
title: Building Multi-Tenant SaaS Architectures - Tod Golding
slug: building-multi-tenant-saas-architectures-tod-golding
tags: 
  - book-summary
excerpt: ""
category: "self-help"
author: "matheus-puppe"
publishDate: "2024-04-21T00:00:00.000Z"

---

BOOK LINK:

[CLICK HERE](https://www.amazon.com/gp/search?ie=UTF8&tag=matheuspupp0a-20&linkCode=ur2&linkId=4410b525877ab397377c2b5e60711c1a&camp=1789&creative=9325&index=books&keywords=building-multi-tenant-saas-architectures-tod-golding)



 Here is a summary of the key points from the chapter:

- The chapter introduces the traditional "installed software" model where software was sold to customers and they were responsible for installing and managing it, either on their own infrastructure or using vendor-provided environments. 

- This model focused more on features/functions than operational efficiency. Each new customer added complexity as their customized environment needed dedicated support.

- Challenges of this model included lower operational and cost efficiencies as adding customers meant adding more overhead. It was harder to scale rapidly. 

- Customers had more control, dictating upgrade timelines. Testing/deploying custom environments slowed new feature releases to quarterly/semi-annual cadence.

- This introduced challenges around agility, scale, and efficiency for companies pursuing faster growth or operating at larger scale with many customers. Incremental overhead from each customer eroded margins. 

- The chapter sets the stage to define SaaS by explaining how the classic model's limitations drove the need for an alternative like SaaS that prioritizes operational efficiency, agility and a standardized experience over customization.

 

- The traditional model of separate, customized versions of software for each customer undermines agility, speed, innovation, and the ability to rapidly rollout new features or react to market changes. It's difficult and slow to support so many different versions. 

- Customers now demand lower friction experiences with continuous innovation to meet their needs. They want flexibility to switch providers based on value. 

- Shared infrastructure SaaS models resolve these issues by running all customers on a single, unified version in a shared environment. This greatly improves agility, speed, operational efficiency, and the ability to scale globally. 

- Shared infrastructure allows features to be instantly available to all customers. It reduces complexity and enables large customer bases to be supported with smaller teams. 

- SaaS providers can innovate more rapidly, constantly evolving the product and getting immediate feedback. This leads to competitive advantages over traditional models. 

- Costs are lower due to economies of scale. Infrastructure usage scales with customer consumption rather than each having dedicated resources. This improves margins.

- While shared infrastructure maximizes efficiencies, the core principles of SaaS like agility, scale and value-based pricing can still apply even without complete infrastructure sharing.

 

- In SaaS, the success depends not just on the application services but also the surrounding shared services that support onboarding, identity, deployment, management, billing, etc. 

- These shared services enable operational efficiency, growth, innovation and agility goals of SaaS. Teams should focus on defining these shared services early on.

- Traditionally, multi-tenancy referred to shared infrastructure resources between tenants. However, SaaS environments can have varying combinations of shared and dedicated resources. 

- Strict definition of shared infrastructure is not useful in SaaS context as requirements may dictate varying models. 

- Even with fully dedicated resources, SaaS principles of single version, onboarding/operating through shared services still apply.

- For this book, multi-tenant is defined more broadly as any environment that onboards, deploys, manages and operates tenants through shared services, regardless of infrastructure sharing. The focus is on shared operations not purely shared infrastructure.

 

- The term "single-tenant" is avoided as it implies something corresponding to "multi-tenant" but doesn't fit well with the SaaS model. Even if infrastructure is not shared, an environment can still be considered multi-tenant if running the same version and managed collectively. 

- The boundaries of SaaS are fuzzy when externally hosted components are involved. As long as external dependencies are hidden from tenants and centrally managed, it can still be considered SaaS. But tenant-facing external resources break the SaaS model by exposing them to infrastructure.

- A Managed Service Provider (MSP) model resembles classic installed software by allowing separate customer versions. This introduces operational complexity compared to SaaS which benefits from a single version and shared infrastructure. MSP centralizes management but not to the same degree as SaaS. 

- SaaS is ultimately a business model focused on agility, flexibility and adapting quickly to market needs through a tenant-centric service approach encompassing technology, business and operations.

 Here is a summary of the key points:

- In a SaaS company, features and functions are introduced in a way that does not compromise agility or operational efficiency. The needs of all customers as a whole are prioritized over one-off customizations.  

- Product owners, engineers, architects must consider operational attributes like onboarding, time to value, and agility when planning products. 

- The core principles that guide SaaS businesses are agility, operational efficiency, innovation, frictionless onboarding, and growth. Companies focus on continuously scaling operations and supporting rapid growth.

- SaaS companies build their technology and business strategies together to achieve agility, efficiency, and growth goals. Technology alone is not the focus.

- SaaS companies view themselves as building a service, not just a product. The overall customer experience across the lifecycle is prioritized over standalone features. Metrics like onboarding, uptime, feature release are part of evaluating the service quality.

 Here are the key points about multi-tenant architecture fundamentals:

- SaaS introduces the concept of multi-tenancy, where multiple customers (tenants) share the same application infrastructure. This impacts architecture decisions. 

- Traditionally, applications assumed each customer had their own dedicated footprint. SaaS requires supporting multiple isolated customers on shared infrastructure.

- Tenancy must be considered at all levels - from code and databases to infrastructure. Architectures need to efficiently isolate and manage tenants.

- Common approaches include database and schema multi-tenancy, where tenants share the database but have isolated schemas. Application code must also support tenant isolation.

- Infrastructure multi-tenancy virtualizes tenant isolation at the network/server level rather than just the application/database level. 

- Other concerns include tenant provisioning and management, scalability across tenants, security between tenants, customizations per tenant, and billing/metering tied to usage.

- There is no one-size-fits-all SaaS architecture. Different patterns and tradeoffs exist. The right approach depends on an application's unique requirements and goals. But multi-tenancy considerations are fundamental to any SaaS architecture.

 

- A SaaS environment can be conceptualized as having two main parts - the control plane and the application plane. 

- The control plane provides centralized services and capabilities that support the overall SaaS environment like tenant onboarding, billing, metrics, etc. It is not multi-tenant itself.

- The application plane is where the actual application functionality lives and where multi-tenancy principles are implemented. Its design can vary significantly depending on factors like business needs, domain, and legacy systems. 

- Key components of the control plane include onboarding, identity management, metrics, billing, and tenant management services. 

- Onboarding manages the process of provisioning new tenants, including assigning tenant IDs, configuring application resources, and setting up identity. 

- The control plane orchestrates and manages all the moving parts across tenants, while the application plane focuses on the tenant experience and functionality. This separation of concerns influences how each plane is evolved independently.

- Understanding these high-level control and application planes, and the typical control plane components, provides a foundational model for SaaS architecture.

 

- Onboarding is a foundational concept that sits at the front door of the SaaS experience and introduces tenants, users, identity, and application resources. It establishes the multi-tenant environment foundation. 

- Identity is important for SaaS as users need to be authenticated and also bound to a tenant. This adds complexity around user/tenant binding and supporting things like federated identity. 

- Metrics are crucial for operating and supporting multi-tenant environments. A centralized hub is needed to capture tenant activity and usage data for monitoring, troubleshooting, and driving business decisions. 

- Billing systems integrate with onboarding to set up tenant billing profiles and may also integrate to bill based on tenant activity data from the control plane. 

- Tenant management provides centralized management and configuration of tenant attributes, plans, security policies, and status. 

- The application plane shows multi-tenancy in varied ways depending on factors like technology stack. Key concepts include tenant context, isolation, data mapping Tenant context represents the tenant attributes available throughout the application.

 Here are the key points about tenant context, routing, isolation, and data partitioning in multi-tenant architecture:

- A JWT (JSON web token) acts as a "passport" carrying tenant context/information across microservices and components. It allows services to understand the tenant associated with each request. 

- Tenant context influences routing, logging, metrics, data access and other aspects. Architects must think about how context will be conveyed and applied across the system.

- Tenant isolation mechanisms like dedicated databases ensure one tenant cannot access another tenant's resources, even when shared infrastructure is used. Isolation must be enforced at different architecture levels.

- Data partitioning refers to how tenant data is stored, either in dedicated structures per tenant or shared structures. The strategy depends on data type, usage patterns, compliance needs, storage technology used, etc. 

- Tenant routing constructs route requests to the appropriate shared or dedicated services/resources based on the tenant context. Top-level routers and internal service routers may be needed for flexible footprints with mixes of shared and dedicated components.

In summary, tenant context, isolation, routing and data partitioning are key architectural considerations for conveying tenant information and ensuring resources are securely separated across shared multi-tenant systems. Flexible strategies are needed to support diverse deployment footprints.

 

- Multi-tenant application deployment requires considering how tenant resources are shared or dedicated. Deployment automation needs to understand this configuration and potentially deploy services multiple times for dedicated resources. 

- Tiering, tenant/admin users, and tenant provisioning straddle the control and application planes. Tiering could reside in either plane, with tier context applied across the system. User roles include tenant admins, tenant users, and system admins. Tenant provisioning could trigger from the control plane but run within the application plane. 

- There is no perfectly clean separation between planes. Concepts may span both or have arguments for residing in either. The key is understanding how concepts intersect between control configuration/provisioning and application experience.

 Here is a summary of the key points:

- There are two main approaches to tenant provisioning - within the control plane or application plane. Each has tradeoffs around abstraction and encapsulation. 

- The control and application planes should have distinct but integrated responsibilities. Integration strategies can range from loosely coupled to tightly integrated depending on needs.

- Separating the planes does not require strict physical separation - they could reside in the same infrastructure but with logical boundaries. 

- The technologies used for each plane may differ based on factors like consumption profile, costs, skillsets, etc. They do not need to use the same tech stack.

- The plane concept provides a mental model for architecting multi-tenant SaaS, but there is flexibility and nuance may require variations. It's not about absolutes. 

- Mapping concepts to concrete deployment models and technologies adds more design considerations and possibilities to implement the principles in different environments.

- The goal is to frame multi-tenant patterns and strategies without limiting to specific domains or tech, and provide a foundation to build on with more detailed examples.