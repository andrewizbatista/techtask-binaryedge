import React from 'react';
import { GetStaticProps } from 'next';
import { styled } from '@material-ui/core/styles';

// Components
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import LoginForm from 'components/LoginForm';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others
import useGlobalStyles from 'src/styles';
import { mediaQueries } from 'src/theme';

export const LoginPage = ({ pageMeta }: LoginPageProps) => {
  const globalClasses = useGlobalStyles();

  return (
    <>
      <DynamicMetaTags pageMeta={pageMeta} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={5}>
          <Wrapper>
            <Header>
              <div className={globalClasses.spacing2}>
                <img
                  src="https://www.binaryedge.io/img/logo.png"
                  title="BinaryEdge"
                  alt="BinaryEdge"
                />
              </div>
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
            </Header>
            <LoginForm />
          </Wrapper>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={7} className={globalClasses.loginImage} />
        </Hidden>
      </Grid>
    </>
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

export interface LoginPageProps {
  pageMeta: PageMeta;
}

export default LoginPage;

const Wrapper = styled('div')({
  paddingLeft: '4rem',
  paddingRight: '4rem',
  '& img': {
    height: '100px',
  },
  [mediaQueries.tablet]: {
    paddingTop: '4rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
});

const Header = styled('div')({
  paddingBottom: '2rem',
});
