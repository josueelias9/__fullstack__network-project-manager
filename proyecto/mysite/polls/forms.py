from django import forms

class ContactForm(forms.Form):
    name = forms.CharField()
    message = forms.CharField(widget=forms.Textarea)

    def send_email(self):
        # send email using the self.cleaned_data dictionary
        pass

# agregue 08-11-2020
class NameForm(forms.Form):
    your_name = forms.CharField(label='Your name', max_length=100)