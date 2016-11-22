from django.db import models
from django.utils.translation import ugettext_lazy as _


class DieResult(models.Model):
    k = models.BigIntegerField(_('k'), primary_key=True, editable=False)
    result = models.FloatField(_('result'))
