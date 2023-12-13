export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

export function gtag_report_conversion(url: Location | (string & Location)) {
  let callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: `${GA_MEASUREMENT_ID}/3nerCPL-sv8YEImn8c8q`,
    event_callback: callback,
  });
  return false;
}
