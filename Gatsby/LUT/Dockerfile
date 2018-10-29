FROM ubuntu:16.04

# ENV DEBIAN_FRONTEND noninteractive

RUN mkdir /usr/workspace
RUN apt-get update 

# Install latest nodejs 8
RUN apt-get install -y wget && wget -qO- https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs

# Install GIT
RUN apt-get install -y git

WORKDIR /usr/workspace

# Install gatsby
RUN npm install --global gatsby-cli

# COPY ./package.json .

# RUN npm install


# && apt-get install -y node



# RUN npm install

# EXPOSE 8080

# CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]