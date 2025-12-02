# Contact Form Email Setup Instructions

The contact form is configured to send emails to **patel.motors.7680@gmail.com** using Web3Forms service.

## Setup Steps:

### 1. Get Your Web3Forms Access Key (FREE)

1. Go to https://web3forms.com/
2. Click "Get Started" or "Create Access Key"
3. Enter your email: **patel.motors.7680@gmail.com**
4. Click "Create Access Key"
5. You'll receive an access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 2. Update the Contact Form

1. Open `contact.html` file
2. Find this line (around line 84):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key from step 1

### 3. Test the Form

1. Open your website
2. Go to the Contact page
3. Fill out the form and submit
4. You should receive an email at patel.motors.7680@gmail.com

## Features:

✅ Form submissions sent directly to your email
✅ No backend server required
✅ Free for up to 250 submissions per month
✅ Form validation included
✅ Success/error notifications
✅ Mobile responsive

## Alternative Option (If you prefer):

If you want to use a different email service, you can also use:

- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: If hosting on Netlify

## Current Configuration:

- **Email To**: patel.motors.7680@gmail.com
- **Subject**: "New Contact Form Submission from Patel Motors Website"
- **Fields Collected**: Name, Email, Phone, Message

## Need Help?

If you need assistance setting this up, please contact your web developer or refer to Web3Forms documentation: https://docs.web3forms.com/
