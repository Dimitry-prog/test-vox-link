
const bannedWords = [ '123', '321' ];

function validateText(text) {
	const bannedWordComponent = (word) => `<BannedWordComponent>${word}</BannedWordComponent>`;
  return text.map((string) => {
    bannedWords.forEach((word) => {
      const regex = new RegExp(word, "gi");
      string = string.replace(regex, bannedWordComponent(word));
    });
    return string;
  });
}

module.exports = {
	validateText,
};