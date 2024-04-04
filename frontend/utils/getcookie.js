export const getCookie = (name) => {
    const cookies = Object.fromEntries(
      document.cookie.split("; ").map((cookie) => cookie.split("="))
    );
    return cookies[name];
  };