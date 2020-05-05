class AppAdapter {
    static url = "http://localhost:3000";

   // READ ACTIVITIES
   static getActivities() {
      // make a fetch request to /activities
      fetch(this.url + '/activities')
      .then(resp => resp.json())
      // populate the activities and categories properties with the returned data
      .then(data => {
         console.log(data)
         data.forEach(activity => {
         new Activity(activity.id, activity.name, activity.category)
         if (!StorageBox.categories.map(category =>  category.name).includes(activity.category.name)) {
            new Category(activity.category.name)
         }
      });
         StorageBox.renderActivities();
      })
      .catch(err => alert(err));
    };
    //CREATE ACTIVITY
    static createActivity(event) {
        event.preventDefault();
        const data = event.target;
        fetch(`${this.url}/activities`, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json',
               'Accept': 'application/json'
          },
         body: JSON.stringify({
            name: data.activity.value,
            category: data.children[2].value
            })
         })
          .then(resp => resp.json())
          .then(data =>  {
            const { id, name, category } = data;
            new Activity(id, name,category)
            StorageBox.renderActivities();
          })
          .catch(err => console.log(err));
      }
      //Delete Activities
      static deleteActivities(activities) {
         StorageBox.listOfActivities.activities.forEach(activity => {
            fetch(`${this.url}/activities/${activity.id}`, {
               method: 'DELETE'
            })
            .then(resp => resp.json())
            .then(data => {
               Activity.delete(data.id)
               StorageBox.renderActivities();
            })
            .catch(err => console.log(err))
        })
      }
}
