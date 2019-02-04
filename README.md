# Django React Docker Project

Create a `.env` file in the root directory with these settings:

```
BASE_URL=localhost
REACT_APP_BASE_URL=localhost
ENV=development
```

`docker-compose build`
`docker-compose up`
`docker-compose exec api python manage.py createsuperuser`

API Login at `api.localhost/auth/login/`
API Browser is accessible at `api.localhost/v1`
### Backend

To run outside of docker: 
- add a `local.py` file to `/api/config/settings/` with the SECRET_KEY variable
- `export DJANGO_DEVELOPMENT=1` locally when running django locally to automatically use the dev.py settings.

### Email
Add this to your local.py
```
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = "email@gmail.com"
EMAIL_HOST_PASSWORD = "password"
```

### Frontend

`docker-compose build`
`docker-compose up traefik db api`
`cd frontend`
`yarn install`
`yarn start`
