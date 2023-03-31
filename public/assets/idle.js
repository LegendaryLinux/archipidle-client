// Loop control
let gameInterval = null;

window.addEventListener('load', () => {
  document.getElementById('control-button').addEventListener('click', beginGame);
});

const beginGame = () => {
  // Disable the "Begin!" button
  document.getElementById('control-button').setAttribute('disabled', "disabled");

  // ID of the next location to be sent
  let currentLocation = parseInt(missingLocations[0], 10);

  // Progress tracking data
  const progressBar = document.getElementById('progress-bar');
  let startTime = new Date().getTime();
  let endTime = startTime + Math.floor((Math.random() * 30000) + 30000);
  progressBar.setAttribute('max', (endTime - startTime).toString());

  // Update item counter
  const itemCounter = document.getElementById('checks-sent');
  itemCounter.innerText = (200 - missingLocations.length).toString();

  // If all checks have already been sent, fill the progress bar and do nothing else
  if (missingLocations.length === 0) {
    progressBar.setAttribute('max', '30000');
    progressBar.setAttribute('value', '30000');
    return;
  }

  gameInterval = setInterval(() => {
    // If the last item has been sent, send the victory condition and stop the interval
    if (currentLocation > parseInt(missingLocations[missingLocations.length - 1], 10)) {
      serverSocket.send(JSON.stringify([{
        cmd: 'StatusUpdate',
        status: CLIENT_STATUS.CLIENT_GOAL,
      }]));
      clearInterval(gameInterval);
      gameInterval = null;
      progressBar.setAttribute('max', '30000');
      progressBar.setAttribute('value', '30000');
      return;
    }

    // Update current time
    const currentTime = new Date().getTime();

    // If the item timer has expired or there are immediate items waiting, send the current location check
    if ((immediateItems > 0) || (currentTime >= endTime)) {
      if (immediateItems > 0) { --immediateItems; }

      // Send location check
      sendLocationChecks([currentLocation]);

      // Update the item counters
      itemCounter.innerText = (parseInt(itemCounter.innerText, 10) + 1).toString();
      currentLocation++;

      // Update timers
      startTime = currentTime;
      endTime = currentTime + Math.floor((Math.random() * 30000) + 30000);

      // Update progress bar maximum
      progressBar.setAttribute('max', (endTime - startTime).toString());
    }

    // Update the progress bar value
    progressBar.setAttribute('value', ((endTime - startTime) - (endTime - currentTime)).toString());
  });
};

// If the player closes ArchipIDLE, send a DeathLink
window.addEventListener('beforeunload', sendDeathLink);