from unittest import mock

from django.core.urlresolvers import reverse
from django.test import TestCase
from tests import factories

from api.models import DieResult


class FakeException(Exception):
    pass


class TestApiView(TestCase):

    def test_invalid_k_NON_INT(self):
        k = 'k'
        url = reverse('api:die', kwargs={'k': k})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 400)

    def test_invalid_k_negative_value(self):
        k = -10
        url = reverse('api:die', kwargs={'k': k})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 400)

    def test_all_good_brand_new_k_db_record_needs_created(self):
        self.assertEqual(DieResult.objects.count(), 0)
        k = 1
        url = reverse('api:die', kwargs={'k': k})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(DieResult.objects.count(), 1)

    def test_all_good_existing_k_db_record_NO_needs_created(self):
        k = 111
        factories.DieResultFactory(k=k)
        self.assertEqual(DieResult.objects.count(), 1)
        url = reverse('api:die', kwargs={'k': k})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(DieResult.objects.count(), 1)

    def test_unexpected_error(self):
        url = reverse('api:die', kwargs={'k': 1})
        with mock.patch('api.views.die', side_effect=FakeException) as mocked:
            response = self.client.get(url)
        self.assertTrue(mocked.called)
        self.assertEqual(response.status_code, 500)
