const base64 = require("base-64");
const utf8 = require("utf8");

export function encodeUUID(payload) {
  const uuid = `${payload.sex}:${payload.name}:${payload.branch}:${payload.sem}:${payload.preferance}:${payload.phone}:${payload.email}`;

  const encodedString = base64.encode(utf8.encode(uuid));

  getKey(payload.email);
  return encodedString;
}

export function decodeUUID(encodedString) {
  const uuid = utf8.decode(base64.decode(encodedString));

  const payload = uuid.split(":");

  console.log(payload);

  return payload;
}

export function getKey(tcrid) {
  const id = tcrid.split("@");

  if (id[1] === "@gectcr.ac.in") return 0;
  else return id[0];
}