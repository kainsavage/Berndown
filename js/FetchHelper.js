/**
 * Fetches data for the given URL.
 */
export async function fetch(url) {
  return new Promise((resolve,reject) => {
    $.getJSON(url)
    .done(async function(response) {
      resolve(response.data);
    })
    .fail(async function(jqXHR, textStatus, resp) {
      reject(jqXHR, textStatus, resp);
    });
  });
}