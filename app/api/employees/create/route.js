import { BASE_URL } from 'utils/constants';

export async function POST(req) {
  const body = await req.json();
  const res = await fetch(`${BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return new Response(
    JSON.stringify({
      employee: data.data,
      message: data.message,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
