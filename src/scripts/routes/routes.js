import Home from '../views/pages/Home';
import Detail from '../views/pages/Detail';
import SearchResult from '../views/pages/SearchResult';
import Favorite from '../views/pages/Favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/search/:id': SearchResult,
  '/favorite': Favorite,
};

export default routes;
