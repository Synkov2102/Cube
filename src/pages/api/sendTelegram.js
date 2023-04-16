import RequestHandler from '@/utils/RequestHandler';

const handler = new RequestHandler({
  // useQs: false,
});

handler.post(async (req, res) => {
  const text = req.query.text;
  const path = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${text}`;
  return await fetch(path, { method: 'POST' })
    .then((res) => res)
    .catch((e) => console.error('Ошибка при отправке формы'));
});

export default handler.handle;
