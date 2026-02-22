///// HANDLES EXPIRED OR INVALID CREDS AND REDIRECTS TO HOME PAGE 
export async function fetchAuth(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    credentials: 'include',
  });

  if ([403, 401].includes(response.status)) {
    window.location.href = '/'
  
  }

  return response;
}
