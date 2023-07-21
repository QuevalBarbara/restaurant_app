module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://emilia-kitchen.vercel.app/'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS')
  },
});
