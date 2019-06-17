To reproduce, in a terminal window, run:

```
npm run start
```

and in a second terminal window, run:

```
wscat -n -c wss://localhost:4000
```

Send messages in the second terminal window and get back the number
of seconds the connection has been alive. It will close at exactly
120 seconds, despite any amount of activity.
