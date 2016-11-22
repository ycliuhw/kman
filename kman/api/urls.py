from django.conf.urls import url
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt

from . import views


urlpatterns = [
    url(
        r'^die/(?P<k>\+?[0-9]*)/?',
        csrf_exempt(
            xframe_options_exempt(views.DieView.as_view())
        ),
        name='die'
    ),
]
