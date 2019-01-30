from django.urls import path, include, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'events', views.EventViewSet)

urlpatterns = [path('', include(router.urls))]
