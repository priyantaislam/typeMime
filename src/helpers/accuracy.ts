export function accuracy(
  text: string,
  input: string,
  correctChars: number,
  totalChars: number
): number {
  const length = Math.min(text.length, input.length);
  let matches = 0;

  for (let i = 0; i < length; i++) {
    if (text[i] === input[i]) {
      matches++;
    }
  }

  const validCorrectChars = isNaN(correctChars) ? 0 : correctChars;
  const validTotalChars = isNaN(totalChars) ? 0 : totalChars;

  const denominator = length + validTotalChars;

  if (denominator === 0) return 0;

  return Math.round(((matches + validCorrectChars) / denominator) * 100);
}
