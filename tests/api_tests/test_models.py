from django.test import TestCase
from tests import factories

from api.models import DieResult


class TestDieResult(TestCase):

    def test_model(self):
        self.assertEqual(DieResult.objects.count(), 0)
        r1 = factories.DieResultFactory()
        r2 = factories.DieResultFactory()
        self.assertEqual(DieResult.objects.count(), 2)
        self.assertEqual(r1.k + 1, r2.k)
