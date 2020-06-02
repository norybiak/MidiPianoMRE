/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { log, WebHost } from '@microsoft/mixed-reality-extension-sdk';
import { resolve as resolvePath } from 'path';
import MidiServer from './midiServer';
import Piano from './app';

log.enable('app');

process.on('uncaughtException', (err) => console.log('uncaughtException', err));
process.on('unhandledRejection', (reason) => console.log('unhandledRejection', reason));

 // Start listening for connections, and serve static files
const server = new WebHost({
   baseDir: resolvePath(__dirname, '../public'),
   baseUrl: "http://localhost:3901"
});

const midiServer = new MidiServer(2020);

// Handle new application sessions
server.adapter.onConnection(context => new Piano(context, midiServer, server.baseUrl ));