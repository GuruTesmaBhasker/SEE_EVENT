from flask import Flask, render_template, request, redirect, url_for, flash, session
from db import db
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'your-default-secret-key')

# Database connection initialization
def init_db():
    """Initialize database connection"""
    try:
        if db.connect():
            print("✅ Database connected successfully!")
        else:
            print("⚠️ Warning: Could not connect to database")
    except Exception as e:
        print(f"❌ Database connection error: {e}")

# Initialize database when app starts
with app.app_context():
    init_db()

@app.route('/')
def home():
    return render_template('signup.html')



@app.route('/profile')
def profiles():
    return render_template('/profile.html')

@app.route('/signup')
def signupdb():
    return render_template('signup.html')

@app.route('/create-event')
def create_eventdb():
    return render_template('/create-event.html')

@app.route('/date-filter')
def date_filterdb():
    return render_template('/date-filter.html')

@app.route('/event-details')
def event_detailsdb():
    return render_template('/event-details.html')

@app.route('/event-filter')
def event_filterdb():
    return render_template('/event-filter.html')

@app.route('/home-original')
def home_originaldb():
    return render_template('/home-original.html')

@app.route('/home.html')
def home_htmldb():
    return render_template('/home.html')

@app.route('/location-filter')
def location_filterdb():
    return render_template('/location-filter.html')

@app.route('/notifications')
def notificationsdb():
    return render_template('/notifications.html')

@app.route('/payment')
def paymentdb():
    return render_template('/payment.html')

@app.route('/register')
def registerdb():
    return render_template('/register.html')

@app.route('/search-bar')
def search_bardb():
    return render_template('/search-bar.html')

@app.route('/onboarding-1')
def onboarding_1db():
    return render_template('/onboarding-1.html')

@app.route('/onboarding-2')
def onboarding_2db():
    return render_template('/onboarding-2.html')

@app.route('/onboarding-3')
def onboarding_3db():
    return render_template('/onboarding-3.html')

@app.route('/bookmarks')
def profile_bookmarksdb():
    return render_template('/bookmarks.html')

@app.route('/edit-profile')
def profile_edit_profiledb():
    return render_template('/edit-profile.html')

@app.route('/feedback')
def profile_feedbackdb():
    return render_template('/feedback.html')

@app.route('/my-events')
def profile_my_events():
    return render_template('/my-events.html')

@app.route('/terms')
def profile_termsdb():
    return render_template('/terms.html')

@app.route('/forgot-password')
def forgot_passworddb():
    return render_template('forgot-password.html')

@app.route('/login')
def logindb():
    return render_template('login.html')



if __name__ == '__main__':
    app.run(debug=True) 