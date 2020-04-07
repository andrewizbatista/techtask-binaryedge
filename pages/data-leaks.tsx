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
// Others
import useGlobalStyles from 'src/styles';
import searchByDomain from 'src/mocks/searchByDomain';

export const DataLeaksPage = ({ pageMeta }: DataLeaksPageProps) => {
  const globalClasses = useGlobalStyles();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [dataLeaks, setDataLeaks] = useState<DataLeaks>([]);

  const handleTabChange = (e: ChangeEvent<{}>, value: number) => {
    setSearchTerm('');
    setActiveTab(value);
  };

  useEffect(() => {
    setDataLeaks(searchByDomain);

    return () => setDataLeaks([]);
  }, []);

  const searchPhrase = `${activeTab === 0 ? 'Domain' : 'Email'}: ${searchTerm}`;

  return (
    <AppLayout pageMeta={pageMeta}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        className={globalClasses.spacing4}
      >
        <Tab label="Search By Domain" />
        <Tab label="Search By Email" />
      </Tabs>
      <div className={globalClasses.spacing6}>
        {activeTab === 0 && <SearchByDomain setSearchTerm={setSearchTerm} />}
        {activeTab === 1 && <SearchByEmail setSearchTerm={setSearchTerm} />}
      </div>
      <div className={globalClasses.spacing2}>
        <Typography variant="h2" color="secondary">
          Data Leaks
        </Typography>
        {searchTerm && (
          <Typography variant="h3" color="textSecondary">
            {searchPhrase}
          </Typography>
        )}
      </div>
      {dataLeaks.map((dataLeak: DataLeak) => (
        <DataLeak key={dataLeak.name} dataLeak={dataLeak} />
      ))}
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageMeta: {
        metaTitle: 'Data Leaks',
        metaDescription: 'BinaryEdge Tech Task by @andrewizbatista',
      },
    },
  };
};

export interface DataLeaksPageProps {
  pageMeta: PageMeta;
}

export default DataLeaksPage;
