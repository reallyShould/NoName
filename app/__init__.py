from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect

db = SQLAlchemy()
csrf = CSRFProtect()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    # DB
    db.init_app(app)
    csrf.init_app(app)

    # ROUTES
    from app.routes.auth import auth
    from app.routes.dashboard import dashboard
    app.register_blueprint(auth)
    app.register_blueprint(dashboard)

    return app
