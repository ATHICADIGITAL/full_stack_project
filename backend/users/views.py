from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

User = get_user_model()


class RegisterView(APIView):
    def post(self, request):
        data = request.data
        user = User.objects.create(
            username=data['username'],
            email=data['email'],
            password=make_password(data['password']),
        )
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)


class PasswordResetView(APIView):
    def post(self, request):
        email = request.data.get('email')
        user = User.objects.filter(email=email).first()
        if user:
            token = get_random_string(32)
            # Send email logic
            send_mail(
                'Password Reset',
                f'Use this token to reset your password: {token}',
                'from@example.com',
                [email],
            )
            return Response({"message": "Password reset link sent"}, status=status.HTTP_200_OK)
        return Response({"error": "Email not found"}, status=status.HTTP_404_NOT_FOUND)


class LoginView(TokenObtainPairView):
    pass
