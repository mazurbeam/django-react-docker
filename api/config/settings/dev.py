from .base import *

DEBUG = True

SECRET_KEY = ')bs**gh!bzgsb1e9j9s+6z_-$_(rcu2(2cfc8tc1z@*$a87!=&'

ALLOWED_HOSTS = ['api.localhost', '127.0.0.1']


try:
    from .local import *
except ImportError:
    pass