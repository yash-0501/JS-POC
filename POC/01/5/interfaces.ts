interface User {
    email: string,
    userId: number,
    // startTrial: () => string
    startTrial(): string
}

const yash: User = {
    email: "yash@gmail.com",
    userId: 121,
    startTrial: () =>{
        return "trialStarted";
    }
}

// Type vs Interface

// Inheritance

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}


const admin1: Admin = {
    email: "admin@gmail.com",
    userId: 121,
    startTrial: () =>{
        return "trialStarted";
    },
    role: "admin"
}


// Adding new fields to an existing interface

interface Window {
  title: string;
}

interface Window {
  ts: number;
}

