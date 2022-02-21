import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import BasicTablePage from './Pages/BasicTablePage';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="App">
      <Tabs
        activeKey={activeTab}
        onSelect={setActiveTab}
      >
        <Tab eventKey={1} title="Basic Table">
          <BasicTablePage />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
