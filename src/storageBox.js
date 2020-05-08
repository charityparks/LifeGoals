class StorageBox {
    static activities = [];
    static categories = [];
    url = "http://localhost:3000";
    static listOfActivities = {};  // dailyPractice
   
         //ADD EVENT LISTENERS
   bindEventListeners = () => {
      AppListener.generateListOfActivitiesListener();
      AppListener.createActivityListener();
      AppListener.getActivitiesListeners();
      // this.appListener = new AppListener();
   };
   // RETRIEVING 6 RANDOM ACTIVITIES, DELETING THEM AND POPULATING THEM IN THE DOM

   static generateListOfActivities() {
      //generate random activities
      const randomActivities = this.generateRandomActivities();
      // instantiate a ListOfActivities instance with these activities
      new ListOfActivities(randomActivities);
      //make fetch request to delete activities from db
      AppAdapter.deleteActivities(randomActivities);
      // insert data into DOM
      this.renderListOfActivities();
   };

   //retrieve 1 random activity from each category
   static generateRandomActivities() {
      let randomActivities = [];
      StorageBox.categories.forEach(category => {
          randomActivities.push(Activity.byCategory(category.name)[Math.floor(Math.random()*Activity.byCategory(category.name).length)])
      });
      return randomActivities;
   }
      // ADD LIST OF ACTIVITIES TO DOM
   static renderListOfActivities(){
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
      const divs = {
         healthDiv: document.getElementById('health'),
         fitnessDiv: document.getElementById('fitness'),
         financeDiv: document.getElementById('finance'),
         travelDiv: document.getElementById('travel'),
         entertainmentDiv: document.getElementById('entertainment'),
         wellbeingDiv: document.getElementById('wellbeing')
      }
      for (let key in divs) {
         divs[key].classList.add('hidden');
         divs[key].innerHTML = "";
      }
      const { healthDiv, fitnessDiv, financeDiv, travelDiv, entertainmentDiv, wellbeingDiv } = divs;
      StorageBox.activities.forEach(activity => {
         const p = document.createElement('p');
         p.innerText = activity.name;
         //where we append it will be conditional based on what category it belongs to
         switch(activity.category.name) {
            case "health":
               healthDiv.appendChild(p);
               break;
            case "fitness":
               fitnessDiv.appendChild(p);
               break;
            case "finance":
               financeDiv.appendChild(p);
               break;
            case "travel":
               travelDiv.appendChild(p);
               break;
            case "entertainment":
               entertainmentDiv.appendChild(p);
               break;
            case "wellbeing":
               wellbeingDiv.appendChild(p);
               break;
            default:
              // code block
          }
      });
    };
}
