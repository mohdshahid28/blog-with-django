from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect
from home.models import Contact
from blog.models import post as Post
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
# Create your views here.
def home(request):
    allposts= Post.objects.all()
    context = {'allposts': allposts}
    return render(request, 'home/home.html', context)

def about(request):
    return render(request, 'home/about.html')

def contact(request):
    if request.method== 'POST':
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        content = request.POST['content']
        print(name,email,phone,content)

        if len(name)<3 or len(email)<4 or len(phone)<10 or len(content)<10:
            messages.error(request, 'Please fill the form correctly')
        else:
            content = Contact(name=name,email=email,phone=phone,content=content)
            content.save()
            messages.success(request, 'your message has been sent Successfully')
    return render(request, 'home/contact.html')

def search(request):
    query= request.GET['query']
    if len(query)>78:
        allposts = Post.object.none()
    else:
        allpoststitle = Post.objects.filter(title__icontains= query)
        allpostscontent = Post.objects.filter(content__icontains= query)
        allposts = allpoststitle.union(allpostscontent)
    if allposts.count() == 0:
        messages.warning(request, ' no search result found. please refine your query')
    params = {'allposts':allposts, 'query':query}
    return render(request, 'home/search.html', params)

#authentication APIs
def handleSignUp(request):
    if request.method == 'POST':
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        # check for erroneous inputs
        if len(username) > 10 :
            messages.error(request, 'username must be under 10 charecter')
            return redirect('home')
        
        if len(pass1) < 4 :
            messages.error(request, 'passsword must be more than 4 charecter')
            return redirect('home')
        
        if not username.isalnum() :
            messages.error(request, 'username should only contain letters and numbers')
            return redirect('home')
        
        if pass1 != pass2:
            messages.error(request, 'password do not match')
            return redirect('home')

        #create the user
        myuser = User.objects.create_user(username,email, pass1)
        myuser.first_name = fname
        myuser.last_name =  lname
        myuser.save()
        messages.success(request, 'your icoder account successfully created')
        return redirect('home')
    else:
        return HttpResponse("404 - Not Found")

def handleLogin(request):
    if request.method == 'POST':
        loginusername = request.POST['loginusername']
        loginpass = request.POST['loginpassword']
        user = authenticate(username = loginusername, password = loginpass)
        if user is not None:
            login(request, user)
            messages.success(request,"successfully logged in")
            return redirect('home')
        else:
            messages.error(request, "Invalid Credentials, Please try again")
            return redirect('home')

    return HttpResponse("404 - Not Found")


def handleLogout(request):
    # if request.method == 'POST':
    logout(request)
    messages.success(request,"successfully logged Out")
    return redirect('home')
    
    return HttpResponse("404 - Not Found")