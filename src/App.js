import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavbarB4S from './component/NavbarB4S';
import Sidebar from './component/Sidebar';
import CampaignDashboard from './component/CampaignDashboard';
import SelectProspects from './component/SelectProspects';
import StayTuned from './component/StayTuned';
import CreateCampaign from './component/CreateCampaign';
import Performance from './component/Performance';
import './App.css';

const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <Sidebar name="Campaign Dashboard"/>,
    main: () => <CampaignDashboard/>
  },
  { path: '/dashboard',
    sidebar: () => <Sidebar name="Dashboard"/>,
    main: () => <StayTuned/>
  },
  { path: '/about',
    sidebar: () => <Sidebar name="About"/>,
    main: () => <StayTuned/>
  },
  { path: '/campaign-dashboard',
    sidebar: () => <Sidebar name="Campaign Dashboard"/>,
    main: () => <CampaignDashboard/>
  },
  { path: '/prospects',
    sidebar: () => <Sidebar name="Campaign Dashboard"/>,
    main: () => <SelectProspects/>
  },
  { path: '/setting',
    sidebar: () => <Sidebar name=""/>,
    main: () => <StayTuned/>
  },
  { path: '/profile',
    sidebar: () => <Sidebar name=""/>,
    main: () => <StayTuned/>
  },
  { path: '/create-campaign',
    sidebar: () => <Sidebar name=""/>,
    main: () => <CreateCampaign/>
  },
  { path: '/performance',
    sidebar: () => <Sidebar name=""/>,
    main: () => <Performance/>
  }
]

class App extends Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
      <div className="App">
        <div id="outer-container">
          <div>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
          <main id="page-wrap">
            <NavbarB4S/>
            {/* content */ }
            <div>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
