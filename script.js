const emojiCodes = [
  128512, // Grinning face
  128514, // Face with tears of joy
  128525, // Smiling face with heart-eyes
  128526, // Smiling face with sunglasses
  128591, // Folded hands
  128640, // Rocket
  127881, // Party popper
  127774, // Sun
  127829, // Pizza
  127918, // Video game
  128049, // Cat
  128054, // Dog
  127752, // Rainbow
  127925, // Musical notes
  128293, // Fire
  128077  // Thumbs up
];

const gallery = document.querySelector("#gallery");


function showEmojis(count = emojiCodes.length) {
  gallery.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const code = emojiCodes[i];
    const emoji = String.fromCodePoint(code);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="emoji">${emoji}</div>
      <div class="code">${code}</div>
    `;

    gallery.appendChild(card);
  }
}

showEmojis();