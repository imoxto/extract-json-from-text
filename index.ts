/**
 * @template T
 * @param {string} str
 * @param {"object"|"array"} type
 * @returns {T|null} JSON object or array
 */
function jsonFromText(str: string, type = "object") {
  if (typeof str !== "string" || str === "") return null;

  const bracketOpen = type === "object" ? "{" : "[";
  const bracketClose = type === "object" ? "}" : "]";

  let firstOpen: number = 0,
    firstClose: number,
    candidate: string;
  firstOpen = str.indexOf(bracketOpen, firstOpen + 1);
  do {
    firstClose = str.lastIndexOf(bracketClose);
    if (firstClose <= firstOpen) {
      return null;
    }
    do {
      candidate = str.substring(firstOpen, firstClose + 1);
      try {
        var res = JSON.parse(candidate);
        return res;
      } catch (e) {
        // console.log(e);
      }
      firstClose = str.substr(0, firstClose).lastIndexOf(bracketClose);
    } while (firstClose > firstOpen);
    firstOpen = str.indexOf(bracketOpen, firstOpen + 1);
  } while (firstOpen != -1);

  return null;
}

exports.jsonFromText = jsonFromText;
