from django.urls import path

from . import views

urlspatterns = [
    path('', index, name='index'),
    path('friends/', friends, name='friends'),
    path('game/', game, name='game'),
    path('gamepage/', gamepage, name='gamepage'),
    path('ia/', gameia, name='ia'),
    path('profile/', profile, name='profile'),
    path('register/', register, name='register'),
    path('settings/', settings, name='settings'),
    path('tournaments_overview/', tournaments_overview, name='tournaments_overview'),
    path('tournaments/', tournaments, name='tournaments'),
    path('welcome/', welcome, name='welcome'),
]