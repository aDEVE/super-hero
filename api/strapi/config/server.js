module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '73a5e962f2fa4b3c1231a0b4d2fea7d7'),
    },
  },
});
