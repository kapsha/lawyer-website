// Your Firebase config (Replace with your Firebase config from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyB2-CfeJtPN69JBZlgpv4WsY5NFljLw8ko",
    authDomain: "lawyer-website-2ac35.firebaseapp.com",
    projectId: "lawyer-website-2ac35",
    storageBucket: "lawyer-website-2ac35.appspot.com",
    messagingSenderId: "890560820921",
    appId: "1:890560820921:web:e905fc3299affe75fa4d68",
    measurementId: "G-41S9SK0WD6"
};

// Initialize Firebase
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 
// Handle Login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('loginMessage').innerHTML = "Login successful!";
            // Redirect or perform actions upon successful login
            console.log('User logged in:', user);

            // Redirect to a protected area or client dashboard
            window.location.href = "dashboard.html";  // Example redirect after successful login
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('loginMessage').innerHTML = `Error: ${errorMessage}`;
        });
});
