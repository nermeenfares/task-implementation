export function encrypt(text: string): string {
  return btoa(
    text
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) ^ 64))
      .join("")
  );
}

export function decrypt(text: string): string {
  return atob(text)
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) ^ 64))
    .join("");
}
