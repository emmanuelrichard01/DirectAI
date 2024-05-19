import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import ScrollToTopButton from '@components/ScrollToTopButton';

export const metadata = {
  title: 'Direct AI',
  description: 'Stacks of Efficient AI prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/sprompts/public/assets/images/dlogo.ico" type="image/x-icon" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <Nav />
          <main className="app">
            {children}
            <ScrollToTopButton />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
