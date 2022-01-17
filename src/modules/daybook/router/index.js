export default {
  name: "Daybook",
  component: () =>
    import(/* webpackChunkName: "daybook" */ "../layouts/DayBookLayout.vue"),
  children: [],
};
