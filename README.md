# Personal Portfolio - Santhosh Nuthakki

A modern, responsive portfolio website for DevOps Engineer Santhosh Nuthakki, built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Functional contact form with EmailJS integration
- **Portfolio Showcase**: Highlighting DevOps and AIOps projects
- **Skills Visualization**: Interactive skill progress bars
- **Service Offerings**: Detailed service descriptions

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## Contact Form Setup

The contact form uses EmailJS to send emails directly to your inbox. To set it up:

1. **Create EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account

2. **Configure Email Service**:
   - Add your email service (Gmail recommended)
   - Create a new email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_email}}` - Your email (santhosh.nuthakki.1@gmail.com)

3. **Update Configuration**:
   - Replace the placeholder values in `src/utils/emailService.ts`:
     - `serviceId`: Your EmailJS service ID
     - `templateId`: Your EmailJS template ID
     - `publicKey`: Your EmailJS public key

4. **Template Example**:
   ```
   Subject: New Contact Form Message: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   Reply directly to this email to respond to {{from_name}}.
   ```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is ready for deployment on:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Contact

- **Email**: santhosh.nuthakki.1@gmail.com
- **LinkedIn**: [santhosh-nuthakki-a4343121b](https://linkedin.com/in/santhosh-nuthakki-a4343121b)
- **GitHub**: [SanthoshNuthakki](https://github.com/SanthoshNuthakki)

## License

This project is open source and available under the [MIT License](LICENSE).