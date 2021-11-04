export const url =
  process.env.NODE_ENV === "production"
    ? // ? "https://ghoultoken.crypto"
      ""
    : "http://localhost:8000";

export const darkpaper = url + "/ghoul_ecosystem_dark_paperx.pdf";
