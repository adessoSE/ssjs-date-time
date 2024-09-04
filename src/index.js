import amp from 'lib/ampScript.js';

const pad = function (x) {
  return `${x}`.length == 1 ? `0${x}` : `${x}`;
};

export function ConvertToUnixTimeStamp(val) {
  if (typeof val == "number") {
    return val;
  } else if (typeof val == "object" || typeof val == "string") {
    return Date.parse(val);
  }
  throw `invalid value was provided for converToUnixTimeStamp: val = ${val}, type = ${typeof val}`;
};

export function UtcDateTime() {
  const d = new Date();
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(
    d.getUTCDate()
  )}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(
    d.getUTCSeconds()
  )}`;
}

export function DateTime() {
    const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
    d.getDate()
  )}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
    d.getSeconds()
  )}`;
}

export function DateDiff(a, b) {
  a = ConvertToUnixTimeStamp(a);
  b = ConvertToUnixTimeStamp(b);
  const diff = a - b;
  return {
    _diff: diff,
    milliseconds: function () {
      return this._diff;
    },
    seconds: function () {
      return this._diff / 1000;
    },
    minutes: function () {
      return this._diff / 60000;
    },
    hours: function () {
      return this._diff / 3600000;
    },
    days: function () {
      return this._diff / 86400000;
    },
  };
}

export function FormatDate(dateString, dateFormat, timeFormat, localeCode) {
    return amp.run(`SET @response = FormatDate(${dateString}, ${dateFormat}, ${timeFormat}, ${localeCode})`);
}

export function UnixTimeStamp() {
  return new Date().getTime();
}

export function UnixTimeStampSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}