export const getCookie = (name: string) => {
  let query = document.cookie.split(";"),
    match = null,
    result: any = [];

  for (var index in query) {
    if (typeof query[index] === "string") {
      match = query[index].trim().split("=");

      if (name) {
        if (name === match[0]) {
          result = match.length > 2 ? match[1] + "=" + match[2] : match[1];

          result = result === "true" ? true : result;
          result = result === "false" ? false : result;

          break;
        } else {
          result = false;
        }
      } else {
        result[match[0]] = match[1];
      }
    }
  }

  return result;
};