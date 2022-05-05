from django.test import TestCase
from django.test import Client

# Create your tests here.


from .models import Persona

class PersonaModelTests(TestCase):

    def test_was_published_recently_with_future_question(self):
        persona = Persona(nombre="josue")
        self.assertIs(persona.nombre, 'josue')

    def test_hola(self):
        c = Client()
        response = c.get('http://127.0.0.1:8000/tdp/dataFlujo')
        self.assertIs(response.status_code,200)

