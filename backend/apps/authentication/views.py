from django.shortcuts import render

from .models import User
from .serializers import UserSerializer
from .permissions import isAdminPermission

from ..jurnal.models import Jurnal
from ..konferensi.models import Konferensi
from ..kuliahtamu.models import KuliahTamu
from ..prestasi.models import Prestasi

from ..jurnal.serializers import JurnalSerializer
from ..konferensi.serializers import KonferensiSerializer
from ..kuliahtamu.serializers import KuliahTamuSerializer
from ..prestasi.serializers import PrestasiSerializer

from rest_framework import parsers, renderers
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.compat import coreapi, coreschema
from rest_framework.response import Response
from rest_framework.schemas import ManualSchema

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from itertools import chain

class ObtainAuthToken(APIView):
    throttle_classes = ()
    permission_classes = ()
    parser_classes = (parsers.FormParser, parsers.MultiPartParser, parsers.JSONParser,)
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = AuthTokenSerializer
    if coreapi is not None and coreschema is not None:
        schema = ManualSchema(
            fields=[
                coreapi.Field(
                    name="username",
                    required=True,
                    location='form',
                    schema=coreschema.String(
                        title="Username",
                        description="Valid username for authentication",
                    ),
                ),
                coreapi.Field(
                    name="password",
                    required=True,
                    location='form',
                    schema=coreschema.String(
                        title="Password",
                        description="Valid password for authentication",
                    ),
                ),
            ],
            encoding="application/json",
        )

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'is_admin': user.is_admin})

custom_auth_token = ObtainAuthToken.as_view()

class UserInfoView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = User.objects.get(username=request.user.username)
        serializer = UserSerializer(user)
        print(repr(serializer.data['username']))
        return Response(serializer.data)

# modul, id, judul, nama
class AllNonValidateView(APIView):
    permission_classes = [isAdminPermission]

    def get(self, request):
        query_jurnal = Jurnal.objects.filter(is_validated=False)
        query_konferensi = Konferensi.objects.filter(is_validated=False)
        query_kultam = KuliahTamu.objects.filter(is_validated=False)
        query_prestasi = Prestasi.objects.filter(is_validated=False)

        results_list = list(chain(query_jurnal, query_konferensi, query_kultam, query_prestasi))

        results = list()
        for entry in results_list:
            item_type = entry.__class__.__name__.lower()
            judul = ""
            nama = ""
            if isinstance(entry, Jurnal):
                serializer = JurnalSerializer(entry)
                judul = serializer.data['judul']
                nama = serializer.data['author']
            elif isinstance(entry, Konferensi):
                serializer = KonferensiSerializer(entry)
                judul = serializer.data['judul']
                nama = serializer.data['author']
            elif isinstance(entry, KuliahTamu):
                serializer = KuliahTamuSerializer(entry)
                judul = serializer.data['topik']
                nama = serializer.data['pemateri']
            elif isinstance(entry, Prestasi):
                serializer = PrestasiSerializer(entry)
                judul = serializer.data['lomba']
                nama = serializer.data['name']
            
            results.append({
                'id': serializer.data['id'], 
                'modul': item_type, 
                'judul': judul,
                'nama': nama
            })
        
        return Response(results)