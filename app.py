from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('signup.html')



@app.route('/profile')
def profiles():
    return render_template('profile/profile.html')

@app.route('/pages/signup')
def signupdb():
    return render_template('signup.html')

@app.route('/home/create-event')
def create_eventdb():
    return render_template('home/create-event.html')

@app.route('/home/date-filter')
def date_filterdb():
    return render_template('home/date-filter.html')

@app.route('/home/event-details')
def event_detailsdb():
    return render_template('home/event-details.html')

@app.route('/home/event-filter')
def event_filterdb():
    return render_template('home/event-filter.html')

@app.route('/home/home-original')
def home_originaldb():
    return render_template('home/home-original.html')

@app.route('/home/home.html')
def home_htmldb():
    return render_template('home/home.html')

@app.route('/home/location-filter')
def location_filterdb():
    return render_template('home/location-filter.html')

@app.route('/home/notifications')
def notificationsdb():
    return render_template('home/notifications.html')

@app.route('/home/payment')
def paymentdb():
    return render_template('home/payment.html')

@app.route('/home/register')
def registerdb():
    return render_template('home/register.html')

@app.route('/home/search-bar')
def search_bardb():
    return render_template('home/search-bar.html')

@app.route('/onboarding/onboarding-1')
def onboarding_1db():
    return render_template('onboarding/onboarding-1.html')

@app.route('/onboarding/onboarding-2')
def onboarding_2db():
    return render_template('onboarding/onboarding-2.html')

@app.route('/onboarding/onboarding-3')
def onboarding_3db():
    return render_template('onboarding/onboarding-3.html')

@app.route('/profile/bookmarks')
def profile_bookmarksdb():
    return render_template('profile/bookmarks.html')

@app.route('/profile/edit-profile')
def profile_edit_profiledb():
    return render_template('profile/edit-profile.html')

@app.route('/profile/feedback')
def profile_feedbackdb():
    return render_template('profile/feedback.html')

@app.route('/profile/my-events')
def profile_my_events():
    return render_template('profile/my-events.html')

@app.route('/profile/terms')
def profile_termsdb():
    return render_template('profile/terms.html')

@app.route('/pages/forgot-password')
def forgot_passworddb():
    return render_template('forgot-password.html')

@app.route('/pages/login')
def logindb():
    return render_template('login.html')



if __name__ == '__main__':
    app.run(debug=True)


'''@app.route('/')
def home():
    return 'Hey Ilakkiyaa, Flask is working! 💥'
    

@app.route('/profile')
def profile():
    return render_template('profile/terms.html')

<<<<<<< HEAD
'''
=======
if __name__ == '__main__':
    app.run(debug=True)
    '''
>>>>>>> 9aea05d8ffc479d391b2e784a4c0df9e06bd1cd1
