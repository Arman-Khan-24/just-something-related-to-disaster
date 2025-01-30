import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Clerk/Firebase later
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="w-full max-w-md p-8 mx-4 glass-morphism rounded-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800/50 border-gray-700"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800/50 border-gray-700"
            />
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Sign In
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full border-gray-700 hover:bg-gray-800"
            onClick={() => {/* Will be connected to Google Auth */}}
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
