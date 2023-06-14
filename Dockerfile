FROM node:alpine3.18

WORKDIR /projetos/Project-organize/Organize-front

COPY package.json ./

RUN npm install

EXPOSE 4200

COPY . .

CMD ["ng","serve"]