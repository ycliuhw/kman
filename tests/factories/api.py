import factory


class DieResultFactory(factory.DjangoModelFactory):

    class Meta:
        model = "api.DieResult"

    k = factory.Sequence(lambda n: n)
    result = 0.1111
