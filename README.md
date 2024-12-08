## Expo App with supabase Stack

- [expo-router](https://docs.expo.dev/router/installation/#quick-start)
- [drawer+tabs](https://docs.expo.dev/router/advanced/drawer/)
- [nativewind](https://www.nativewind.dev/)
- [gluestack-ui](https://gluestack.io/)
- local set up supabase (you'll need supabase cli in global npm)
- [eslint9 + functional lite](https://github.com/eslint-functional/eslint-plugin-functional)

How it was done:

1. `pnpm dlx create-expo-stack@latest [[yourprojectname]] --import-alias --expo-router --drawer+tabs --nativewind --supabase --pnpm `

2. `"newArchEnabled": true,` and `"android": {      "allowCleartextTraffic": true,` added into `app.json`
3. `.env` content

```
EXPO_PUBLIC_SUPABASE_URL="http://10.0.2.2:54321"   EXPO_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
```

4. `supabase init` , `supabase start`
5. `pnpm dlx gluestack-ui init`
6. `sort-package-json.cmd`
7. [eslint.config.js for eslint9 · GitHub](https://gist.github.com/kaanguru/e1e479e56e899af40af67bc9245c402f)
8. `"dev": "expo start -c",         "start": "supabase start && expo start",      "updatesdk": "expo install expo@latest && expo install --fix",` added into package.json
