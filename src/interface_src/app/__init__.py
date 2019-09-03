from flask import Flask
import os,  secrets

app = Flask(__name__)
app.config["SECRET_KEY"] = secrets.token_urlsafe(16)
app.config['TEMPLATES_AUTO_RELOAD'] = True

#Initial all the newsfeed from the source
current_dir = os.path.dirname(os.path.realpath(__file__))


from app import views