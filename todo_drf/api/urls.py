from django.urls import re_path, path
from .views import (
    api_info_view,
    task_list_view,
    task_detail_view,
    task_create_view,
    task_update_view,
    task_delete_view
    )

urlpatterns = [
    path('task-list/', task_list_view),
    path('task-create/', task_create_view),
    path('task-detail/<str:pk>/', task_detail_view),
    path('task-update/<str:pk>/', task_update_view),
    path('task-delete/<str:pk>/', task_delete_view),
    path('', api_info_view),
]