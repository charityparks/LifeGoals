class Activity {
  constructor(id, name, category){
    this.name = name;
    this.category = category;
    this.id = id;
    StorageBox.activities.push(this);
  }
  
  static delete(activityId) {
     StorageBox.activities = StorageBox.activities.filter(activity => parseInt(activityId) !== activity.id);
  }
  static byCategory(categoryName) {
    return StorageBox.activities.filter(activity => activity.category.name === categoryName)
  }
}
