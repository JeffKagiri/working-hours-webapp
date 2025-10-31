// Import required modules using CommonJS
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Middleware: Restrict access to working hours (Mon–Fri, 9–17 EAT)
app.use((req, res, next) => {
  const now = new Date();

  // Convert current UTC time to East African Time (UTC+3)
  const options = { timeZone: "Africa/Nairobi", hour12: false };
  const localTime = new Date(now.toLocaleString("en-US", options));

  const day = localTime.getDay();   // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = localTime.getHours();

  const isWorkingDay = day >= 1 && day <= 5; // Monday to Friday
  const isWorkingHour = hour >= 9 && hour < 17; // 9 AM to 5 PM

  if (isWorkingDay && isWorkingHour) {
    next(); // Continue if within working hours
  } else {
    res.send(`
      <html>
        <head>
          <title>Closed</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: linear-gradient(135deg, #dfe9f3, #ffffff);
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
              color: #333;
            }
            .message-box {
              background: white;
              padding: 2rem 3rem;
              border-radius: 15px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #1b4965;
            }
          </style>
        </head>
        <body>
          <div class="message-box">
            <h1>Our Office is Closed</h1>
            <p>We’re open Monday to Friday, 9 AM to 5 PM (East Africa Time).</p>
            <p>Please visit us during working hours. Thank you!</p>
          </div>
        </body>
      </html>
    `);
  }
});

// Set EJS as the template engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

// Serve static files (like CSS)
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => res.render("home", { title: "Home" }));
app.get("/services", (req, res) => res.render("services", { title: "Our Services" }));
app.get("/contact", (req, res) => res.render("contact", { title: "Contact Us" }));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
