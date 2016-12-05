//store is conected directly to the component if store is change component gets change
//events comes from nodeJS
import EventEmiter from 'events';
// must inport to create dispatcher
import dispatcher from './dispatcher'

class Store extends EventEmiter {
  // //starts with a seed in this case a list of steps
  // constructor() {
  //   super()
  //   this.steps=[
  //     { "Id": 1, "Name": "Step 1", "Description": "Installation of pc sofware", "Status": 0, "Icon": "gear", "AccountId": "", "isOpen": false },
  //     { "Id": 2, "Name": "Step 2", "Description": "Sync your quickbooks Data", "Status": 0, "Icon": "refresh", "AccountId": "", "isOpen": false },
  //     { "Id": 3, "Name": "Step 3", "Description": "Who do you want to email summary to", "Status": 0, "Icon": "email", "AccountId": "", "isOpen": false },
  //     { "Id": 4, "Name": "Step 4", "Description": "Have great day (confirmation sent / received)", "Status": 0, "Icon": "thumbsup", "AccountId": "", "isOpen": false }
  //   ];
  // }
  //
  // // when function is call it will create a new step
  // createSteps(step) {
  //   this.steps.push({
  //      "Id": step.Id,
  //      "Name": step.Name,
  //      "Description": step.Description,
  //      "Status": step.Status,
  //      "Icon": step.Icon,
  //      "AccountId": step.AccountId,
  //      "isOpen": step.isOpen
  //   })
  //   // when this is call the component the componen that uses this store will be listening to up date its state
  //   this.emit('change');
  // }
  // // function to all in store Steps
  // getAll() {
  //   return this.steps;
  // }
  //
  // // handle all action that come from dispatcher
  // handleActions(action) {
  //   // it is check by a switch and will have a type that id it
  //   switch(action.type) {
  //     // call a function
  //     case 'CREATE_STEP': {
  //       this.createSteps(action.step);
  //     }
  //   }
  // };
}

const stepStore = new StepStore;
// creating a new dispatcher listener and you do that with dispatcher.register
// dispatcher.register(stepStore.handleActions.bind(stepStore));


export default stepStore;
