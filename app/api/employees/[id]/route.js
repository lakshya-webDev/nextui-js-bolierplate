import { BASE_URL } from 'utils/constants';

export async function GET(req, { params }) {
  const { id } = params;
  const res = await fetch(`${BASE_URL}/employee/${id}`);
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
