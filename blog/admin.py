from django.contrib import admin
from blog.models import post, BlogComment
# Register your models here.

admin.site.register((post,BlogComment))
# admin.site.register((BlogComment))


# @admin.register(post)

# class PostAdmin(admin.ModelAdmin):
#     class Media:
#         js= ('tinyInject.js',)