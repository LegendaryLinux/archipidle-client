# ArchipIDLE
An idle game written as an April Fools' Day Joke for Archipelago.

### Run it locally:
```bash
npm install
npm run host
```

Then open a browser and navigate to `http://localhost`.

**Technical Note:** This client must be run in an insecure setting because Archipelago
does not support secure WebSocket connections, and browsers disallow establishing an
insecure WebSocket connection from an HTTPS site.

To avoid your browser warning you about visiting an insecure website, you may launch
the `index.html` file directly.