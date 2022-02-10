const base64 = require("base-64");
const utf8 = require("utf8");

export function encodeUUID(payload) {
  const uuid = `${payload.sex}:${payload.name}:${payload.branch}:${payload.sem}:${payload.preferance}:${payload.phone}`;

  const encodedString = base64.encode(utf8.encode(uuid));

  return encodedString;
}

export function decodeUUID(encodedString) {
  const uuid = utf8.decode(base64.decode(encodedString));

  const payload = uuid.split(":");

  console.log(payload);

  return payload;
}
