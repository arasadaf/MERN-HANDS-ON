//Assignment 3: Application Settings Controller
//---------------------------------------------
//Scenario : A web app stores user preferences as settings.

//Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


//Tasks :
    //1.Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light"
console.log("theme after toggle:", settings.theme)
    //2. Turn autoSave to true
console.log("autoSave before:", settings.autoSave)
settings.autoSave=true
console.log("autoSave after:", settings.autoSave)
    //3. Remove the notifications setting
delete settings.notifications
console.log(Object.keys(settings))
    //4. Freeze the settings object so it cannot be modified
Object.freeze(settings)
settings.theme="light"
console.log("test after freezing object:", settings.theme)