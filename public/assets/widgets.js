const motivationalVideos = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ', // Never Gonna Give You Up - Rick Astley
  'https://www.youtube.com/embed/ZXsQAXx_ao0', // Just Do It - Shia LeBouf
  'https://www.youtube.com/embed/Cqd1Gvq-RBY', // Numa Numa
  'https://www.youtube.com/embed/2yJgwwDcgV8', // Nyan Cat
  'https://www.youtube.com/embed/9bZkp7q19f0', // Gangnam Style
  'https://www.youtube.com/embed/MtN1YnoL46Q', // The Duck Song
  'https://www.youtube.com/embed/EwTZ2xpQwpA', // Chocolate Rain - Tay Zonday
  'https://www.youtube.com/embed/y8Kyi0WNg40', // Dramatic Chipmunk
  'https://www.youtube.com/embed/2Z4m4lnjxkY', // Trololo
  'https://www.youtube.com/embed/ZZ5LpwO-An4', // He-Man What's Goin' On
  'https://www.youtube.com/embed/Z3ZAGBL6UBA', // Peanut Butter Jelly Time
  'https://www.youtube.com/embed/KMYN4djSq7o', // Llama Song
  'https://www.youtube.com/embed/A67ZkAd1wmI', // Caramelldansen
  'https://www.youtube.com/embed/EIyixC9NsLI', // Badger Badger Badger
  'https://www.youtube.com/embed/CsGYh8AacgY', // Charlie the Unicorn
  'https://www.youtube.com/embed/ytWz0qVvBZ0', // Diggy Diggy Hole
  'https://www.youtube.com/embed/1qN72LEQnaU', // Hamster Dance,
  'https://www.youtube.com/embed/qItugh-fFgg', // All Your Base Are Belong to Us
  'https://www.youtube.com/embed/dTAAsCNK7RA', // OK Go - Here it Goes Again
  'https://www.youtube.com/embed/kfVsfOSbJY0', // Rebecca Black - Friday
  'https://www.youtube.com/embed/1wnE4vF9CQ4', // Leek Spin
  'https://www.youtube.com/embed/ykwqXuMPsoc', // Narwhals
  'https://www.youtube.com/embed/ZSM5t_0LIi8', // I'm a firin' mah lazar
  'https://www.youtube.com/embed/_7jpz_55EdM', // Sesame Street - Jack Black Finds an Octagon
  'https://www.youtube.com/embed/mm-aovm1axQ', // Trogdor the Burninator (Song Only)
];

const motivatePlayer = (playerName = 'a dead player') => {
  // Only one video at a time, please
  const existing = document.getElementById('motivational-video-container');
  if (existing) {
    existing.parentElement.removeChild(existing);
  }

  const container = document.createElement('div');
  container.setAttribute('id', 'motivational-video-container');

  const closeBar = document.createElement('div');
  closeBar.setAttribute('id', 'motivational-video-close-bar');
  const message = document.createElement('div');
  message.innerText = `A motivational message from ${playerName}!`;
  closeBar.appendChild(message);
  const closeButton = document.createElement('button');
  closeButton.addEventListener('click', () => container.parentElement.removeChild(container));
  closeButton.innerText = '❌';
  closeBar.appendChild(closeButton);
  container.appendChild(closeBar);

  const motivationalVideo = document.createElement('iframe');
  motivationalVideo.setAttribute('width', '560');
  motivationalVideo.setAttribute('height', '315');
  motivationalVideo.setAttribute('frameborder', '0');
  const videoUrl = `${motivationalVideos[Math.floor(Math.random() * motivationalVideos.length)]}?controls=0&autoplay=1`;
  console.info(videoUrl);
  motivationalVideo.setAttribute('src', videoUrl);
  motivationalVideo.setAttribute('allow', 'autoplay; encrypted-media; repeat; picture-in-picture; web-share;')
  container.appendChild(motivationalVideo);
  document.body.appendChild(container);
};

const chooseFate = () => {
  const fateContainer = document.createElement('div');
  fateContainer.setAttribute('id', 'fate-container');

  const fateHeader = document.createElement('h2');
  fateHeader.innerText = 'Retribution';
  fateContainer.appendChild(fateHeader);

  const fateExplanation = document.createElement('span');
  fateExplanation.setAttribute('id', 'fate-explanation');
  fateExplanation.innerText = 'You have been killed by Death Link five times. Fate has granted you the power ' +
    'of retribution. What will you do with it?';
  fateContainer.appendChild(fateExplanation);

  const saveYourself = document.createElement('div');
  saveYourself.classList.add('fate-option');
  saveYourself.innerText = 'Become Immortal';
  const syDesc = document.createElement('div');
  syDesc.classList.add('fate-description');
  syDesc.innerText = 'Never die to a Death Link again, unless...';
  saveYourself.appendChild(syDesc);
  fateContainer.appendChild(saveYourself)
  saveYourself.addEventListener('click', () => {
    // Never die to a Death Link again, unless you refresh the page
    immortal = true;
    hideFate();
  });

  const beGenerous = document.createElement('div');
  beGenerous.classList.add('fate-option');
  beGenerous.innerText = 'Show Mercy';
  const bgDesc = document.createElement('div');
  bgDesc.classList.add('fate-description');
  bgDesc.innerText = 'Send four items immediately';
  beGenerous.appendChild(bgDesc);
  fateContainer.appendChild(beGenerous);
  beGenerous.addEventListener('click', () => {
    // Send four items immediately
    immediateItems = 4;
    hideFate();
  });

  const sowChaos = document.createElement('div');
  sowChaos.classList.add('fate-option');
  sowChaos.innerText = 'Exact Vengeance';
  const scDesc = document.createElement('div');
  scDesc.classList.add('fate-description');
  scDesc.innerText = 'Kill everyone!';
  sowChaos.appendChild(scDesc);
  fateContainer.appendChild(sowChaos);
  sowChaos.addEventListener('click', () => {
    // Kill everyone!
    sendDeathLink(`${slotName || 'Someone'} chose to sow chaos! You have all been destroyed!`);
    hideFate();
  });

  const dadJoke = document.createElement('div');
  dadJoke.classList.add('fate-option');
  dadJoke.innerText = 'Hear a Dad Joke';
  const djDesc = document.createElement('div');
  djDesc.classList.add('fate-description');
  djDesc.innerText = 'Farrak tells you a punny joke.';
  dadJoke.appendChild(djDesc);
  fateContainer.appendChild(dadJoke);
  dadJoke.addEventListener('click', () => {
    // TODO: Call out to the joke API to get a joke
    hideFate();
  });

  const fateDecides = document.createElement('div');
  fateDecides.classList.add('fate-option');
  fateDecides.innerText = 'Let Farrak Decide';
  const fdDesc = document.createElement('div');
  fdDesc.classList.add('fate-description');
  fdDesc.innerText = 'What could possibly go wrong?';
  fateDecides.appendChild(fdDesc);
  fateContainer.appendChild(fateDecides);
  fateDecides.addEventListener('click', () => {
    hideFate();
    const roll = Math.floor(Math.random() * 6);
    switch (roll) {
      case 0:
        appendConsoleMessage('FATE: Turn that frown upside down!');
        // TODO: Find a replacement for spinning the UI
        break;
      case 1:
        appendConsoleMessage('FATE: Nothing happened.');
        break;
      case 2:
        // Send one item
        appendConsoleMessage('FATE: Sending one item immediately.');
        ++immediateItems;
        break;
      case 3:
        // Kill everyone
        appendConsoleMessage('FATE: Sending a DeathLink.');
        sendDeathLink(`${slotName || 'Someone'} trusted Farrak to choose your punishment for repeatedly killing them.` +
          `That may have been a poor decision.`);
        break;
      case 4:
        // Eyestrain mode
        appendConsoleMessage('FATE: You were gifted with an incredible joke.');
        // TODO: Find a replacement for eyestrain mode
        break;
      case 5:
        // Refresh the window
        if (slotName) {
          sendMessageToServer(`${slotName} is learning about cheese!`);
        }
        window.location = 'https://cheese.com/'
        break;
    }
  });

  document.body.appendChild(fateContainer);
};

const hideFate = () => {
  const existing = document.getElementById('fate-container');
  if (existing) {
    existing.parentElement.removeChild(existing);
  }
};