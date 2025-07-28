/**
 * SEE EVENT - Common JavaScript Utilities
 * Professional helper functions and utilities
 * Author: GuruTesmaBhasker
 * Version: 1.0.0
 */

// App Configuration
const APP_CONFIG = {
    name: 'SEE EVENT',
    version: '1.0.0',
    apiUrl: window.location.origin,
    defaultPage: 'onboarding-1.html',
    storage: {
        prefix: 'seeEvent_',
        keys: {
            user: 'userProfile',
            preferences: 'userPreferences',
            events: 'userEvents',
            bookmarks: 'bookmarkedEvents'
        }
    }
};

// Utility Functions
const Utils = {
    /**
     * Safe localStorage operations
     */
    storage: {
        set(key, value) {
            try {
                localStorage.setItem(APP_CONFIG.storage.prefix + key, JSON.stringify(value));
                return true;
            } catch (error) {
                console.error('Storage error:', error);
                return false;
            }
        },
        
        get(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(APP_CONFIG.storage.prefix + key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (error) {
                console.error('Storage error:', error);
                return defaultValue;
            }
        },
        
        remove(key) {
            try {
                localStorage.removeItem(APP_CONFIG.storage.prefix + key);
                return true;
            } catch (error) {
                console.error('Storage error:', error);
                return false;
            }
        },
        
        clear() {
            try {
                Object.keys(localStorage)
                    .filter(key => key.startsWith(APP_CONFIG.storage.prefix))
                    .forEach(key => localStorage.removeItem(key));
                return true;
            } catch (error) {
                console.error('Storage error:', error);
                return false;
            }
        }
    },

    /**
     * Navigation utilities
     */
    navigation: {
        goTo(path) {
            window.location.href = path;
        },
        
        goBack() {
            window.history.back();
        },
        
        reload() {
            window.location.reload();
        },
        
        getCurrentPage() {
            return window.location.pathname;
        }
    },

    /**
     * Form validation utilities
     */
    validation: {
        email(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },
        
        phone(phone) {
            const regex = /^[\+]?[1-9][\d]{0,15}$/;
            return regex.test(phone.replace(/\s/g, ''));
        },
        
        password(password) {
            return password.length >= 6;
        },
        
        required(value) {
            return value && value.trim().length > 0;
        }
    },

    /**
     * Date and time utilities
     */
    date: {
        format(date, options = {}) {
            const defaultOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
        },
        
        isToday(date) {
            const today = new Date();
            const checkDate = new Date(date);
            return today.toDateString() === checkDate.toDateString();
        },
        
        isFuture(date) {
            return new Date(date) > new Date();
        },
        
        addDays(date, days) {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    },

    /**
     * UI/UX utilities
     */
    ui: {
        showToast(message, type = 'info', duration = 3000) {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = message;
            toast.style.transform = 'translateX(0)';
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            }, duration);
        },
        
        showLoading(show = true) {
            let loader = document.getElementById('app-loader');
            
            if (show && !loader) {
                loader = document.createElement('div');
                loader.id = 'app-loader';
                loader.innerHTML = '<div class="loading"></div>';
                loader.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                `;
                document.body.appendChild(loader);
            } else if (!show && loader) {
                loader.remove();
            }
        },
        
        confirmDialog(message, callback) {
            if (confirm(message)) {
                callback();
            }
        }
    },

    /**
     * Event management utilities
     */
    events: {
        generateId() {
            return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        },
        
        formatEventData(eventData) {
            return {
                id: eventData.id || this.generateId(),
                title: eventData.title,
                description: eventData.description,
                date: eventData.date,
                time: eventData.time,
                location: eventData.location,
                category: eventData.category,
                price: eventData.price || 'Free',
                capacity: eventData.capacity,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
        }
    }
};

// Global error handler
window.addEventListener('error', function(event) {
    console.error('App Error:', event.error);
    Utils.ui.showToast('Something went wrong. Please try again.', 'error');
});

// Make utilities globally available
window.APP_CONFIG = APP_CONFIG;
window.Utils = Utils;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log(`${APP_CONFIG.name} v${APP_CONFIG.version} - Ready`);
});

export { APP_CONFIG, Utils };
