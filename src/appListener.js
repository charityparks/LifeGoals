class AppListener {
   static generateListOfActivitiesListener() {
      const btn = document.getElementById('generateListOfActivities');
      btn.addEventListener('click', () => StorageBox.generateListOfActivities());
   }
   static createActivityListener() {
      const newActivityForm = document.getElementById('newActivity');
      newActivityForm.addEventListener('submit', () => AppAdapter.createActivity(event));
   }

   static getActivitiesListeners() {
      const healthLabel = document.getElementById('healthLabel');
      const fitnessLabel = document.getElementById('fitnessLabel');
      const financeLabel = document.getElementById('financeLabel');
      const travelLabel = document.getElementById('travelLabel');
      const entertainmentLabel = document.getElementById('entertainmentLabel');
      const wellbeingLabel = document.getElementById('wellbeingLabel');

      const healthDiv = document.getElementById('health');
      const fitnessDiv = document.getElementById('fitness');
      const financeDiv = document.getElementById('finance');
      const travelDiv = document.getElementById('travel');
      const entertainmentDiv = document.getElementById('entertainment');
      const wellbeingDiv = document.getElementById('wellbeing');

      healthLabel.addEventListener('mouseover', () => {
         healthDiv.classList.remove('hidden');
      });
      fitnessLabel.addEventListener('mouseover', () => {
         fitnessDiv.classList.remove('hidden');
      });
      financeLabel.addEventListener('mouseover', () => {
         financeDiv.classList.remove('hidden');
      });
      travelLabel.addEventListener('mouseover', () => {
         travelDiv.classList.remove('hidden');
      });
      entertainmentLabel.addEventListener('mouseover', () => {
         entertainmentDiv.classList.remove('hidden');
      });
      wellbeingLabel.addEventListener('mouseover', () => {
         wellbeingDiv.classList.remove('hidden');
      });
      healthLabel.addEventListener('mouseout', () => {
         healthDiv.classList.add('hidden');
      });
      fitnessLabel.addEventListener('mouseout', () => {
         fitnessDiv.classList.add('hidden');
      });
      financeLabel.addEventListener('mouseout', () => {
         financeDiv.classList.add('hidden');
      });
      travelLabel.addEventListener('mouseout', () => {
         travelDiv.classList.add('hidden');
      });
      entertainmentLabel.addEventListener('mouseout', () => {
         entertainmentDiv.classList.add('hidden');
      });
      wellbeingLabel.addEventListener('mouseout', () => {
         wellbeingDiv.classList.add('hidden');
      });

   }
}
