// ConvoComplete backend entry point
// Boilerplate only - this is not production code.
// Purpose: show where the future API server can start.

import { appConfig } from './config/index.js';
import { callsRouter } from './routes/calls.routes.js';
import { logger } from './utils/logger.js';

function createFakeApp() {
  // Replace this object with an Express/Fastify app later.
  const registeredRoutes = [];

  return {
    use(path, router) {
      registeredRoutes.push({ path, routerName: router.name || 'anonymousRouter' });
    },

    getRegisteredRoutes() {
      return registeredRoutes;
    },

    listen(port, callback) {
      callback?.();
      return { port, status: 'mock-server-started' };
    }
  };
}

export function buildServer() {
  const app = createFakeApp();

  // Future route groups can be attached here.
  app.use('/api/calls', callsRouter);
  app.use('/api/health', {
    name: 'healthRouterPlaceholder',
    description: 'Would return app status, uptime, and dependency health later.'
  });
  app.use('/api/users', {
    name: 'usersRouterPlaceholder',
    description: 'Would handle team members, roles, and account settings later.'
  });
  app.use('/api/integrations', {
    name: 'integrationsRouterPlaceholder',
    description: 'Would handle CRM, calendar, WhatsApp, and email connections later.'
  });

  return app;
}

export function startServer() {
  const app = buildServer();

  logger.info('Preparing ConvoComplete mock server');
  logger.info(`Environment: ${appConfig.env}`);
  logger.info(`Port: ${appConfig.port}`);

  app.listen(appConfig.port, () => {
    logger.info('Mock server started');
    logger.info('Registered routes:');

    for (const route of app.getRegisteredRoutes()) {
      logger.info(`- ${route.path} -> ${route.routerName}`);
    }
  });

  return app;
}

// This makes the file readable as a standalone example.
// In real implementation, remove this check and use a real app runner.
startServer();
