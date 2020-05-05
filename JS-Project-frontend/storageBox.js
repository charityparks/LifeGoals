class StorageBox {
    static activities = [];
    static categories = [];
    url = "http://localhost:3000";
    static listOfActivities = {};  // dailyPractice

         //ADD EVENT LISTENERS
   bindEventListeners = () => {

      AppListener.createListOfActivitiesListener();
      AppListener.createActivityListener();
   };



   // RETRIEVING 6 RANDOM ACTIVITIES, DELETING THEM AND POPULATING THEM IN THE DOM
   static generateListOfActivities() {
      const randomActivities = this.generateRandomActivities();
      // instantiate a ListOfActivities instance with these activities
      new ListOfActivities(randomActivities);
      //make fetch request to delete activities from db
      AppAdapter.deleteActivities(randomActivities);
      // insert data into DOM
      this.renderListofActivities();
   }

   //retrieve 1 random activity from each category
   static generateRandomActivities() {
      let randomActivities = [];
      StorageBox.categories.forEach(category => {
          randomActivities.push(Activity.byCategory(category.name)[Math.floor(Math.random()*Activity.byCategory(category.name).length)])
      });
      return randomActivities;
   }
   // ADD LIST OF ACTIVITIES TO DOM
   static renderListofActivities(){
      const listOfActivitiesDiv = document.getElementById('listOfActivities');
      listOfActivitiesDiv.innerHTML = "";
      StorageBox.listOfActivities.activities.forEach(activity => {
         const activityDiv = document.createElement('div');
         activityDiv.innerText = activity.name;
         listOfActivitiesDiv.appendChild(activityDiv);
      });

         };
            //POPULATING DOM W/ ACTIVITY DATA FOR EACH CATEGORY
   static renderActivities() {
      // create DOM nodes and insert data into them to render in the DOM
      const healthSelect = document.getElementById('health');
      const fitnessSelect = document.getElementById('fitness');
      const financeSelect = document.getElementById('finance');
      const travelSelect = document.getElementById('travel');
      const entertainmentSelect = document.getElementById('entertainment');
      const wellbeingSelect = document.getElementById('wellbeing');
      healthSelect.innerHTML = "";
      fitnessSelect.innerHTML = "";
      financeSelect.innerHTML = "";
      travelSelect.innerHTML = "";
      entertainmentSelect.innerHTML = "";
      wellbeingSelect.innerHTML = "";
      StorageBox.activities.forEach(activity => {

        const option = document.createElement('option');
        option.innerText = activity.name;

        switch(activity.category.name) {
            case "health":
              healthSelect.appendChild(option);
              break;
            case "fitness":
              fitnessSelect.appendChild(option);
              break;
            case "finance":
              financeSelect.appendChild(option);
              break;
            case "travel":
              travelSelect.appendChild(option);
              break;
            case "entertainment":
              entertainmentSelect.appendChild(option);
              break;
            case "wellbeing":
              wellbeingSelect.appendChild(option);
              break;
            default:
              // code block
          }
      });
    };
}
