# https://www.pnpm.cn/cli/deploy
# syntax=docker/dockerfile:1.4

FROM ./ as pruned
RUN pnpm --filter @xuni-shetuan/server --prod deploy pruned

FROM Node:18.18.2

WORKDIR /app

ENV NODE_ENV=production

COPY --from=pruned /app/pruned .

EXPOSE 8080
CMD ["node", "./dist/index.js"]