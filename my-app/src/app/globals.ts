export let userType = '';
export let userName = '';
export let password = '';
export let firstName = '';
export let lastName = '';
export let degree = '';

export function setValue(newValue: string) {
  userType = newValue;
}

export function setUser(name: string, pass: string, name1: string, name2: string, deg: string) {
  userName = name;
  password = pass;
  firstName = name1;
  lastName = name2;
  degree = deg;

}
