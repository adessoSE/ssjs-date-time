# SSJS-DATE-TIME
Package to simplify date and time manipulation.
# intallation 
npm install ssjs-date-time
# Docs
* ConvertToUnixTimeStamp(val)
    * Arguments: 
        * val: datelike value (Date string, Date object...)
    * returns: Unix timestamp
* UtcDateTime()
    * Arguments: 
    * returns: utc datetime in yyyy-MM-dd'T'HH:mm:ss format
* DateTime()
    * Arguments: 
    * returns: local datetime in yyyy-MM-dd'T'HH:mm:ss format
* DateDiff(a, b)
    * Arguments: 
        * a: datelike value
        * b: datelike value
    * returns: diffResult
    * diffResult:
```js
//format
{
    milliseconds: function () {}, 
    seconds: function () {},
    minutes: function () {},
    hours: function () {},
    days: function () {},
}
```
* FormatDate(dateString, dateFormat, timeFormat, localeCode)
    * ssjs wrapper for [FormatDate](https://developer.salesforce.com/docs/marketing/marketing-cloud-ampscript/references/mc-ampscript-date-time/mc-ampscript-reference-date-time-format-date.html) ampscript function
    * Arguments:
        * `dateString`: the date string that you want to format.
        * `dateFormat`: A string that represents the format to apply to the date, such as `ddddd, d MMMM yyyy`. You can also pass these strings.
            * `S` – Formats the date using the short-form format for the locale that you specify in the `localeCode` parameter.
            * `L` – Formats the date using the long-form format for the locale that you specify in the `localeCode` parameter.
            * `ISO` – Formats the date and time in an ISO-8601-compliant format.
            * `RFC` – Formats the date and time in an RFC-1123-compliant format.
        * `timeFormat`: A string that represents the format to apply to the time, such as `H:mm:ss tt`
        * `localeCode`: The locale code to use when formatting the date, such as `ja_JP`
    * returns: formatted date
* UnixTimeStamp()
    * Arguments: 
    * returns: unix timestamp of local timezone
* UnixTimeStampSeconds
    * Arguments: 
    * returns: unix timestamp of local timezone in seconds
# Quickstart
```
import { UtcDateTime, DateTime, DateDiff } from 'ssjs-date-time';

const timezoneOffset = DateDiff(UtcDateTime(), DateTime()).hours();

```