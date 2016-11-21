from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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
            try:
                return Response({'input': number, 'output': die(number)})
            except Exception as e:
                error = 'expected error -> {}'.format(e)
        else:
            error = '`k` ({}) has been an positive integer!'.format(k)
        return Response({'error': error}, status=status.HTTP_400_BAD_REQUEST)
