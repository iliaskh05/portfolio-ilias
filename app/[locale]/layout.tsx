import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/system/ThemeProvider";
import { SmoothScroll } from "@/components/system/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { SocialRail } from "@/components/layout/SocialRail";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale}>
        <ThemeProvider>
          <SmoothScroll>
            <Header />
            <SocialRail />
            <main className="relative z-10 min-h-screen bg-bg">{children}</main>
          </SmoothScroll>
        </ThemeProvider>
      </div>
    </NextIntlClientProvider>
  );
}
