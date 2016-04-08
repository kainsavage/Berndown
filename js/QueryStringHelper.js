/**
 * Gets values from the query string via a parameter name.
 */
export function getParameterByName(name, url) {
  var regex, results;
  if (!name)
    return null;
  if (!url)
    url = window.location.href;
  // This is just to avoid case sensitiveness  
  url = url.toLowerCase();
  // This is just to avoid case sensitiveness for query parameter name

  name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();
  regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);

  if (!results)
    return null;
  if (!results[2])
    return '';

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}