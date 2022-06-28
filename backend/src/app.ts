import express from 'express';
import path from 'path';
import { createRestApiServer, connectToDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
import {
  logRequestMiddleware,
  logErrorRequestMiddleware,
} from 'common/middlewares';
import { houseApi } from 'pods/house';
import { securityApi, authenticationMiddleware } from 'pods/security';

const restApiServer = createRestApiServer();

const staticFilesPath = path.resolve(__dirname, '../public');

restApiServer.use('/', express.static(staticFilesPath));

restApiServer.use(logRequestMiddleware);
restApiServer.use('/api/security', securityApi);
restApiServer.use('/api/houses', authenticationMiddleware, houseApi);

restApiServer.use(logErrorRequestMiddleware);

restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    console.log('Connected to DB');
  } else {
    console.log('Running API mock');
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
