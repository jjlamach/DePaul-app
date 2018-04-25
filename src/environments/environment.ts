// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
		apiKey: "AIzaSyCUlkwBCMVHDs5c8OHKQJB23yKEzvIPi2A",
    authDomain: "capstone-e7879.firebaseapp.com",
    databaseURL: "https://capstone-e7879.firebaseio.com",
    projectId: "capstone-e7879",
    storageBucket: "capstone-e7879.appspot.com",
    messagingSenderId: "1061126292844"
		/*
		apiKey: "AIzaSyBopWbPRbb0Z9CPS2_9gCfPKQkymqrI5YY",
    		authDomain: "fir-demo-73efb.firebaseapp.com",
    		databaseURL: "https://fir-demo-73efb.firebaseio.com",
    		projectId: "fir-demo-73efb",
    		storageBucket: "fir-demo-73efb.appspot.com",
    		messagingSenderId: "69893765434"
		*/
	}
};
