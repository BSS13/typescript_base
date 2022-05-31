// Project Type
enum ProjectStatus {
  Active,
  Finished,
}

const projectState = ProjectState.getInstance();

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
