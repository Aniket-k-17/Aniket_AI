import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../lib/theme";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b0f1d" },
      { title: "Aniket Kondhalkar — AI Engineer & ML Engineer" },
      { name: "description", content: "Portfolio of Aniket Shantaram Kondhalkar — AI Engineer, Machine Learning Engineer, and Data Analyst based in Pune, India. Projects in ML, Deep Learning, Generative AI, and BI." },
      { name: "author", content: "Aniket Shantaram Kondhalkar" },
      { name: "keywords", content: "Aniket Kondhalkar, AI Engineer, Machine Learning, Data Analyst, Generative AI, Deep Learning, Python, Streamlit, Power BI, Pune" },
      { property: "og:title", content: "Aniket Kondhalkar — AI Engineer & ML Engineer" },
      { property: "og:description", content: "Designing intelligent systems that transform data into actionable insights and real-world AI solutions." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Aniket.AI" },
      { property: "og:image", content: "https://aniket.ai/__l5e/assets-v1/ef345809-da03-4f00-a131-fdd5d1c6477d/aniket-photo.webp" },
      { property: "og:image:alt", content: "Aniket Shantaram Kondhalkar — AI Engineer" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aniket Kondhalkar — AI Engineer & ML Engineer" },
      { name: "twitter:description", content: "AI / ML Engineer & Data Analyst — Projects in ML, Deep Learning, Generative AI, and BI." },
      { name: "twitter:image", content: "https://aniket.ai/__l5e/assets-v1/ef345809-da03-4f00-a131-fdd5d1c6477d/aniket-photo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aniket Shantaram Kondhalkar",
          jobTitle: "AI Engineer & Machine Learning Engineer",
          email: "mailto:Aniketkondhalkar4717@gmail.com",
          telephone: "+91-9322813103",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/aniket-kondhalkar-174a0a258/",
            "https://github.com/Aniket-k-17",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
