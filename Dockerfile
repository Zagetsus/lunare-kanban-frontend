FROM node:lts as dependencies
WORKDIR /lunare-kanban-frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /lunare-kanban-frontend
COPY . .
COPY --from=dependencies /lunare-kanban-frontend/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /lunare-kanban-frontend
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /lunare-kanban-frontend/public ./public
COPY --from=builder /lunare-kanban-frontend/.next ./.next
COPY --from=builder /lunare-kanban-frontend/node_modules ./node_modules
COPY --from=builder /lunare-kanban-frontend/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
