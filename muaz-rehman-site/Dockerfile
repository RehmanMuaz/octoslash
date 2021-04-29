FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/muaz-rehman-site
WORKDIR /srv/app/muaz-rehman-site

COPY package.json /srv/app/muaz-rehman-site
COPY package-lock.json /srv/app/muaz-rehman-site

RUN npm install

COPY . /srv/app/muaz-rehman-site

CMD [ "npm","start" ]