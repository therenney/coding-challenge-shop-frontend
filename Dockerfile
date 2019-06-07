# Build
FROM node:10 as builder

WORKDIR /src/kollex-app
COPY package.json .
COPY package-lock.json .
RUN npm install --no-audit

COPY .browserslistrc .
COPY .eslintignore .
COPY .eslintrc.js .
COPY .prettierignore .
COPY .prettierrc.js .
COPY aliases.config.js .
COPY babel.config.js .
COPY jest.config.js .
COPY postcss.config.js .
COPY vue.config.js .
COPY api/ ./api
COPY public/ ./public
COPY src/ ./src

ENV NODE_ENV=production

RUN ./node_modules/.bin/vue-cli-service build

# Runtime
FROM nginx:alpine as runtime

WORKDIR /opt/app/kollex-app
RUN chmod 0755 /opt/app/kollex-app
COPY --from=builder /src/kollex-app/dist/ .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
