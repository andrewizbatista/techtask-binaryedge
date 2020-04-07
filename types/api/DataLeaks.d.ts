interface DataLeak {
  name: string;
  emails?: { email: string }[];
}

type DataLeaks = DataLeak[];
