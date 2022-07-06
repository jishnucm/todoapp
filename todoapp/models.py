from datetime import date
from tkinter import CASCADE
from django.db import models

class user(models.Model):
    fname=models.CharField(max_length=25) 
    username=models.CharField(max_length=25)
    email=models.EmailField()
    phone=models.TextField()  
    password1=models.TextField()
class todolist(models.Model):
    title=models.CharField(max_length=25) 
    description=models.TextField(max_length=200)
    status=models.TextField(default='')
    date=models.TextField(default='')
    userid=models.ForeignKey(user,on_delete=models.CASCADE)


