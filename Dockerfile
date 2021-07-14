FROM public.ecr.aws/bitnami/node:16-prod

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 80
CMD [ "node", "app.js" ]

