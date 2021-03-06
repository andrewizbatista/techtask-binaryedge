import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// Components
import Typography from '@material-ui/core/Typography';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others404 Not Found
import useGlobalStyles from 'src/styles';

const ErrorPage = ({ pageMeta }: ErrorPageProps) => {
  const globalClasses = useGlobalStyles();
  const router = useRouter();

  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    const route = authToken ? '/data-leaks' : '/login';

    setRedirectTo(route);
    setTimeout(() => {
      router.push(route);
    }, 2000);
  }, []);

  return (
    <div className={globalClasses.indexWrapper}>
      <DynamicMetaTags pageMeta={pageMeta} />
      <img
        src="https://www.binaryedge.io/img/logo.png"
        title="BinaryEdge"
        alt="BinaryEdge"
      />
      <div className={globalClasses.spacing2}>
        <Typography variant="h2" color="primary">
          404 Not Found
        </Typography>
      </div>
      {redirectTo && (
        <Typography variant="h3" color="secondary">
          Redirecting you to <code>{redirectTo}</code>
        </Typography>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageMeta: {
        metaTitle: '404 Not Found',
        metaDescription: 'BinaryEdge Tech Task by @andrewizbatista',
      },
    },
  };
};

export interface ErrorPageProps {
  pageMeta: PageMeta;
}

export default ErrorPage;
