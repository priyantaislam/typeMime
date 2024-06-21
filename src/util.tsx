// utils/generateLines.ts
const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "vanilla",
  "watermelon",
  "xigua",
  "yam",
  "zucchini",
];

export const generateRandomLines = (
  numLines: number,
  wordsPerLine: number
): string[] => {
  const lines: string[] = [];
  for (let i = 0; i < numLines; i++) {
    const line: string[] = [];
    for (let j = 0; j < wordsPerLine; j++) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      line.push(randomWord);
    }
    lines.push(line.join(" "));
  }
  return lines;
};
