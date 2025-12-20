import './App.css';
import { SignedIn, SignInButton } from "@clerk/clerk-react";

function App() {

  return (
    <>
      <div>
       <h1>Welcome to the app</h1>

       <SignedOut>
        <SignInButton mode="modal" >
          <button className="">Sign up please</button>
        </SignInButton>
       </SignedOut>

       <SignedIn>
        <SignOutButton />
       </SignedIn>

       <UserButton />
      </div>
     
    </>
  );
}

export default App;
