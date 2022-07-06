import email
from turtle import color
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.urls import re_path

from todoapp.decorator import auth_customer
from .models import user, todolist
from django.views.decorators.csrf import csrf_exempt


def home(request):
    return render(request, 'home.html')

def signin(request):
    if request.method == 'POST':
        name = request.POST['fname']
        username = request.POST['user_name']
        email = request.POST['email']
        phone = request.POST['phone']
        password = request.POST['password1']
        user_data = user(fname=name, username=username,
                         email=email, phone=phone, password1=password)
        user_data.save()

        return redirect('login')
    return render(request, 'signin.html')


def login(request):
    msg = ''
    if request.method == 'POST':

        username = request.POST['username']
        password = request.POST['password']

        try:

            login_data = user.objects.get(
                username=username, password1=password)

            request.session['login_data'] = login_data.id
            return redirect('todo')
        except:
            msg = 'incorrect username or password'

    return render(request, 'login.html', {'msg': msg})
@auth_customer
def todo(request):
    user_data = user.objects.get(id=request.session['login_data'])
    todolist_data = todolist.objects.filter(
        userid=request.session['login_data'])
    return render(request, 'addtodo.html', {'todolist': todolist_data, 'user': user_data})


@csrf_exempt
def addtodo(request):

    
    if request.method == 'POST':
        title = request.POST['title']
        description = request.POST['description']
        status = request.POST['status']
        date = request.POST['date']
        User_id = user.objects.get(id=request.session['login_data'])
        if  title=='' or description=='' or date == '':
            return JsonResponse({"message":"field are empty"})
        else:
            todo = todolist(title=title, description=description,
                        status=status, date=date, userid=User_id)
            todo.save()
    
     
            return JsonResponse({'message': "data added"})


def display_data(request):
    list_data = todolist.objects.filter(userid=request.session['login_data'])
    json_data = [{'id': i.id, 'title': i.title, 'description': i.description,
                  'status': i.status, 'date': i.date}for i in list_data]

    return JsonResponse({'message': json_data})


@csrf_exempt
def delete_todo(request):
    id = request.POST['id']
    todolist.objects.get(id=id).delete()

    return JsonResponse({'message': "deleted"})


@csrf_exempt
def update_todo(request):
    id = request.POST['id']
    todo_data = todolist.objects.get(id=id)
    json_todo = [{'id': todo_data.id, 'title': todo_data.title,
                  'description': todo_data.description, 'status': todo_data.status, 'date': todo_data.date}]

    return JsonResponse({'message': json_todo})

@csrf_exempt
def update_table(request):
    if request.method == 'POST':
        id = request.POST['id']
        title = request.POST['title']
        description = request.POST['description']
        status = request.POST['status']
        date = request.POST['date']

        todolist.objects.filter(id=id).update(
            title=title, description=description, status=status, date=date)

        return JsonResponse({'message': "updated"})

@csrf_exempt
def update_date(request):

    date = request.POST['date']
    todo_date = todolist.objects.filter(
        userid=request.session['login_data'], date=date)

    if date == '':
        todo_date = todolist.objects.filter(
            userid=request.session['login_data'])

    json_todo_date = [{'id': i.id, 'title': i.title, 'description': i.description,
                       'status': i.status, 'date': i.date}for i in todo_date]

    return JsonResponse({'message': json_todo_date})



def logout(request):

  
    del request.session['login_data']
    return redirect ('home')

    
  


@csrf_exempt
def username_check(request):
    username = request.POST['username']
    username_data = user.objects.filter(username=username).exists()
    if username_data:
        return JsonResponse({'message': "true"})
    else:
        return JsonResponse({'message': "false"})

@csrf_exempt
def email_check(request):
    email = request.POST['email']
    email_data = user.objects.filter(email=email).exists()
    if email_data:
        return JsonResponse({'message': "true"})
    else:
        return JsonResponse({'message': "false"})


@csrf_exempt
def phone_check(request):
    phone = request.POST['phone']
    phone_data = user.objects.filter(phone=phone).exists()
    if phone_data:
        return JsonResponse({'message': "true"})
    else:
        return JsonResponse({'message': "false"})


