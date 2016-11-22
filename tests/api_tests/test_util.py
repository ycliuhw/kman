from django.test import TestCase

from api.util import die, factorial


class TestDieResult(TestCase):

    def test_factorial(self):
        expected_in_out = (
            (1, 1),
            (2, 2),
            (3, 6),
            (4, 24),
            (5, 120),
            (6, 720),
            (7, 5040),
            (8, 40320),
            (9, 362880),
        )
        for in_, out_ in expected_in_out:
            self.assertEqual(factorial(in_), out_)

        self.assertNotEqual(factorial(10), 11)

    def test_die(self):
        expected_in_out = (
            (1, 1),
            (2, 0.5),
            (3, 0.22222222222222220988641083749826066195964813232421875),
            (4, 0.09375),
            (5, 0.038399999999999996636024235385775682516396045684814453125),
            (6, 0.01543209876543209790877853038182365708053112030029296875),
            (7, 0.0061198990216661426633226739113524672575294971466064453125),
            (8, 0.00240325927734375),
            (9, 0.00093665670841688495294741212404687757953070104122161865234375),
        )
        for in_, out_ in expected_in_out:
            self.assertEqual(die(in_), out_)

        self.assertNotEqual(die(10), 11)
