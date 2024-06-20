import { BASE_URL } from 'utils/constants';

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const res = await fetch(`${BASE_URL}/update/${id}`, {
    method: 'PUT',
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
