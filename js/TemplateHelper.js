/**
 * Fetches a template for the given URL.
 */
export async function fetchTemplate(url) {
  return new Promise((resolve,reject) => {
    $.get(url, async function(response) {
      resolve(response)
    });
  });
}