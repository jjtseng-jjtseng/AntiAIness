# Scenario A: sleek modern technology product

Build the marketing landing page for Pulse, an API monitoring product for engineering teams. Aesthetic requested by the client: "sleek, modern, a bit futuristic, but credible to senior engineers; we like dark themes."

Facts you may use (nothing else): Pulse records latency (p50/p95/p99), error rate and throughput per endpoint; shows an incident timeline with deploy markers; alerts to Slack, PagerDuty and email with per-endpoint thresholds; integrates via a 2-line SDK for Node, Python, Go and Java; retention is 30 days (Team) or 13 months (Business); SOC 2 Type II is in progress (do not claim it is certified); pricing: Free (3 endpoints, 7-day retention), Team $49/month (50 endpoints, 5 seats), Business $199/month (unlimited endpoints, SSO, 13-month retention); 14-day trial of Business; founded 2025, team of 8 in Toronto; docs at docs.pulse.dev. No customers can be named yet and no testimonials exist.

Sample data you may render: endpoint GET /v1/orders p95 412 ms (+18% vs 7d); POST /v1/checkout p95 1,204 ms (−3%); GET /v1/search p95 236 ms (+1%); error rate 0.42%; throughput 2,310 req/min; an incident on Oct 14, 08:12–08:47, "Elevated 5xx on /v1/checkout", caused by deploy #4821.
