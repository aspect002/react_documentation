import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Components from './Pages/Components/Components';
import Props from './Pages/Props/Props';
import Home from './Components/Home/Home';
import ReactThis from './Pages/ReactThis/ReactThis';
import CircularImage from './Components/CircularImage/CircularImage.jsx';
import ProjectStructure from 'Pages/ProjectStructure/ProjectStructure';
import State from 'Pages/State/State';
import LifeCycle from 'Pages/LifeCycle/LifeCycle';
import Events from 'Pages/Events/Events';
import RefsFragmentkeyReactMemoUseMemoUseCallback from 'Pages/RefsFragmentkeyReactMemoUseMemoUseCallback/RefsFragmentkeyReactMemoUseMemoUseCallback';
import Context from 'Pages/Context/Context';
import Router from 'Pages/Router/Router';
import HookForm from 'Pages/HookForm/HookForm';
import Storages from 'Pages/Storages/Storages';
import Hoc from 'Pages/Hoc/Hoc';

const App = () => {
  return (
    <div>
      <CircularImage src="/frontender.jpg" alt="stas" />
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="react" element={<ReactThis />} />
          <Route path="project_structure" element={<ProjectStructure />} />
          <Route path="components" element={<Components />} />
          <Route path="props" element={<Props />} />
          <Route path="state" element={<State />} />
          <Route path="lifeCycle" element={<LifeCycle />} />
          <Route path="events" element={<Events />} />
          <Route path="refs_fragment_key_reactMemo_useMemo_useCallback" element={<RefsFragmentkeyReactMemoUseMemoUseCallback />} />
          <Route path="context" element={<Context />} />
          <Route path="router" element={<Router />} />
          <Route path="hookForm" element={<HookForm />} />
          <Route path="storages" element={<Storages />} />
          <Route path="hoc" element={<Hoc />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
