import { FlowRouter } from "meteor/ostrio:flow-router-extra";

FlowRouter.route("/", {
  name: "public.home",
  conf: {
    // without this option template won't be re-rendered
    // upon navigation between different "item" routes
    // e.g. when navigating from `/item/1` to `/item/2`
    forceReRender: true,
  },
  waitOn: function () {
    return Meteor.subscribe("posts");
  },
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "publicPageHome" });
  },
});
FlowRouter.route("/new", {
  name: "public.new",
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "new" });
  },
});
FlowRouter.route("*", {
  action() {
    // Show 404 error page
    this.render("notFound");
  },
});
