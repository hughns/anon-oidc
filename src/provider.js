const { Provider } = require('oidc-provider')
const config = require('./config')

module.exports = (names) => {
  const provider = new Provider(config.issuer, {
    async findAccount(ctx, id) {
      return {
        accountId: id,
        async claims(use, scope) {
          return {
            sub: id,
            name: names[id],
          }
        },
      }
    },
    claims: {
      openid: ['sub', 'name'],
    },
    features: {
      devInteractions: {
        enabled: false,
      },
      backchannelLogout: {
        enabled: true,
      },
    },

    clients: [
      {
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uris: config.redirectUris,
      },
    ],
  })

  // allow X-Forwarded-Proto and X-Forwarded-For to be set
  provider.proxy = true

  return provider
}
