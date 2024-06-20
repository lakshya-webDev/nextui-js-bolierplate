import { BASE_URL } from 'utils/constants';

export async function GET() {
  const res = await fetch(`${BASE_URL}/employees`);
  const data = await res.json();

  return new Response(
    JSON.stringify({
      employees: data.data,
      message: data.message,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
