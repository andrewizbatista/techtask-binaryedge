import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// Components
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others
import useGlobalStyles from 'src/styles';

export const IndexPage = ({ pageMeta }: IndexPageProps) => {
  const globalClasses = useGlobalStyles();
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      router.push('/data-leaks');
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <div className={globalClasses.indexWrapper}>
      <DynamicMetaTags pageMeta={pageMeta} />
      <img
        src="https://www.binaryedge.io/img/logo.png"
        title="BinaryEdge"
        alt="BinaryEdge"
      />
      <Typography variant="h1" color="secondary">
        Tech Task
      </Typography>
      <Typography variant="body1" color="secondary">
        Created by{' '}
        <Link
          href="https://github.com/andrewizbatista"
          title="@andrewizbatista on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          @andrewizbatista
        </Link>
      </Typography>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageMeta: {
        metaTitle: 'BinaryEdge Tech Task by @andrewizbatista',
        metaDescription: 'BinaryEdge Tech Task by @andrewizbatista',
      },
    },
  };
};

export interface IndexPageProps {
  pageMeta: PageMeta;
}

export default IndexPage;
