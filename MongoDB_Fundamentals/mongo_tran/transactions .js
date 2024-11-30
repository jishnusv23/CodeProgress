const session = db.getMongo().startSession();
session.startTransaction();

try {
  db.students.deleteMany({ mark: 15 });
  session.commitTransaction();
} catch (errr) {
  session.abortTransaction(); //undo Changes
} finally {
  session.endSession();
}
