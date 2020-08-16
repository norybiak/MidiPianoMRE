import * as WS from 'ws';
import { EventEmitter } from 'events';

export interface Data
{
    note: number;
    velocity: number;
}

interface Packet
{
    event: string;
    data: Data;
}

export class Websocket extends EventEmitter
{
    constructor(port: number = 8080) 
    {
        super();

        const wss = new WS.Server({ port: port });
        this.init(wss);
    }

    private init(wss: WS.Server)
    {
        wss.on('connection', ws =>
        {
            ws.on('message', (packet: string) =>
            {
                this.parseReceived(JSON.parse(packet));
            });

            ws.on('close', () =>
            {

            });
        });
    }

    private parseReceived(packet: Packet)
    {
        this.emit(packet.event, packet.data);  
    }
}
