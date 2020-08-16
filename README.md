# MIDI Piano MRE
A multiplayer VR piano designed for AltspaceVR using the MRE SDK.

Using an external browser on your PC, you can connect your MIDI capable piano keyboard and pipe in the data to play in realtime!

## How to deploy

* Requries Node.js 

1) Clone this repository (or download zip)
2) Run `npm install`
3) Run `npm run build`
4) Run `npm run start`
5) In Altspace, create a new MRE instance in your world
6) Add `ws://localhost:3901` as the target URI

## Using a MIDI capable piano
1) Make sure your MIDI keyboard is turned on and connected to your PC
2) Open `/public/index.html`
3) Allow your browser to access the device
4) Play away!
