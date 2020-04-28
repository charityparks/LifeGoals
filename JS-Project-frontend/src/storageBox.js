class StorageBox {
    static activities = []
    categories = []
    url = "http://localhost:3000"
    static listOfActivities = {};  // dailyPractice

    // listen for button click

    bindEventListeners() {
      const btn = document.getElementById('generateActivitiesList');
      btn.addEventListener('click', this.getRandomActivities)
    };

    getRandomActivities() {
      let randomActivities = [];
      for (let i = 0; i < 3; i++) {
        randomActivities.push(StorageBox.activities[Math.floor(Math.random()*StorageBox.activities.length)]);
      };
      new ListOfActivities(randomActivities)
      const listOfActivitiesDiv = document.getElementById('listOfActivities');
      StorageBox.listOfActivities.activities.forEach(listOfActivities => {
        const activityDiv = document.createElement('div');
         activityDiv.innerText = listOfActivities.name;
         listOfActivitiesDiv.appendChild(activityDiv);
      })
    }


    getActivities() {
      // make a fetch request to /activities
      fetch(this.url + '/activities')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        data.forEach(activity => {
          new Activity(activity.name, activity.category)
        });
        this.renderActivities();
      })
      .catch(err => alert(err));
    };

    renderActivities() {
      // create DOM nodes and insert data into them to render in the DOM
      const healthSelect = document.getElementById('health');
      const fitnessSelect = document.getElementById('fitness');
      const financeSelect = document.getElementById('finance');
      const travelSelect = document.getElementById('travel');
      const entertainmentSelect = document.getElementById('entertainment');
      const wellbeingSelect = document.getElementById('wellbeing');
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
            case "wellbeinng":
              wellbeingSelect.appendChild(option);
              break;
            default:
              // code block
          }
      })
    };
}
