from django.urls import path
from .import views

urlpatterns = [
    path('', views.home, name='home'),
    path('signin',views.signin,name='signin'),
    path('login',views.login,name='login'),
    path('todo',views.todo,name='todo'),
    path('addtodo',views.addtodo,name='addtodo'),
    path('display_data',views.display_data),
    path('delete_todo',views.delete_todo),
    path('update_todo',views.update_todo),
    path('update_table',views.update_table),
    path('update_date',views.update_date),
    path('log_out',views.logout, name='log_out'),

    path('username_check',views.username_check),
    path('email_check',views.email_check),
    path('phone_check',views.phone_check),

]
