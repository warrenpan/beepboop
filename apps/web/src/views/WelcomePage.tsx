import { Spinner } from '../components';

interface WelcomePageProps {
  onRegister: () => void;
  onLogin: () => void;
  isLoggingIn: boolean;
}

export const WelcomePage = ({ onRegister, onLogin, isLoggingIn }: WelcomePageProps) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
          <span className="text-2xl">🤖</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">beepboop</h1>
        <p className="text-gray-600">Your secure stablecoin wallet</p>
      </div>

      <div className="space-y-3">
        <button
          onClick={onRegister}
          className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        >
          Register
        </button>

        <button
          onClick={onLogin}
          disabled={isLoggingIn}
          className="w-full flex items-center justify-center px-4 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoggingIn ? (
            <>
              <Spinner />
              <span className="ml-2">Signing In...</span>
            </>
          ) : (
            "Log In"
          )}
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          Powered by ZeroDev passkeys and account abstraction
        </p>
      </div>
    </div>
  </div>
);