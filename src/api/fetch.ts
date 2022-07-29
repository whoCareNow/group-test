const baseUrl = "https://api.mocksys.com/api/v1/mock/20071";
const localUrl = "http://localhost:8079";
const getUrl = (url: string) => {
  return `${localUrl}${url}`;
};
export default async function Fetch(
  url: string,
  data = {},
  method: string = "GET"
) {
  url = getUrl(url);
  method = method.toUpperCase();
  if (method === "POST") {
    try {
      const res = await fetch(url, {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
        method: method,
      });
      return res.json();
    } catch (err) {
      console.error(err);
      console.error(url, method);
      return { success: false, message: "Error fetching" };
    }
  } else if (method === "GET") {
    try {
      const res = await fetch(url, {
        headers: {
          "content-type": "application/json",
        },
        method: method,
      });
      return res.json();
    } catch (err) {
      console.error(err);
      console.error(url, method);
      return { success: false, message: "Error fetching" };
    }
  }
}

Fetch.get = async (url: string) => {
  url = getUrl(url);
  try {
    const res = await fetch(url, {
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
    });
    return res.json();
  } catch (err) {
    console.error(err);
    console.error(url, "GET");
    return { success: false, message: "Error fetching" };
  }
};

Fetch.post = async (url: string, data = {}) => {
  url = getUrl(url);
  try {
    const res = await fetch(url, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    });
    return res.json();
  } catch (err) {
    console.error(err);
    console.error(url, "POST");
    return { success: false, message: "Error fetching" };
  }
};
