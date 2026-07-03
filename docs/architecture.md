# architecture

ConvoComplete is shaped around a simple pipeline.

```text
transcript input
  -> cleanup
  -> summary
  -> action items
  -> crm note
  -> dashboard / export
```

## current prototype folders

```text
src/
  prototype/      transcript, summary, and action item logic
  pipeline/       orchestration for the processing flow
  exporters/      text output helpers
  utils/          small formatting and date helpers
  ui/             simple rendering helpers
  data/           demo call data

tests/            smoke tests
config/           example runtime config
docs/             dev notes and architecture notes
experiments/      small scoring experiments
```

## product idea

The product is meant to sit after a conversation and turn the messy parts into something the team can use.

The first version focuses on:

- what happened in the call
- what the customer needs
- who owns the next step
- what should be followed up
- how the note should look in a crm

## next technical steps

- better transcript cleaning
- stronger action item detection
- more realistic test transcripts
- proper dashboard screen
- export formats
- storage layer
- login and workspaces
- crm sync

## notes

The public prototype is intentionally small, but the structure is meant to be easy to extend.
