import { Helmet } from 'react-helmet';
import MainTemplate from 'templates/MainTemplate';
import HomePage from 'views/HomePage';

const Root = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <MainTemplate>
      <HomePage />
    </MainTemplate>
  </>
);

export default Root;
