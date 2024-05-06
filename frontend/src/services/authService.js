const users = [
    { id: 1, username: 'user1', password: 'password1', name: 'User One' },
    { id: 2, username: 'user2', password: 'password2', name: 'User Two' },
  ];
  
  // Function to authenticate user credentials
  export const authenticateUser = (username, password) => {
    // Find user with matching credentials
    const user = users.find(u => u.username === username && u.password === password);
    return user ? { success: true, user } : { success: false, message: 'Invalid username or password' };
  };
  
  // Function to get user by ID
  export const getUserById = (id) => {
    return users.find(u => u.id === id);
  };
  
  // Function to check if user is authenticated
  export const isAuthenticated = () => {
    // Simulate authentication by checking if user is logged in 
    return localStorage.getItem('loggedInUser') !== null;
  };
  
  // Function to log in user
  export const loginUser = (userId) => {
    // Simulate login by storing user ID in localStorage
    localStorage.setItem('loggedInUser', userId);
  };
  
  // Function to log out user
  export const logoutUser = () => {
    // Simulate logout by removing user ID from localStorage
    localStorage.removeItem('loggedInUser');
  };
  
  // Function to sign up new user
  export const signUp = (userData) => {
    // Simulate sign up process by adding new user to users array
    const newUser = { id: users.length + 1, ...userData };
    users.push(newUser);
    return newUser;
  };
  