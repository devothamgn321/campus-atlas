# AI Evaluation And Safety Plan

## Objective

CampusOS needs an AI quality system that helps a university trust answers, verify workflows, and understand when human staff must take over.

## Offline Evaluation

| Metric | Target | Method |
|---|---:|---|
| Answer groundedness | >= 92% | Compare response claims against retrieved source passages |
| Policy refusal accuracy | >= 95% | Test high-risk campus decision prompts |
| Retrieval hit rate | >= 88% | Known-answer set across campus policies and service FAQs |
| Citation accuracy | >= 90% | Check whether cited documents support the final answer |
| Escalation classification | >= 85% | Label cases where human staff should handle the request |

## Online Evaluation

| Metric | Target | Method |
|---|---:|---|
| Resolved without staff | 60% | Student confirms answer or completes workflow |
| Escalation precision | 85% | Staff labels whether handoff was needed |
| Student satisfaction | 4.3/5 | Post-resolution micro-survey |
| Workflow completion | 70% | User completes the intended action after AI guidance |
| Repeat contact rate | < 12% | Student reopens same issue within seven days |

## Safety Controls

- Confidence threshold before showing direct answers
- Source citations for policy and academic guidance
- Human handoff for disciplinary, financial, mental-health, legal, or academic-status decisions
- PII minimization in prompts and logs
- Role-based access to student record context
- Audit trails for credential and advisor workflows

## Monitoring Loop

1. Sample prompt, retrieval, and response traces weekly.
2. Review low-confidence and escalated conversations.
3. Compare policy answers against updated university documents.
4. Track quality by student cohort to detect unfair performance.
5. Convert repeated failure modes into backlog items.

## Launch Gate

The AI copilot should not graduate from pilot to MVP until it meets:

- 92% groundedness
- 85% escalation precision
- 4.3/5 student satisfaction
- No unresolved critical safety incidents in the pilot window

