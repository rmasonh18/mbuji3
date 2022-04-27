const baseUrl = process.env.NODE_ENV === "production" 
? 'https://jacquelinetaylorandfriends.org' 
: 'http://localhost:3000';

export default baseUrl;