export function randomPhrase() {
  const phrases = [
    "Ну что, по 🍻?",
    "Ммм, никуда не надо",
    "Неплохо бы заняться чем-нибудь...",
    "Гуляй, студент!",
    "Купил как-то мужик шляпу...",
    "Енотовидная собака",
    "Пномпень - столица Камбоджи",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}
