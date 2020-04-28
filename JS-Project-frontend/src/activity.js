class Activity {
  constructor(name, category) {
    this.name = name;
    this.category = category;
    StorageBox.activities.push(this);
  }
}
