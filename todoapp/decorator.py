from django.shortcuts import render, redirect


def auth_customer(func):
    def wrap(request, *args, **kwargs):
        if 'login_data' in request.session:
            return func(request, *args, **kwargs)
        else:
            return redirect('login')
    return wrap