FROM python:3.7

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1
ENV DJANGO_ENV=prod
ENV DOCKER_CONTAINER=1

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /api
WORKDIR /api
ADD . /api/

RUN pip install -r requirements.txt

EXPOSE 8000
