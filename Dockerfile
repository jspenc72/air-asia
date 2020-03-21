FROM node:9.3.0-alpine

MAINTAINER jspenc72

LABEL "version"="0.0.2"

EXPOSE 8080

ENV NODE_PATH=/usr/local/lib/node_modules/:/usr/local/lib
ENV NODE_ENV=production
ENV MONGODB_URI=mongodb://mongom1.dryfti.com:27017/dryftiapi-dev
ENV STRIPE_SECRET=sk_live_gi9ItIWfF6WFoALUBEqehKIi
USER root

RUN apk add --update \
     python \
     python-dev \
     py-pip \
     build-base \
     curl \
     make \
   && pip install virtualenv \
   && rm -rf /var/cache/apk/*

RUN mkdir -p /usr/src/app

# RUN mkdir -p /usr/local/bin/pm2
# RUN mkdir -p /usr/local/bin/pm2-docker
# RUN mkdir -p /usr/local/bin/pm2-dev
# RUN mkdir -p /usr/local/bin/pm2-runtime

COPY . /usr/src/app/
WORKDIR /usr/src/app/dist

RUN chown node:node /usr/src/app
RUN chown node:node /usr/src/app/dist
RUN chown node:node /usr/local/lib/node_modules

#Install NodeJS App Dependencies
# RUN npm install pm2 -g --no-bin-links --quiet --no-progress
# RUN npm install pm2@next -g
USER node

RUN npm install -g node-gyp --quiet --no-progress --no-bin-links
RUN npm install -g sqlite3 --quiet --no-progress
RUN npm install --production --quiet
RUN npm install sqlite3 

USER root

# Add Route 53 AutoRegister Script
ADD docker-entrypoint.sh /usr/src/app/dist/docker-entrypoint.sh
RUN ["chmod", "+x", "/usr/src/app/dist/docker-entrypoint.sh"]

ADD register-route53.sh /usr/src/app/dist/register-route53.sh
RUN ["chmod", "+x", "/usr/src/app/dist/register-route53.sh"]

ADD cli53-linux-386.dms /usr/local/bin/cli53
RUN ["chmod", "+x", "/usr/local/bin/cli53"]

# AWS CREDENTIALS
ENV AWS_ACCESS_KEY_ID="AKIAIJHVZ4NIAU32VGHQ"
ENV AWS_SECRET_ACCESS_KEY="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"
ENV ZONE="dryfti.com"

CMD ["/usr/src/app/dist/docker-entrypoint.sh"]
