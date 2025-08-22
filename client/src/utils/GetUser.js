export function getUserDetails() {
    const user = JSON.parse(localStorage.getItem('toDoAppUser'));
    return user;
}