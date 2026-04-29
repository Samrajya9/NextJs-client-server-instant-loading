"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Loader from "./loader";

export default function RouteChange({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const currentPath = useRef(pathname);

  useEffect(() => {
    // Listen for clicks on any internal link at the document level.
    // This fires immediately when the user clicks — before any network
    // request leaves the browser — so even on a slow connection the
    // loader appears instantly.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, hash-only links, and same-page links.
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//");
      const isHashOnly = href.startsWith("#");
      const isSamePage = href === currentPath.current;

      if (isExternal || isHashOnly || isSamePage) return;

      // Show the loader the moment the user clicks.
      setLoading(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    // Once the new route is fully rendered and the pathname has updated,
    // hide the loader. The server's loading.tsx (Suspense boundary) has
    // taken over by this point, so there's no flash of unstyled content.
    if (pathname !== currentPath.current) {
      currentPath.current = pathname;
      setLoading(false);
    }
  }, [pathname]);

  if (loading) return <Loader />;

  return <>{children}</>;
}

// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import Loader from "./loader";

// export default function RouteChange({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const currentPath = useRef(pathname);
//   const navigationInProgress = useRef(false);

//   // --- Handle internal link clicks ---
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       const anchor = (e.target as HTMLElement).closest("a");
//       if (!anchor) return;

//       const href = anchor.getAttribute("href");
//       if (!href) return;

//       const isExternal =
//         href.startsWith("http://") ||
//         href.startsWith("https://") ||
//         href.startsWith("//");
//       const isHashOnly = href.startsWith("#");
//       const isSamePage = href === currentPath.current;

//       if (isExternal || isHashOnly || isSamePage) return;

//       // Show loader
//       navigationInProgress.current = true;
//       setLoading(true);
//     };

//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
//   }, []);

//   // --- Handle programmatic navigation ---
//   useEffect(() => {
//     const originalPush = router.push;
//     const originalReplace = router.replace;

//     // Wrap push
//     router.push = (url: string, options?: any) => {
//       navigationInProgress.current = true;
//       setLoading(true);
//       return originalPush(url, options);
//     };

//     // Wrap replace
//     router.replace = (url: string, options?: any) => {
//       navigationInProgress.current = true;
//       setLoading(true);
//       return originalReplace(url, options);
//     };

//     return () => {
//       router.push = originalPush;
//       router.replace = originalReplace;
//     };
//   }, [router]);

//   // --- Hide loader once route updates ---
//   useEffect(() => {
//     if (pathname !== currentPath.current) {
//       currentPath.current = pathname;
//       navigationInProgress.current = false;
//       setLoading(false);
//     }
//   }, [pathname]);

//   // --- Cancel loader if user quickly navigates elsewhere ---
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (navigationInProgress.current) {
//         navigationInProgress.current = false;
//         setLoading(false);
//       }
//     }, 5000); // Cancel after 5s just in case

//     return () => clearTimeout(timeout);
//   }, [loading]);

//   if (loading) return <Loader />;

//   return <>{children}</>;
// }
