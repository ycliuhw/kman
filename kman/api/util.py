from decimal import Decimal
from functools import reduce


def factorial(to_, from_=1):
    return reduce(lambda x, y: x * y, range(from_, to_ + 1))


def die(number):
    return Decimal(factorial(number) / number ** number)
