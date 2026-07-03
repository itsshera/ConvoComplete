# ConvoComplete Boilerplate Guide

This repository scaffold is intentionally **not real production code**.

It is a map of where future ConvoComplete code can live. The files contain sample functions, placeholder classes, mock flows, and comments explaining what each part is supposed to do.

## What this scaffold shows

- Where call upload code could live
- Where speech-to-text code could live
- Where AI summary generation could live
- Where action item extraction could live
- Where CRM notes could be prepared
- Where calendar follow-ups could be prepared
- Where background jobs could be organized
- Where a dashboard UI could be organized
- Where database schema ideas could live
- Where tests could be placed later

## What this scaffold does not include

- No real API keys
- No real phone system integration
- No real transcription vendor code
- No real OpenAI / Gemini / Deepgram / Twilio calls
- No production database connection
- No authentication system
- No private business logic
- No customer data

## Suggested project shape

```text
ConvoComplete/
  src/
    config/              app configuration placeholders
    controllers/         request handlers
    routes/              API routes
    services/            business logic placeholders
    jobs/                background processing placeholders
    middleware/          auth and validation placeholders
    utils/               shared helper placeholders
    db/                  schema and seed examples
  frontend/
    src/
      components/        reusable dashboard components
      pages/             screen-level UI pages
      lib/               browser-side helpers
  tests/                 future test examples
  docs/                  architecture notes
```

## Development stages

### Stage 1 - Simple mock dashboard

Goal: Show fake calls, fake summaries, and fake tasks.

Suggested files:

- `frontend/src/App.jsx`
- `frontend/src/pages/Dashboard.jsx`
- `frontend/src/components/CallCard.jsx`

### Stage 2 - Mock backend API

Goal: Return hardcoded call intelligence data from an API route.

Suggested files:

- `src/server.js`
- `src/routes/calls.routes.js`
- `src/controllers/calls.controller.js`

### Stage 3 - Processing pipeline skeleton

Goal: Represent the future backend pipeline without real vendor calls.

Suggested files:

- `src/jobs/processCall.job.js`
- `src/services/transcription.service.js`
- `src/services/summary.service.js`
- `src/services/actionItems.service.js`

### Stage 4 - Storage and CRM planning

Goal: Plan what gets stored and what can be synced to external tools.

Suggested files:

- `src/db/schema.sql`
- `src/services/crm.service.js`
- `src/services/calendar.service.js`

## Example future call flow

```text
1. User uploads call recording
2. Backend creates a call record
3. Background job starts processing
4. Audio is sent to speech-to-text provider
5. Transcript is saved
6. AI creates summary
7. AI extracts action items
8. Follow-ups are prepared
9. CRM note is prepared
10. Dashboard shows final result
```

## Naming rules for future contributors

Use simple names. Keep product logic readable.

Good examples:

- `processCallRecording`
- `createCallSummary`
- `extractActionItems`
- `prepareCrmNote`
- `scheduleFollowUpReminder`

Avoid vague names:

- `doStuff`
- `handleData`
- `runAI`
- `magic`

## Safety notes

- Never commit `.env` files.
- Never commit real customer call recordings.
- Never commit transcripts from real people without permission.
- Never commit API keys.
- Never expose private phone numbers.
- Never store sensitive customer details in public test files.

## Status

This is a boilerplate-only public scaffold. It is useful for explaining project structure, onboarding collaborators, and showing planned architecture without exposing private implementation.
