from flask import Flask, render_template

app = Flask(__name__)

'''@app.route('/profile')
def profile():
    return render_template('profile/profile.html')
'''
@app.route('/pages/signup')
def show_signup():
    return render_template('signup.html')

@app.route('/home/create-event')
def create_event():
    return render_template('home/create-event.html')

@app.route('/home/date-filter')
def date_filter():
    return render_template('home/date-filter.html')

@app.route('/home/event-details')
def event_details():
    return render_template('home/event-details.html')

@app.route('/home/event-filter')
def event_filter():
    return render_template('home/event-filter.html')

@app.route('/home/home-original')
def home_original():
    return render_template('home/home-original.html')

@app.route('/home/home.html')
def home_html():
    return render_template('home/home.html')

@app.route('/home/location-filter')
def location_filter():
    return render_template('home/location-filter.html')

@app.route('/home/notifications')
def notifications():
    return render_template('home/notifications.html')

@app.route('/home/payment')
def payment():
    return render_template('home/payment.html')

@app.route('/home/register')
def register():
    return render_template('home/register.html')

@app.route('/home/search-bar')
def search_bar():
    return render_template('home/search-bar.html')

@app.route('/onboarding/onboarding-1')
def onboarding_1():
    return render_template('onboarding/onboarding-1.html')

@app.route('/onboarding/onboarding-2')
def onboarding_2():
    return render_template('onboarding/onboarding-2.html')

@app.route('/onboarding/onboarding-3')
def onboarding_3():
    return render_template('onboarding/onboarding-3.html')

@app.route('/profile/bookmarks')
def profile_bookmarks():
    return render_template('profile/bookmarks.html')

@app.route('/profile/edit-profile')
def profile_edit_profile():
    return render_template('profile/edit-profile.html')

@app.route('/profile/feedback')
def profile_feedback():
    return render_template('profile/feedback.html')

@app.route('/profile/my-events')
def profile_my_events():
    return render_template('profile/my-events.html')

@app.route('/profile/terms')
def profile_terms():
    return render_template('profile/terms.html')

@app.route('/pages/forgot-password')
def forgot_password():
    return render_template('forgot-password.html')

@app.route('/pages/login')
def login():
    return render_template('login.html')


'''@app.route('/pages/signup')
def signup():
    return render_template('signup.html')
'''
if __name__ == '__main__':
    app.run(debug=True)


'''@app.route('/')
def home():
    return 'Hey Ilakkiyaa, Flask is working! 💥'
    

@app.route('/profile')
def profile():
    return render_template('profile/terms.html')

if __name__ == '__main__':
    app.run(debug=True)
    '''
