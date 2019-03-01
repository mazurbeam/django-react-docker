FROM node:alpine

ARG BASE_URL
ARG ENV

ENV RAZZLE_APP_BASE_URL $BASE_URL
ENV RAZZLE_ENV $ENV
ENV RAZZLE_API_URL "https://api.lab.mazurbeam.com"
ENV RAZZLE_HTTP $HTTP
#ENV NODE_ENV production
ENV HOST 0.0.0.0
#ENV PORT 80

# Copy and build app
RUN mkdir /app
COPY razzle-app /app
WORKDIR /app
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm","run", "start:prod"]

# Production
#FROM httpd:alpine as prod
#
#RUN rm -r /usr/local/apache2/htdocs/
#COPY --from=builder /app/build /usr/local/apache2/htdocs/
