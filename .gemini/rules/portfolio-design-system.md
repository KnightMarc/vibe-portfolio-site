# Portfolio Design System for IT Infrastructure & Automation

## 1. Typography & Hierarchy
- Section Headings must use scaled sizing (`text-3xl lg:text-4xl`) with numbered monospace terminal prefixes (`// 01. ABOUT`, `// 02. CERTIFICATIONS`, `// 03. TECHNICAL SHOWCASE`, `// 04. PROJECTS & CASE STUDIES`, `// 05. GET IN TOUCH`).

## 2. Domain Color Matrix
- **DevOps & Automation**: Cyan/Indigo badges (`n8n`, `Docker`, `ngrok`).
- **Networking & Hardware**: Emerald badges (`CSS NC-II`, `CompTIA ITF+`, `LAN Setup`).
- **Software & AI**: Violet/Purple badges (`React Native`, `Firebase`, `Rule-Based AI`).

## 3. Accordion Layout Integrity
- In responsive grid layouts, card detail expansions must expand vertically inside their own container. Do NOT mutate grid column spans (e.g. `col-span-2`) on toggle to avoid sibling layout shifts.

## 4. Telemetry & Metrics
- Include system metrics indicators (`99.9% Pipeline Reliability`, `30+ Automated Workflows`, `100+ Infrastructure Nodes`) in top-level intro/hero components.
