const {
    americanOnly,
    americanToBritishSpelling,
    americanToBritishTitles,
    britishOnly,
  } = require("../constants");
  
  const flipObject = (obj) =>
    Object.entries(obj).reduce(
      (acc, [key, value]) => ((acc[value] = key), acc),
      {}
    );
  
  const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);
  
  const translate = (text, wordDiffAndSpelling, titles) => {
    const textLowerCase = text.toLowerCase();
    let translated;
    const timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9]))/g;
  
    Object.entries(titles).map(([key, value]) => {
      if (textLowerCase.includes(key)) {
        translated =
          text.replace(
            new RegExp(key, "gi"),
            `<span class="highlight">${capitalizeFirstLetter(value)}</span>`
          ) || text;
      }
    });
  
    translated = translated || text;
  
    const changeTime = textLowerCase.match(timeRegex);
    if (changeTime) {
      changeTime.map((time) => {
        translated =
          translated.replace(
            time,
            `<span class="highlight">${time.replace(":", ".")}</span>`
          ) || text;
      });
    }
  
    Object.entries(wordDiffAndSpelling).map(([key, value]) => {
      if (
        new RegExp(`${key} `, "gi").test(textLowerCase) ||
        new RegExp(`${key}[^A-Za-z]`, "gi").test(textLowerCase) ||
        new RegExp(`${key}$`, "gi").test(textLowerCase)
      ) {
        translated =
          translated.replace(
            new RegExp(key, "gi"),
            `<span class="highlight">${value}</span>`
          ) || text;
      }
    });
  
    return translated || text;
  };
  
  const americanToBritish = (text) => {
    const wordDiffAndSpelling = { ...americanOnly, ...americanToBritishSpelling };
    const titles = americanToBritishTitles;
  
    return translate(text, wordDiffAndSpelling, titles);
  };
  
  const britishToAmerican = (text) => {
    const britishToAmericanSpelling = flipObject(americanToBritishSpelling);
    const wordDiffAndSpelling = { ...britishOnly, ...britishToAmericanSpelling };
    const britishToAmericanTitles = flipObject(americanToBritishTitles);
  
    return translate(text, wordDiffAndSpelling, britishToAmericanTitles);
  };
  
  const translateText = (req, res) => {
    let { text, locale } = req.body;
    let translation;
  
    if (text == "") return res.json({ error: "No text to translate" });
    else if (!locale || !text)
      return res.json({ error: "Required field(s) missing" });
    else if (locale === "british-to-american")
      translation = britishToAmerican(text);
    else if (locale === "american-to-british")
      translation = americanToBritish(text);
    else return res.send({ error: "Invalid value for locale field" });
  
    if (translation === text) translation = "Everything looks good to me!";
  
    return res.json({ text, translation });
  };
  
  module.exports = { translateText };