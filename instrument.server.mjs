import * as Sentry from "@sentry/react-router";
//  profiling
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import 'dotenv/config';

const dsn = process.env.VITE_SENTRY_DNS || import.meta?.env?.VITE_SENTRY_DNS || "";
//  profiling
Sentry.init({
  dsn: dsn,
  // Adds request headers and IP for users, for more info visit:
  sendDefaultPii: true,
  //  logs
  // Enable logs to be sent to Sentry
  enableLogs: true,
  //  logs
  //  profiling
  integrations: [nodeProfilingIntegration()],
  //  profiling
  //  performance
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  //  performance
  //  profiling
  profilesSampleRate: 1.0, // profile every transaction
  //  profiling
});
