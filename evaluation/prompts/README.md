# Evaluation prompts

Each scenario was run twice by **fresh agents with no conversation history** (the Agent tool, general-purpose type, same model as this session):

- **baseline**: the brief + the common constraints, with the skill directories temporarily moved out of the repository so the agent could not discover them, and an instruction not to read repository files.
- **skilled**: the identical brief + constraints, plus one line: read and follow `.agents/skills/authentic-ui-design/SKILL.md` before designing.

Scenario E has three variants: the original AI-generated page, an improvement by a baseline agent, and an improvement by a skilled agent.

The exact texts are in `common-constraints.md` and `scenario-*.md`. Outputs are in `../scenarios/<id>/<variant>/index.html`; renders in `../screenshots/`.
