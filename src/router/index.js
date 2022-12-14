import Vue from 'vue';
import VueRouter from 'vue-router';
import MatchesView from '../views/MatchesView.vue';
import GroupsView from '../views/GroupsView.vue';
import RoundOf16 from '../views/Round16View.vue';
import QuarterFinal from '../views/QuarterFinal.vue';
import SemiAndFinal from '../views/SemiAndFinal.vue';
import MapAndTable from '../views/MapAndTable.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/matches'
  },
  {
    path: '/matches',
    name: 'matches',
    component: MatchesView,
    redirect: '/matches/groups',
    children: [
      {
        path: 'groups',
        name: 'groups',
        component: GroupsView
      },
      {
        path: 'round-16',
        name: 'roundOf16',
        component: RoundOf16
      },
      {
        path: 'quarter',
        name: 'quarterFinal',
        component: QuarterFinal
      },
      {
        path: 'semi-and-final',
        name: 'semiAndFinal',
        component: SemiAndFinal
      }
    ]
  },
  {
    path: '/map-and-table',
    name: 'mapAndTable',
    component: MapAndTable
  }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router
