// Routing  Apis ednpoints

const _Dashboard = "/";
const workers = {
  add: "/workers/add-workers",
  list: "/workers/workers-list",
};
const factory = {
  add: "/factory/add-factory",
  list: "/factory/factory-list",
};
const union = {
  add: "/union/add-union",
  list: "/union/union-list",
};
const association = {
  add: "/association/add-association",
  list: "/association/association-list",
};
const accounts = {
  add: "/account/add-account",
  list: "/account/account-list",
};
const training = {
  add: "/training/add-trainer",
  category: "/training/training-category",
  topic: "/training/training-topic",
  entry: "/training/training-entry",
  list: "/training/training-list",
};
const settings = {
  nationalFederation: "/settings/national-federation",
  sectoralFederation: "/settings/sectoral-federation",
  department: "/settings/department",
  designation: "/settings/designation",
  sector: "/settings/sector",
  education: "/settings/education",
  religion: "/settings/religion",
  employmentContract: "/settings/employment-contract",
  machineries: "/settings/machineries",
};

export {
  _Dashboard,
  workers,
  factory,
  union,
  association,
  accounts,
  training,
  settings,
};
