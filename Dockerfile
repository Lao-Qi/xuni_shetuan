FROM node:18.18.2-alpine
WORKDIR /app

COPY ./output .
RUN npm install pnpm -g && pnpm install --prod

ENV NODE_ENV=production
EXPOSE 8080

CMD ["node", "./apps/server/index.js"]