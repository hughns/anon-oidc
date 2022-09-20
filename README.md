# Anonymous OpenID Connect Provider

Allows logging in to a service via OpenID Connect by only providing an username.

## Configuration

The following environment variables are required:

- `ISSUER`
- `BROKER_CLIENT_ID`
- `BROKER_CLIENT_SECRET`
- `BROKER_REDIRECT_URI`

Optionally:

- `PORT` (defaults to `8080`)
- `RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`

## Testing locally
```sh
ISSUER=http://localhost:8080 BROKER_CLIENT_ID=client_id BROKER_CLIENT_SECRET=secret BROKER_REDIRECT_URI=https://localhost:8081/callback npm start
```

Then you can start an authorization request with:

http://localhost:8080/auth?client_id=client_id&redirect_uri=https://localhost:8081/callback&response_type=code&scope=openid
