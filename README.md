# A simple SMS Bot using  SignalWire

This is a bot that you'll point the messaging hook in signalwire to and get a great smart bot with a single phone number endpoint.

## Requirements

Accounts in: 
- SignalWire.com account - free incoming SMS and $0.002 outgoing (1/5th the price of twillio)
- iexcloud.io account - for stocks
- openweathermap.org - for weather

Note no account required for coinbase (where we pull our crpyto prices) because the api key yis not required for prices.
## Installation

```
git clone https://github.com/cpetrosi/signalwire-ivr.git
cd signalwire-ivr
npm install
```
Now create a .env file with 

## Running and Development
```
npm start
```
But... SignalWire doesn't accept hitting your local host. To fix this one option is to use ngrok or (my favorite) localtunnel.me to give you an internet accessable<BR>
But I also have the scripts ready  for you to push it up to now.sh/vercel. To do so you have to setup the .env variable in the project's Environment Variables
