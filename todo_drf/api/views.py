from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from .models import TaskModel
from .serializers import TaskSerializer
# Create your views here.

@api_view(['GET', 'POST'])
def api_info_view(request, *args, **kwargs):
    api_urls = {
        "List  ":"/task-list/",
        "Detail":"/task-detail/<str:pk>",
        "Create":"/task-create/",
        "Update":"/task-update/<str:pk>",
        "Delete":"/task-delete/<str:pk>",
    }
    return Response(api_urls)

@api_view(['GET'])
def task_list_view(request, *args, **kwargs):
    tasks = TaskModel.objects.all()
    serializer = TaskSerializer(instance=tasks, many=True)
    return Response(serializer.data, status=200)

@api_view(['GET'])
def task_detail_view(request, pk, *args, **kwargs):
    task_exists = TaskModel.objects.filter(id=pk).exists()
    if not task_exists: return Response({'message':'Task not found'}, status=404)
    task = TaskModel.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, many=False)
    return Response(serializer.data, status=200)

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def task_create_view(request, *args, **kwargs):
    serializer = TaskSerializer(data=request.data, many=False)
    if not serializer.is_valid(): return Response({'message':'Invalid request'}, status=400)
    serializer.save()
    return Response(serializer.data, status=200)

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def task_update_view(request, pk, *args, **kwargs):
    task_exists = TaskModel.objects.filter(id=pk).exists()
    if not task_exists: return Response({'message':'Task not found'}, status=404)
    task = TaskModel.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data, many=False)
    if not serializer.is_valid(): return Response({'message':'Invalid request'}, status=400)
    serializer.save()
    return Response(serializer.data, status=200)
    

@api_view(['POST', 'DELETE'])
# @permission_classes([IsAuthenticated])
def task_delete_view(request, pk, *args, **kwargs):
    task_exists = TaskModel.objects.filter(id=pk).exists()
    if not task_exists: return Response({'message':'Task not found'}, status=404)
    task = TaskModel.objects.get(id=pk)
    task.delete()
    return Response({'message':'Task deleted'}, status=200)


