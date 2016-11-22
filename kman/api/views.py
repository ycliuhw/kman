from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import DieResult
from .util import die


class DieView(APIView):

    allowed_methods = ['get']

    def get(self, request, k):
        number = None
        try:
            number = int(k)
        except ValueError:
            pass
        if number is not None and number > 0:
            result = None
            try:
                result = DieResult.objects.get(k=number).result
            except DieResult.DoesNotExist:
                try:
                    result = die(number)
                    DieResult.objects.create(k=number, result=result)
                except Exception as e:
                    return Response(
                        {'error': 'expected error -> {}'.format(e)},
                        status.HTTP_500_INTERNAL_SERVER_ERROR
                    )

            return Response({'input': number, 'output': result})
        else:
            return Response(
                {'error': '`k` ({}) has been an positive integer!'.format(k)},
                status=status.HTTP_400_BAD_REQUEST
            )
