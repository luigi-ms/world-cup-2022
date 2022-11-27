import Vue from 'vue';
import VueRouter from 'vue-router';
import GroupsView from '../views/GroupsView.vue';
import RoundOf16 from '../views/Round16View.vue';
import QuarterFinal from '../views/QuarterFinal.vue';
import SemiAndFinal from '../views/SemiAndFinal.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/groups'
  },
  {
    path: '/groups',
    name: 'groups',
    component: GroupsView
  },
  {
    path: '/round-16',
    name: 'roundOf16',
    component: RoundOf16
  },
  {
    path: '/quarter',
    name: 'quarterFinal',
    component: QuarterFinal
  },
  {
    path: '/semi-and-final',
    name: 'semiAndFinal',
    component: SemiAndFinal
  }
];

const router = new VueRouter({ routes });

export default router
