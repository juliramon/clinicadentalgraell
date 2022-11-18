import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ca">
        <Head>
          <script
            cookie-consent="tracking"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}`}
          />
          <script
            cookie-consent="tracking"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            type="text/javascript"
            src="https://www.termsfeed.com/public/cookie-consent/4.0.0/cookie-consent.js"
            charSet="UTF-8"
          ></script>
          <script
            type="text/javascript"
            charSet="UTF-8"
            dangerouslySetInnerHTML={{
              __html: `document.addEventListener('DOMContentLoaded', function (){{cookieconsent.run({
              notice_banner_type: "simple",
              consent_type: "express",
              palette: "light",
              language: "ca_es",
              page_load_consent_levels: ["strictly-necessary"],
              notice_banner_reject_button_hide: false,
              preferences_center_close_button_hide: false,
              page_refresh_confirmation_buttons: false,
              website_name: "clinicadentalgraell.com",
              website_privacy_policy_url:
                "https://clinicadentalgraell.com//politica-privacitat",
            })}});`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
