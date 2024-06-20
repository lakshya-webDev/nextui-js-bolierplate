import { BASE_URL } from 'utils/constants';

export async function DELETE(req, { params }) {
  const { id } = params;
  const res = await fetch(`${BASE_URL}/delete/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();

  return new Response(
    JSON.stringify({
      message: data.message,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
