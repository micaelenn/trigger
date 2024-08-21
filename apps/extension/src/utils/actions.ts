/*
 * Make default Fetch API request based on parameters return response and status code
 *
 */
export const defaultFetchAPIRequest = async (
  endpoint: string,
  method: string,
  body?: object
) => {
  const response = await fetch(endpoint, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJSON = await response.json();
  return { status: response.status, data: responseJSON };
}

/*
 * Make default GET request using Fetch API
 *
 */
export const defaultGETRequest = async (endpoint: string) => {
	const response = await fetch(endpoint, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const responseJSON = await response.json();
	return { status: response.status, data: responseJSON };
};