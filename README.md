# Order Processing Service

High-performance internal web API microservice designed to process retail orders and integrate with external payment providers.

## Application Profile Metadata
* **Service Owner:** Payment & Orders Core Engineering Team
* **Business Impact:** High (Critical path for checkout flow)

## Architecture Highlights
* **Runtime:** .NET 8.0 / C#
* **Primary Database:** PostgreSQL
* **Caching:** Redis Cache
* **Upstream External Integration:** Stripe API
* **Observability:** Serilog sending logs to ELK Stack
