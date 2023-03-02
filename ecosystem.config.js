module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "root",
      host: "s16.v2center.ga",
      ref: "origin/main",
      repo: "git@github.com:Artin-GH/space-tourism-website.git",
      path: "/root",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
