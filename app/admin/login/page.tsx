import { login } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07152B] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
          Admin Portal
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
          Sign in to access the PrimeNest dashboard.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-50 dark:bg-[#07152B]/80 backdrop-blur-md py-8 px-4 shadow-xl shadow-black/50 sm:rounded-2xl sm:px-10 border border-slate-200 dark:border-white/10">
          <form className="space-y-6" action={login}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm placeholder-slate-500 focus:outline-none focus:ring-[#00AEEF] focus:border-[#00AEEF] sm:text-sm bg-slate-50 dark:bg-[#07152B]/50 text-slate-900 dark:text-white"
                  placeholder="admin@primenest.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm placeholder-slate-500 focus:outline-none focus:ring-[#00AEEF] focus:border-[#00AEEF] sm:text-sm bg-slate-50 dark:bg-[#07152B]/50 text-slate-900 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 rounded-xl shadow-sm text-sm font-bold text-slate-900 dark:text-white bg-[#00AEEF] hover:bg-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF] focus:ring-offset-[#07152B] transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
