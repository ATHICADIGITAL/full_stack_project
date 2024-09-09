from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),  # Include the users app's URLs
    path('api/', include('products.urls')),  # This is for the products app
]
