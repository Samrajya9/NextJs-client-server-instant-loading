import Link from "next/link";
import { users } from "../user";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col items-center py-16 px-8">
        <h1 className="text-4xl font-bold mb-12 tracking-tight text-zinc-900 dark:text-zinc-50">
          User Directory
        </h1>
        <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="group relative flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-lg font-bold text-zinc-600 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400">
                  {user.fullName.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    {user.fullName}
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                View profile
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
