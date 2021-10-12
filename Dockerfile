FROM node:14.17.6
RUN mkdir /tmdb_clone_project
WORKDIR /tmdb_clone_project

COPY package.json /tmdb_clone_project/
COPY package-lock.json /tmdb_clone_project/
RUN npm install

ADD . /tmdb_clone_project/
RUN npm build

CMD ["npm", "run", "start",]