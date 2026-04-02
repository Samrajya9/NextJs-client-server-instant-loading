import Link from "next/link";
import { notFound } from "next/navigation";
import { users } from "../../../user";

interface UserPageProps {
  params: Promise<{ id: string }>;
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function UserPage({ params }: UserPageProps) {
  await delay(3000);
  const { id } = await params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col py-16 px-8">
        <Link
          href="/"
          className="mb-8 flex items-center text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Directory
        </Link>

        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-12">
          <div className="mb-8 flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              {user.fullName.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {user.fullName}
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400">
                {user.email}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                About
              </h2>
              <p className="mt-2 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                {user.bio}
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                User ID
              </h2>
              <p className="mt-1 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                {user.id}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
