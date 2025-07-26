// Global JavaScript functions for SEE EVENT App

// Navigation functions
function navigateToPage(pagePath) {
    window.location.href = pagePath;
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        navigateToPage('../../index.html');
    }
}

function goBackToHome() {
    navigateToPage('pages/home/home.html');
}

function goBackToProfile() {
    navigateToPage('pages/profile/profile.html');
}

// Authentication navigation
function navigateToLogin() {
    navigateToPage('pages/auth/login.html');
}

function navigateToSignUp() {
    navigateToPage('pages/auth/signup.html');
}

function navigateToForgotPassword() {
    navigateToPage('pages/auth/forgot-password.html');
}

// Onboarding navigation
function nextOnboarding(currentPage) {
    const nextPages = {
        1: 'pages/onboarding/onboarding-2.html',
        2: 'pages/onboarding/onboarding-3.html',
        3: 'pages/home/home.html'
    };
    
    if (nextPages[currentPage]) {
        navigateToPage(nextPages[currentPage]);
    }
}

function skipOnboarding() {
    navigateToPage('pages/home/home.html');
}

// Home page navigation
function navigateToCreateEvent() {
    navigateToPage('pages/home/create-event.html');
}

function navigateToEventDetails(eventName) {
    navigateToPage('pages/home/event-details.html?event=' + encodeURIComponent(eventName));
}

function navigateToDateFilter() {
    navigateToPage('pages/home/date-filter.html');
}

function navigateToEventFilter() {
    navigateToPage('pages/home/event-filter.html');
}

function navigateToLocationFilter() {
    navigateToPage('pages/home/location-filter.html');
}

function navigateToRegister(eventName) {
    navigateToPage('pages/home/register.html?event=' + encodeURIComponent(eventName));
}

function navigateToPayment() {
    navigateToPage('pages/home/payment.html');
}

// Profile navigation
function navigateToProfile() {
    navigateToPage('pages/profile/profile.html');
}

function navigateToEditProfile() {
    navigateToPage('pages/profile/edit-profile.html');
}

function navigateToBookmarks() {
    navigateToPage('pages/profile/bookmarks.html');
}

function navigateToFeedback() {
    navigateToPage('pages/profile/feedback.html');
}

function navigateToMyEvents() {
    navigateToPage('pages/profile/my-events.html');
}

function navigateToTerms() {
    navigateToPage('pages/profile/terms.html');
}

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            showError(input, 'Please enter a valid email address');
            isValid = false;
        } else if (input.type === 'password' && !validatePassword(input.value)) {
            showError(input, 'Password must be at least 8 characters');
            isValid = false;
        } else {
            clearError(input);
        }
    });
    
    return isValid;
}

function showError(input, message) {
    clearError(input);
    input.style.borderColor = '#ef4444';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
}

function clearError(input) {
    input.style.borderColor = '#e5e7eb';
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Local storage functions
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

function getFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing from localStorage:', error);
        return false;
    }
}

// User management
function saveUserData(userData) {
    return saveToStorage('userData', userData);
}

function getUserData() {
    return getFromStorage('userData');
}

function isUserLoggedIn() {
    const userData = getUserData();
    return userData && userData.isLoggedIn;
}

function logout() {
    removeFromStorage('userData');
    navigateToPage('pages/auth/login.html');
}

// Event management
function saveEvent(eventData) {
    const events = getFromStorage('userEvents') || [];
    events.push({
        ...eventData,
        id: Date.now(),
        createdAt: new Date().toISOString()
    });
    return saveToStorage('userEvents', events);
}

function getUserEvents() {
    return getFromStorage('userEvents') || [];
}

function removeEvent(eventId) {
    const events = getUserEvents();
    const filteredEvents = events.filter(event => event.id !== eventId);
    return saveToStorage('userEvents', filteredEvents);
}

// Bookmark management
function addBookmark(eventData) {
    const bookmarks = getFromStorage('bookmarks') || [];
    const exists = bookmarks.find(bookmark => bookmark.id === eventData.id);
    
    if (!exists) {
        bookmarks.push({
            ...eventData,
            bookmarkedAt: new Date().toISOString()
        });
        saveToStorage('bookmarks', bookmarks);
        return true;
    }
    return false;
}

function removeBookmark(eventId) {
    const bookmarks = getFromStorage('bookmarks') || [];
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.id !== eventId);
    return saveToStorage('bookmarks', filteredBookmarks);
}

function getBookmarks() {
    return getFromStorage('bookmarks') || [];
}

function isBookmarked(eventId) {
    const bookmarks = getBookmarks();
    return bookmarks.some(bookmark => bookmark.id === eventId);
}

// Search functionality
function searchEvents(query, events) {
    if (!query.trim()) return events;
    
    const searchTerm = query.toLowerCase();
    return events.filter(event => 
        event.title?.toLowerCase().includes(searchTerm) ||
        event.description?.toLowerCase().includes(searchTerm) ||
        event.location?.toLowerCase().includes(searchTerm) ||
        event.category?.toLowerCase().includes(searchTerm)
    );
}

// Filter functionality
function filterEventsByDate(events, startDate, endDate) {
    if (!startDate && !endDate) return events;
    
    return events.filter(event => {
        const eventDate = new Date(event.date);
        if (startDate && eventDate < new Date(startDate)) return false;
        if (endDate && eventDate > new Date(endDate)) return false;
        return true;
    });
}

function filterEventsByLocation(events, location) {
    if (!location) return events;
    
    return events.filter(event => 
        event.location?.toLowerCase().includes(location.toLowerCase())
    );
}

function filterEventsByCategory(events, category) {
    if (!category) return events;
    
    return events.filter(event => 
        event.category?.toLowerCase() === category.toLowerCase()
    );
}

// UI utility functions
function showLoading(buttonElement) {
    if (buttonElement) {
        buttonElement.disabled = true;
        const originalText = buttonElement.textContent;
        buttonElement.dataset.originalText = originalText;
        buttonElement.innerHTML = '<span class="loading"></span> Loading...';
    }
}

function hideLoading(buttonElement) {
    if (buttonElement && buttonElement.dataset.originalText) {
        buttonElement.disabled = false;
        buttonElement.textContent = buttonElement.dataset.originalText;
        delete buttonElement.dataset.originalText;
    }
}

function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove toast
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
}

// Format functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatTime(time) {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

// Share functionality
function shareEvent(eventData) {
    if (navigator.share) {
        navigator.share({
            title: eventData.title,
            text: eventData.description,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support Web Share API
        const text = `Check out this amazing event: ${eventData.title} - ${window.location.href}`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Link copied to clipboard!', 'success');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast('Link copied to clipboard!', 'success');
        }
    }
}

// Initialize app
function initApp() {
    // Set up common event listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Back button functionality
        const backButtons = document.querySelectorAll('.back-button, [onclick*="goBack"]');
        backButtons.forEach(btn => {
            if (!btn.onclick) {
                btn.addEventListener('click', goBack);
            }
        });
        
        // Form validation
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
            if (submitButton) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    if (validateForm(form)) {
                        // Handle form submission
                        console.log('Form is valid');
                    }
                });
            }
        });
        
        // Auto-clear form errors on input
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
        
        // Initialize search functionality if search input exists
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }
        
        // Initialize filter buttons if they exist
        const filterButtons = document.querySelectorAll('.filter-button');
        if (filterButtons.length > 0) {
            initializeFilters();
        }
    });
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        const title = card.querySelector('.event-title');
        const description = card.querySelector('.event-description');
        
        if (title && description) {
            const titleText = title.textContent.toLowerCase();
            const descText = description.textContent.toLowerCase();
            
            if (titleText.includes(searchTerm) || descText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const eventCards = document.querySelectorAll('.event-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter || this.textContent.toLowerCase();
            
            // Filter events
            eventCards.forEach(card => {
                const category = card.dataset.category || '';
                if (filter === 'all' || category.toLowerCase() === filter.toLowerCase()) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Auto-initialize when script loads
initApp();
