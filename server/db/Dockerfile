FROM postgres

WORKDIR /db

ENV POSTGRES_PASSWORD=brewer
ENV POSTGRES_DB=brewhouse

COPY ./schema/serverless.sql /docker-entrypoint-initdb.d/
COPY ./seeds/* /docker-entrypoint-initdb.d/