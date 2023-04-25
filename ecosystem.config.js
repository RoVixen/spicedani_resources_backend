
module.exports = {
  apps : [{
    name   : "spicedani_resources",
    script : "./src/index.ts",
    env_production: {
      PORT: process.env.SERVER_PORT,
      NODE_ENV: 'production',
    },
  }]
}
