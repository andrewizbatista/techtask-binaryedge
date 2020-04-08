import React, { useState, useEffect, ChangeEvent } from 'react';
import { GetStaticProps } from 'next';

// Components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppLayout from 'components/AppLayout';
import DataLeak from 'components/DataLeak';
import SearchByDomain from 'components/SearchByDomain';
import SearchByEmail from 'components/SearchByEmail';
import Loading from 'components/Loading';

// Others
import useFetch from 'src/hooks/useFetch';
import useGlobalStyles from 'src/styles';

export const DataLeaksPage = ({ pageMeta }: DataLeaksPageProps) => {
  const globalClasses = useGlobalStyles();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchTermDomain, setSearchTermDomain] = useState<string>('');
  const [searchTermEmail, setSearchTermEmail] = useState<string>('');

  const domainDataLeaks = useFetch({
    method: 'GET',
    endpoint: '/api/v1/domain/dataleaks',
  });

  const emailDataLeaks = useFetch({
    method: 'GET',
    endpoint: '/api/v1/email/dataleaks',
  });

  const handleTabChange = (e: ChangeEvent<{}>, value: number) => {
    setActiveTab(value);
  };

  const loadingProps = !activeTab ? domainDataLeaks : emailDataLeaks;
  const searchTerm = !activeTab ? searchTermDomain : searchTermEmail;
  const dataLeaks = !activeTab
    ? domainDataLeaks.state.data
    : emailDataLeaks.state.data;

  return (
    <AppLayout pageMeta={pageMeta}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="secondary"
        className={globalClasses.spacing2}
      >
        <Tab label="Search By Domain" />
        <Tab label="Search By Email" />
      </Tabs>
      <div className={globalClasses.spacing6}>
        {activeTab === 0 && (
          <SearchByDomain
            useFetchCall={domainDataLeaks}
            setSearchTerm={setSearchTermDomain}
          />
        )}
        {activeTab === 1 && (
          <SearchByEmail
            useFetchCall={emailDataLeaks}
            setSearchTerm={setSearchTermEmail}
          />
        )}
      </div>
      <Loading {...loadingProps}>
        {dataLeaks && (
          <>
            <div className={globalClasses.spacing2}>
              <Typography variant="h2" color="secondary">
                Data Leaks
              </Typography>
              {searchTerm && (
                <Typography variant="h3" color="textSecondary">
                  {`Search results for: ${searchTerm}`}
                </Typography>
              )}
            </div>
            {dataLeaks.map((dataLeak: DataLeak) => (
              <DataLeak key={dataLeak.name} dataLeak={dataLeak} />
            ))}
          </>
        )}
      </Loading>
    </AppLayout>
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

export interface DataLeaksPageProps {
  pageMeta: PageMeta;
}

export default DataLeaksPage;
