import * as WS from 'ws';
import { EventEmitter } from 'events';


type Packet =
{
    event: string;
    data: string;
}

export default class MidiServer extends EventEmitter
{
    constructor(port: number) 
    {
        super();

        const wss = new WS.Server({ port: port });
        this.init(wss);
    }

    private init(wss: WS.Server)
    {
        wss.on('connection', ws =>
        {
            ws.on('message', (packet: WS.Data) =>
            {
                this.parseReceived(JSON.parse(packet as string));
            });

            ws.on('close', () =>
            {

            });
        });
    }

    private parseReceived(packet: Packet)
    {
        let event = packet.event;
        let data = packet.data;
    
        this.emit(event, data);  
    }
}