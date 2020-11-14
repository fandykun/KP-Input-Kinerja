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

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from itertools import chain

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