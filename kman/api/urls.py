from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^die/(?P<k>\+?[0-9]*)?', views.DieView.as_view(), name='die'),
]
