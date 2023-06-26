import { NextResponse } from 'next/server';

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text');

  const path = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${text}`;
  return await fetch(path, { method: 'POST' })
    .then((res) => NextResponse.json({ res }))
    .catch((e) => console.error('Ошибка при отправке формы'));
}
