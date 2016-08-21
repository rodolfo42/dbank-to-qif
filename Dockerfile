FROM python:2.7

RUN pip install csvkit
RUN wget https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-x64.tar.xz && tar -C /usr/local --strip-components 1 -xJf node-v4.5.0-linux-x64.tar.xz

ADD ./app /app
RUN cd /app && npm install
