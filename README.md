# Working Hours Web App

A simple Express.js web application that displays different pages (Home, Our Services, Contact Us) and restricts access outside of working hours. The app uses **EJS** as its template engine and ensures all requests follow **East African Time (EAT)** working hours: **Monday to Friday, 9 AM to 5 PM**.

---

## Features

- Home, Services, and Contact pages with consistent navigation.  
- Custom middleware that limits access to working hours (Mon–Fri, 9–17 EAT).  
- Dynamic EJS templates for reusable layouts.  
- CSS styling for a clean, centered layout and responsive navigation bar.  
- Timezone handling for East Africa (UTC+3).  

---

## Project Structure

```
working-hours-webapp/
│
├── views/
│   ├── layout.ejs
│   ├── home.ejs
│   ├── services.ejs
│   └── contact.ejs
│
├── public/
│   └── style.css
│
├── server.js
└── package.json
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeffKagiri/working-hours-webapp.git
   ```

2. Navigate into the project directory:
   ```bash
   cd working-hours-webapp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the App

To start the server in development mode:
```bash
npm run dev
```

To start normally:
```bash
npm start
```

Once running, open your browser and visit:
```
http://localhost:3000
```

---

## Working Hours Middleware

The app includes a custom middleware that:
- Checks the current time in **East African Time (EAT)**.  
- Allows access only **Monday to Friday, 9 AM to 5 PM**.  
- Displays a “Closed” message outside working hours.

---

## Technologies Used

- **Node.js**  
- **Express.js**  
- **EJS (Embedded JavaScript Templates)**  
- **express-ejs-layouts**  
- **Nodemon** for development  
- **CSS3** for styling  

---

## Author

**Jeff Kagiri**  
GitHub: [JeffKagiri](https://github.com/JeffKagiri)
