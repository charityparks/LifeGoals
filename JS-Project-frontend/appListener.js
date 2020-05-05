class AppListener {
   static createListOfActivitiesListener() {
      const btn = document.getElementById('generateActivitiesList');
      btn.addEventListener('click', () => StorageBox.generateListOfActivities());
   }
   static createActivityListener() {
      const newActivityForm = document.getElementById('newActivity');
      newActivityForm.addEventListener('submit', () => AppAdapter.createActivity(event));
   }
}
