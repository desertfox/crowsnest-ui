class JobDetails {
  constructor(
    id,
    name,
    host,
    frequency,
    verbose,
    teams,
    offset,
    search,
    condition,
    history
  ) {
    this.id = id;
    this.name = name;
    this.host = host;
    this.frequency = frequency;
    this.verbose = verbose;
    this.teams = teams;
    this.offset = offset;
    this.search = search;
    this.condition = condition;
    this.history = history;
  }

  hasId() {
    return this.id != null;
  }
}
export { JobDetails };
