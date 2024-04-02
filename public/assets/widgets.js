window.addEventListener('load', () => {
  let visitorCount = parseInt(localStorage.getItem('visitor-count') || '1', 10);
  ++visitorCount;
  localStorage.setItem('visitor-count', (visitorCount).toString());
  document.querySelector('#visitor-count-number').innerText = visitorCount.toString();
});

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
  'https://www.youtube.com/embed/o0u4M6vppCI', // Actual Cannibal Shia LaBeouf
  'https://www.youtube.com/embed/D-UmfqFjpl0', // Dog of Wisdom
  'https://www.youtube.com/embed/lrzKT-dFUjE', // Ultimate Showdown of Ultimate Destiny
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

const tellDadJoke = () => {
  fetch('https://dadjokeslideshow.com/api/')
    .then(async (res) => {
      if (res.ok) {
        const joke = await res.json();
        const jokeText = `${joke.setup} ... ${joke.punchline}`;
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance(jokeText));
        }

        const utterance = new SpeechSynthesisUtterance(jokeText);
        utterance.voice = voices[Math.floor(Math.random() * voices.length)];
        window.speechSynthesis.speak(utterance);
      }
    });
};

const goBackInTime = () => {
  new cursoreffects.textFlag({
    text: 'Welcome to ArchipIDLE!!!!!',
    textSize: 24,
    color: ['#ccc333'],
  });

  const letterClasses = ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l0', 'n0', 'n1', 'n2', 'n3'].reverse();
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  let colorStartIndex = 0;
  let colorIndex = 0;
  const letters = [];
  letterClasses.forEach((c) => letters.push(document.querySelector(`.${c}`)));
  setInterval(() => {
    if (colorStartIndex === colors.length) { colorStartIndex = 0; }
    colorIndex = colorStartIndex;

    letters.forEach((letter) => {
      if (colorIndex === colors.length) { colorIndex = 0; }
      letter.style.color = colors[colorIndex];
      ++colorIndex;
    });
    ++colorStartIndex;
  }, 250);

  useMarquee = true;
  document.querySelectorAll('div.console-message').forEach(async (e) => {
    e.outerHTML = `<marquee class="console-message">${e.innerText}</marquee>`;
  });

  // ArchipIDLE 1997
  document.querySelector('.n0').innerText = '1';
  document.querySelector('.n1').innerText = '9';
  document.querySelector('.n2').innerText = '9';
  document.querySelector('.n3').innerText = '7';

  document.body.classList.add('geocities');
};
