import React from 'react';
import { GetStaticProps } from 'next';
import { styled } from '@material-ui/core/styles';

// Components
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import LoginForm from 'components/LoginForm';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others
import useGlobalStyles from 'src/styles';
import { theme } from 'src/theme';

export const LoginPage = ({ pageMeta }: LoginPageProps) => {
  const globalClasses = useGlobalStyles();

  return (
    <>
      <DynamicMetaTags pageMeta={pageMeta} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <Wrapper>
            <Header>
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
            </Header>
            <LoginForm />
          </Wrapper>
        </Grid>
        <Grid item xs={8} className={globalClasses.loginImage}>
          {/* <Credits>
            <Typography variant="body1" color="primary">
              Grant McCurdy
            </Typography>
          </Credits> */}
        </Grid>
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageMeta: {
        metaTitle: 'Login',
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
  paddingLeft: '2rem',
  paddingRight: '2rem',
  '& img': {
    height: '50px',
  },
});

const Header = styled('div')({
  paddingBottom: '2rem',
});

const Credits = styled('div')({
  padding: '1rem',
  backgroundColor: theme.palette.secondary.main,
  opacity: 0.5,
});
