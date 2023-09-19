export default async function plugin(fastify, options) {
  fastify.get('/wade', async function (request, reply) {
    reply
      .header('Content-Type', 'text/html')
      .send('<html><body>${process.env.TEXT}</body></html>');
    return { key: 'ricky' };
  });
}